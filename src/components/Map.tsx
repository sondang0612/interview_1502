/* eslint-disable @next/next/no-img-element */
"use client";
import Maker from "@/components/Maker";
import React, { useState, useRef, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

const tiles = ["/images/map.png"];

const makers = [
  { x: 0.5, y: 0.1 },
  { x: 0.4, y: 0.4 },
];

const ZoomableMap: React.FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState<Position | null>(null);
  const [lastDistance, setLastDistance] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const limitPosition = (
    newPosition: Position,
    containerWidth: number,
    containerHeight: number,
    scaledWidth: number,
    scaledHeight: number
  ): Position => {
    const minX = containerWidth - scaledWidth;
    const minY = containerHeight - scaledHeight;
    const maxX = 0;
    const maxY = 0;

    return {
      x: Math.min(maxX, Math.max(minX, newPosition.x)),
      y: Math.min(maxY, Math.max(minY, newPosition.y)),
    };
  };

  const handleZoom = (deltaY: number, clientX: number, clientY: number) => {
    setScale((prevScale) => {
      const newScale = Math.min(Math.max(prevScale - deltaY * 0.001, 1), 3);
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();

        const offsetX = (clientX - container.left) / container.width;
        const offsetY = (clientY - container.top) / container.height;

        const newPosition: Position = {
          x: position.x - offsetX * (newScale - prevScale) * container.width,
          y: position.y - offsetY * (newScale - prevScale) * container.height,
        };

        setPosition(() =>
          limitPosition(
            newPosition,
            container.width,
            container.height,
            container.width * newScale,
            container.height * newScale
          )
        );
      }

      return newScale;
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const newPosition: Position = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      };

      const limitedPosition = limitPosition(
        newPosition,
        container.width,
        container.height,
        container.width * scale,
        container.height * scale
      );

      setPosition(limitedPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();
    handleZoom(e.deltaY, e.clientX, e.clientY);
  };

  const resetZoom = () => {
    if (containerRef.current) {
      setScale(1);
      setPosition({
        x: 0,
        y: 0,
      });
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    handleZoom(-400, e.clientX, e.clientY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastDistance(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setTouchStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setLastDistance(dist);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging && touchStart) {
      const container = containerRef.current?.getBoundingClientRect();
      if (!container) return;

      const newPosition: Position = {
        x: e.touches[0].clientX - touchStart.x,
        y: e.touches[0].clientY - touchStart.y,
      };

      setPosition(
        limitPosition(
          newPosition,
          container.width,
          container.height,
          container.width * scale,
          container.height * scale
        )
      );
    } else if (e.touches.length === 2 && lastDistance !== null) {
      const newDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );

      const delta = newDistance - lastDistance;
      setLastDistance(newDistance);
      handleZoom(
        -delta * 0.01,
        (e.touches[0].clientX + e.touches[1].clientX) / 2,
        (e.touches[0].clientY + e.touches[1].clientY) / 2
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        setPosition((prev) =>
          limitPosition(
            prev,
            container.width,
            container.height,
            container.width * scale,
            container.height * scale
          )
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scale]);

  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", preventScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", preventScroll);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <button
        onClick={resetZoom}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={scale <= 1}
      >
        Reset
      </button>
      <div
        ref={containerRef}
        className="w-full md:h-[30rem] lg:h-[32rem] min-w-[500px] overflow-hidden border-2 border-gray-300 rounded-lg relative bg-gray-100 h-[436px]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute"
          ref={cursorRef}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "top left",
            transition: isDragging ? "none" : "transform 0.3s ease-out",
            touchAction: "none",
          }}
        >
          <div className="grid grid-cols-1 gap-0 relative">
            {tiles.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Tile ${index + 1}`}
                className="w-screen h-full object-cover"
                draggable="false"
              />
            ))}
            {makers.map((maker, index) => (
              <Maker
                key={index}
                top={`${maker.y * 100}%`}
                left={`${maker.x * 100}%`}
                transform={`translate(-50%, -50%) scale(${1 / scale})`}
                transformOrigin="center"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomableMap;
