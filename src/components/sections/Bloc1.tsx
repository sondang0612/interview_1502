/* eslint-disable @next/next/no-img-element */

import useGetPageContentByParams from "@/hooks/useTranslation";
import Bloc1Card from "../Bloc1Card";
import useDeviceType from "@/hooks/useDeviceType";
const images = [
  "/images/bloc1-1.png",
  "/images/bloc1-2.png",
  "/images/bloc1-3.png",
];

const imagesMobile = [
  "/images/bloc1-1-mobile.png",
  "/images/bloc1-2-mobile.png",
  "/images/bloc1-3-mobile.png",
];

const Bloc1 = () => {
  const { pageContent } = useGetPageContentByParams();
  const { deviceType } = useDeviceType();

  return (
    <div className="mt-20">
      <div>
        <div className="flex items-center justify-center gap-10 h-[3.75rem]">
          <div
            className="h-0.5 xl:w-80 w-0"
            style={{ backgroundColor: "rgba(187, 187, 187, 1)" }}
          />
          <h3 className="text-primary text-xl lg:text-[2rem] xl:text-[3.25rem] font-semibold md:leading-[3.75rem] text-center leading-normal uppercase">
            {pageContent?.bloc_1.title}
          </h3>
          <div
            className="h-0.5 xl:w-80 w-0"
            style={{ backgroundColor: "rgba(187, 187, 187, 1)" }}
          />
        </div>
      </div>
      <p className="text-sm md:text-2xl text-secondary text-center md:mt-14 mt-4">
        {pageContent?.bloc_1.subtitle}
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-10 mt-4">
        {pageContent?.bloc_1?.cases?.map((item: any, index: number) => (
          <Bloc1Card
            key={index}
            marginTop={deviceType !== "mobile" && index % 2 === 0 ? 45 : 0}
            category={item?.category}
            cta={item?.cta}
            description={item?.description}
            tagline={item?.tagline}
            image={
              deviceType === "mobile" ? imagesMobile[index] : images[index]
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Bloc1;
