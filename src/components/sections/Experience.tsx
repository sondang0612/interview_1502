/* eslint-disable @next/next/no-img-element */
import React from "react";
import Service from "../Service";
import useGetPageContentByParams from "@/hooks/useTranslation";
import useDeviceType from "@/hooks/useDeviceType";

const images = [
  "/auth.svg",
  "/respect.svg",
  "/deliver.svg",
  "/per.svg",
  "/confo.svg",
];

const Experience = () => {
  const { pageContent } = useGetPageContentByParams();
  const { deviceType } = useDeviceType({ mobile: 1024, desktop: 1920 });

  return (
    <div className="mt-[8.75rem]">
      {deviceType === "mobile" ? (
        <div className="w-screen relative">
          <img
            src="/images/456173d2351a43751951bf08df4c499a-mobile.png"
            alt="image"
            className="w-screen"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] rounded-2xl px-3 py-4"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <p className="text-2xl font-semibold text-primary">
              {pageContent?.bloc_4?.title}{" "}
              <span style={{ color: "rgba(242, 84, 45, 0.6)" }}>
                {pageContent?.bloc_4?.text_title}
              </span>
            </p>
            <div className="border-l-2 border-l-[#BBBBBB] pl-2 mt-6">
              {pageContent?.bloc_4?.subtitle}
            </div>
            <div className="mt-2 text-secondary opacity-80">
              {pageContent?.bloc_4?.text}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-start gap-6">
          <div className="">
            <p className="text-primary text-2xl lg:text-[2rem] xl:text-[3.25rem] font-semibold md:leading-[3.75rem] leading-normal uppercase">
              {pageContent?.bloc_4?.title}{" "}
              <span style={{ color: "rgba(242, 84, 45, 0.6)" }}>
                {pageContent?.bloc_4?.text_title}
              </span>
            </p>
            <div className="mt-[3.75rem]">
              <div className="flex flex-row gap-12 items-center">
                <div className="w-[81px] h-0.5 bg-[#BBBBBB]" />
                <p className="text-[1.75rem] text-secondary font-semibold">
                  {pageContent?.bloc_4?.subtitle}
                </p>
              </div>
              <p className="pl-28 md:pl-[129px] mt-5 text-secondary opacity-80 w-2/3">
                {pageContent?.bloc_4?.text}
              </p>
            </div>
          </div>
          <img
            src="/images/icream.png"
            alt="Icream"
            className="h-[574px] w-[503px]"
          />
        </div>
      )}
      <div className="grid 3xl:grid-cols-5 2xl:grid-cols-3 grid-cols-2 items-center justify-between md:mt-20 mt-9 gap-6 3xl:gap-0">
        {pageContent?.bloc_4?.pictos?.map((item, index) => (
          <Service
            key={index}
            title={item?.title}
            description={item?.description}
            image={images[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
