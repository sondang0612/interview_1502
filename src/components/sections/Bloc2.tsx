/* eslint-disable @next/next/no-img-element */

import useGetPageContentByParams from "@/hooks/useTranslation";
import ZoomableMap from "../Map";
import React from "react";
import { MarkerPoint } from "@/types";

const images = [
  "/Adventure-tourism-icon.svg",
  "/Fishing-icon.svg",
  "/Hunting-icon.svg",
];

const Bloc2 = () => {
  const { pageContent } = useGetPageContentByParams();
  const [selectedType, setSelectedType] = React.useState<string>(
    pageContent?.bloc_2?.cases[0] as string
  );
  const [selectedUser, setSelectedUser] = React.useState<MarkerPoint[]>([]);

  React.useEffect(() => {
    switch (selectedType) {
      case pageContent?.bloc_2?.cases[0]:
        setSelectedUser(pageContent?.carte_point?.slice(0, 3) as any);
        break;
      case pageContent?.bloc_2?.cases[1]:
        setSelectedUser(pageContent?.carte_point?.slice(3, 6) as any);
        break;

      case pageContent?.bloc_2?.cases[2]:
        setSelectedUser(pageContent?.carte_point?.slice(6, 9) as any);
        break;

      default:
        setSelectedUser([]);
        break;
    }
  }, [pageContent?.bloc_2?.cases, pageContent?.carte_point, selectedType]);

  return (
    <div className="md:mt-[10rem] mt-36">
      <div>
        <div className="flex items-center justify-center gap-10 h-[3.75rem]">
          <div
            className="h-0.5 xl:w-80 w-0"
            style={{ backgroundColor: "rgba(187, 187, 187, 1)" }}
          />
          <h3 className="text-primary text-xl lg:text-[2rem] xl:text-[3.25rem] font-semibold md:leading-[3.75rem] text-center leading-normal uppercase">
            {pageContent?.bloc_2.title}
          </h3>
          <div
            className="h-0.5 xl:w-80 w-0"
            style={{ backgroundColor: "rgba(187, 187, 187, 1)" }}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 h-[3.75rem] mt-5 md:mt-6">
        {pageContent?.bloc_2.cases?.map((item, index) => (
          <div
            className={`h-11 flex items-center px-4 rounded-full border gap-2 cursor-pointer bg-[#FAFAFA] hover:bg-[#FFEDE8] ${
              selectedType === item && "bg-red-300 hover:bg-red-300 "
            }`}
            key={item}
            style={{ border: "1.5px solid rgba(242, 84, 45, 0.5)" }}
            onClick={() => setSelectedType(item)}
          >
            <img
              src={images[index]}
              alt="Fishing"
              className="size-5 md:size-7"
            />
            <p className="font-medium text-sm md:text-xl">{item}</p>
          </div>
        ))}
      </div>
      <div className="1.5xl:mt-6 mt-20 flex items-center justify-center">
        <ZoomableMap selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Bloc2;
