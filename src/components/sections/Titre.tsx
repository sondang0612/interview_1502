/* eslint-disable @next/next/no-img-element */

import useGetPageContentByParams from "@/hooks/useTranslation";
import TitreCard from "../TitreCard";
const images = [
  "/images/titre-1.png",
  "/images/titre-2.png",
  "/images/titre-3.png",
  "/images/titre-4.png",
];

const Titre = () => {
  const { pageContent } = useGetPageContentByParams();

  return (
    <div className="-mr-[21.25rem] overflow-hidden">
      <div
        className="flex items-end justify-between"
        style={{ width: "calc(100vw - 32px)" }}
      >
        <h3 className="text-primary text-xl lg:text-[2rem] xl:text-[3.25rem] font-semibold md:leading-[3.75rem] text-center leading-normal uppercase">
          {pageContent?.bloc_3?.title}
        </h3>
        <div className="items-center justify-start gap-2 border-b-[1px] border-[#666666] md:flex hidden">
          <p className="text-xl font-medium text-[#666666] cursor-pointer">
            {pageContent?.bloc_3?.more_info}
          </p>
          <img src="/arrowRight.svg" alt="Arrow Right" />
        </div>
      </div>
      <div className="mt-4 md:mt-[35px] ml-0 md:ml-[105px] flex flex-row flex-nowrap overflow-x-auto gap-4 md:gap-[3.5rem] pb-[3.75rem] pr-[350px]">
        {pageContent?.bloc_3?.cases?.map((item, index) => (
          <TitreCard
            key={index}
            category={item.category}
            description={item.description}
            tagline={item.tagline}
            image={images[index]}
          />
        ))}
      </div>
      <button
        className="md:hidden h-10 w-16 bg-primary rounded-full pl-6 hover:bg-[#CA3E1B] text-white text-base font-medium flex items-center justify-center"
        style={{ width: "calc(100vw - 48px)" }}
      >
        En savoir plus{" "}
        <img src="/arrow-right-white.svg" alt="mountain" className="ml-3" />
      </button>
    </div>
  );
};

export default Titre;
