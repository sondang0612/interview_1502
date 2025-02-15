/* eslint-disable @next/next/no-img-element */
import useDeviceType from "@/hooks/useDeviceType";
import useGetPageContentByParams from "@/hooks/useTranslation";
import React from "react";
const Explore = () => {
  const { pageContent } = useGetPageContentByParams();
  const { deviceType } = useDeviceType();

  return (
    <div className="mt-[10rem] relative">
      <img
        src={"/images/laurice-manaligod-OYaTU0j1N4I-unsplash.png"}
        alt="Explore"
        className={`${deviceType === "mobile" ? "h-[666px]" : ""}`}
      />
      <div className="absolute top-[4.375rem] left-1/2 -translate-x-1/2 text-center">
        <p className="text-2xl md:text-[3.25rem] font-semibold text-secondary">
          {pageContent?.bloc_6?.title}
        </p>
        <p className="text-2xl md:text-[3.25rem] font-semibold text-secondary opacity-50 mt-2 md:-mt-6">
          {pageContent?.bloc_6?.subtitle}
        </p>
        <p className="text-2xl w-[80vw] md:w-[650px] mt-2 text-secondary">
          {pageContent?.bloc_6?.text}
        </p>
        <button className="px-10 h-10 md:h-12 rounded-full bg-primary text-white mt-10 hover:opacity-90 hover:bg-[#CA3E1B]">
          {pageContent?.bloc_6?.button}
        </button>
      </div>
    </div>
  );
};

export default Explore;
