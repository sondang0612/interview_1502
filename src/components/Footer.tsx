/* eslint-disable @next/next/no-img-element */
import useGetPageContentByParams from "@/hooks/useTranslation";
import React from "react";

const media = ["/Facebook-icon.svg", "/instagram.svg", "/Youtube-icon.svg"];

const Footer = () => {
  const { pageContent } = useGetPageContentByParams();

  return (
    <div className="h-[18.75rem] bg-secondary 3xl:px-[21.25rem] lg:px-8 px-4">
      <div className="flex flex-row pt-14 justify-between">
        <div className="flex flex-col">
          <span className="text-base md:text-lg text-white">
            {pageContent?.footer?.address?.name}
          </span>
          <span className="text-base md:text-lg text-white -mt-1.5">
            {pageContent?.footer?.address?.phone}
          </span>
          <span className="text-base md:text-lg text-white -mt-1.5">
            {pageContent?.footer?.address?.location}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[0].name}
          </span>
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[1].name}
          </span>
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[2].name}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[3].name}
          </span>
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[4].name}
          </span>
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[5].name}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[6].name}
          </span>
          <span className="text-base md:text-lg text-white opacity-60 cursor-pointer hover:opacity-100">
            {pageContent?.footer?.links[7].name}r
          </span>
        </div>
      </div>
      <div className="h-[1px] bg-white w-full opacity-30 my-14" />
      <div className="flex flex-row items-center justify-between">
        <p className="text-base md:text-lg text-white">© BASIC 2024</p>
        <div className="flex flex-row items-center gap-5">
          {media.map((item) => (
            <div
              key={item}
              className="rounded-full p-1 bg-primary flex items-center justify-center hover:bg-[#CA3E1B]"
            >
              <img src={item} alt={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
