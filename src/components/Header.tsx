/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import useDeviceType from "@/hooks/useDeviceType";
import useGetPageContentByParams from "@/hooks/useTranslation";
import SelectLanguage from "./SelectLanguage";
import Drawer from "./Drawer";

const Header = () => {
  const { pageContent } = useGetPageContentByParams();
  const { deviceType } = useDeviceType();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Trạng thái mở Drawer

  return (
    <div
      className="h-[4.5rem] 3xl:px-[21.25rem] px-4 w-screen flex items-center justify-between fixed inset-0 z-10"
      style={{ backgroundColor: "rgba(86, 44, 44, 0.7)" }}
    >
      <div className="flex flex-row relative w-full">
        <p className="font-bold text-white text-[15px] mr-[93px] cursor-pointer leading-[100%]">
          LOGO SAMPLE
        </p>
        <SelectLanguage />
        <p className="text-base font-medium text-white mr-[147px] cursor-pointer hidden 3xl:block">
          {pageContent?.head_menu[0]}
        </p>
        <p className="text-base font-medium text-white mr-[98px] cursor-pointer hidden 3xl:block">
          {pageContent?.head_menu[1]}
        </p>
        <p className="text-base font-medium text-white mr-[69px] cursor-pointer hidden 3xl:block">
          {pageContent?.head_menu[2]}
        </p>
        <p className="text-base font-medium text-white hidden 3xl:block">
          {pageContent?.head_menu[3]}
        </p>
      </div>

      <div className="gap-4 hidden 3xl:flex">
        <img src="/Mountains.svg" alt="mountain" />
        <img src="/Fishing-32px.svg" alt="mountain" />
        <img src="/Crosshair.svg" alt="mountain" />
        <button className="h-10 w-16 bg-primary rounded-full pl-6 hover:bg-[#CA3E1B]">
          <img src="/ArrowUpRight.svg" alt="mountain" />
        </button>
      </div>

      {/* Khi không phải desktop, hiển thị icon menu */}
      {deviceType !== "desktop" && (
        <img
          src="/menu.svg"
          alt="Menu"
          className="cursor-pointer mr-4"
          onClick={() => setIsDrawerOpen(true)} // Bấm vào icon để mở Drawer
        />
      )}

      {/* Drawer - Nhận trạng thái mở từ Header */}
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </div>
  );
};

export default Header;
