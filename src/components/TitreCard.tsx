/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  tagline: string;
  description: string;
  category: string;
  image: string;
};

const TitreCard = (props: Props) => {
  const { category, description, tagline, image } = props;
  return (
    <div className="md:w-[340px] w-[200px] flex-shrink-0">
      <img src={image} alt="Titre1" className="md:size-[340px] size-[200px]" />
      <div className="mt-4 md:mt-6">
        <h3 className="text-primary text-xs md:text-xl font-medium">
          {tagline}
        </h3>
        <p className="text-[#222222] font-medium text-base md:text-[1.75rem] mt-0.5 mb-2 md:mt-1 md:mb-4">
          {category}
        </p>
        <p className="text-sm md:text-lg text-secondary line-clamp-3 overflow-hidden ml-2 border-l-[0.5px] border-l-[#BBBBBB] pl-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TitreCard;
