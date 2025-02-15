/* eslint-disable @next/next/no-img-element */
import useGetPageContentByParams from "@/hooks/useTranslation";
import React from "react";

const images = [
  "/images/bo.png",
  "/images/chery.png",
  "/images/cam.png",
  "/images/quyt.png",
];

const GalleryGrid = () => {
  const { pageContent } = useGetPageContentByParams();

  return (
    <div className="mt-10 md:mt-[15rem] pt-8 md:pt-[60px]">
      <div className="flex items-center md:gap-20 gap-2 justify-between md:flex-row flex-col-reverse">
        <p className="text-base md:text-lg text-secondary opacity-80 md:w-[740px] md:text-start text-center">
          {pageContent?.bloc_5?.text}
        </p>
        <p className="text-2xl md:text-[2.5rem] text-center md:text-end text-secondary font-semibold">
          {pageContent?.bloc_5?.title}{" "}
          <span className="text-primary font-semibold">#BASIC</span>
        </p>
      </div>
      <div className="w-full h-[694px] mt-8 relative">
        <img
          src="/images/brooke-lark-lcZ9NxhOSlo-unsplash.png"
          alt="section"
          className="w-full h-full"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-4 bg-white rounded-lg  w-[calc(100vw-128px)] xl:w-[1200px] 3xl:w-[1000px]">
          <img
            src="/images/brooke-lark-lcZ9NxhOSlo-unsplash-white.png"
            alt="section"
            className="w-full h-full"
          />
          <div className="bg-white mt-3.5">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">
                {pageContent?.bloc_5?.reviews[0].author}
              </p>
              <p className="text-xl">{pageContent?.bloc_5?.reviews[0].date}</p>
            </div>
            <p className="text-[#666666] text-lg w-2/3 mt-1">
              {pageContent?.bloc_5?.reviews[0].review}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:px-0 px-4">
        {[0, 1, 2, 3].map((item, index) => (
          <div className="relative mt-[1.375rem]" key={item}>
            <img src={images[index]} alt="Bo" className="w-full" />
            <div
              className="absolute bottom-0 h-[3.75rem] w-full rounded-b-2xl flex items-center justify-between px-5"
              style={{ backgroundColor: "rgba(86, 44, 44, 0.6)" }}
            >
              <div className="flex items-center gap-1.5">
                <img src="/mdi_instagram.svg" alt="#" />
                <p className="text-white font-medium text-base">
                  Anthony Durand
                </p>
              </div>
              <img src="/ArrowUpRight.svg" alt="ArrowUpRight" />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm md:text-2xl text-[#666666] mt-12">
        {pageContent?.bloc_5?.footer}
        <span className="font-bold text-primary">#BASIC</span>
      </p>
    </div>
  );
};

export default GalleryGrid;
