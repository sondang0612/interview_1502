/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  tagline?: string;
  category?: string;
  description?: string;
  cta?: string;
  image?: string;
} & React.CSSProperties;

const Bloc1Card = (props: Props) => {
  const {
    tagline = "Case sous-titre",
    category,
    description,
    cta,
    image,
    ...styles
  } = props;
  return (
    <div className="bg-white rounded-lg w-full" style={styles}>
      <img
        alt="Bloc1-1"
        src={image}
        className="md:h-[397px] h-[200px] w-full"
      />
      <div className="md:mt-6 mt-4">
        <p className="text-primary text-xs md:text-xl font-medium">{tagline}</p>
        <p className="text-base md:text-[1.75rem] text-secondary mt-0.5 mb-2 md:mt-1 md:mb-4 font-medium">
          {category}
        </p>
        <p className="text-secondary opacity-80 text-sm md:text-lg line-clamp-2">
          {description}
        </p>
        <button
          className="md:h-11 h-8 flex gap-1 items-center justify-center rounded-full px-4 mt-6 hover:bg-[#FFEDE8]"
          style={{ border: "1px solid rgba(86, 44, 44, 0.3)" }}
        >
          <p className="text-base lg:text-lg font-medium text-secondary">
            {cta}
          </p>
          <img src="/ArrowUpRight-blue.svg" alt="#" />
        </button>
      </div>
    </div>
  );
};

export default Bloc1Card;
