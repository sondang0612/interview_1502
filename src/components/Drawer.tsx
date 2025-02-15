"use client";

import useGetPageContentByParams from "@/hooks/useTranslation";
import React from "react";

const Drawer = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) => {
  const { pageContent } = useGetPageContentByParams();
  return (
    <div
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-secondary w-80 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400 ml-10">
        Menu
      </h5>

      {/* Nút đóng Drawer */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 left-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      {/* Nội dung menu */}
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-white">
        {pageContent?.head_menu[0]}
      </p>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 cursor-pointer  hover:text-white">
        {pageContent?.head_menu[1]}
      </p>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 cursor-pointer  hover:text-white">
        {pageContent?.head_menu[2]}
      </p>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 cursor-pointer  hover:text-white">
        {pageContent?.head_menu[3]}
      </p>
    </div>
  );
};

export default Drawer;
