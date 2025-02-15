/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const Service = (props: Props) => {
  const { title, description, image } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:size-[3.625rem] size-11 bg-[#0E9594] rounded-full flex items-center justify-center">
        <img src={image} alt="Auth" className="size-6 md:size-8" />
      </div>
      <p className="text-lg md:text-2xl text-secondary font-medium mt-4 mb-2">
        {title}
      </p>
      <p className="text-sm md:text-lg text-secondary opacity-80">
        {description}
      </p>
    </div>
  );
};

export default Service;
