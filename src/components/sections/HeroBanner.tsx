/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full h-[1080px] relative">
      <Image
        alt="hero-banner"
        src="/images/Hero-banner.png"
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute 3xl:bottom-20 3xl:right-[9.25rem] bottom-5 right-4"
        style={{ zIndex: 1 }}
      >
        <button className="bg-primary size-[34px] 3xl:size-14 rounded-full flex items-center justify-center hover:bg-[#CA3E1B]">
          <img
            src="Chat.svg"
            alt="Chat"
            className="3xl:w-[28px] 3xl:h-[26px] w-[18px] h-[18px]"
          />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
