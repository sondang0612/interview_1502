"use client"; // Nếu bạn dùng Next.js 13+ với App Router

import { Params } from "@/types";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const SelectLanguage = () => {
  const router = useRouter();
  const params = useParams<Params>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      router.push(`/${selectedLanguage}`);
    }
  };

  return (
    <div className="mx-auto absolute top-1/2 -translate-y-1/2 left-[140px] md:left-40">
      <select
        id="language"
        defaultValue={params.lang}
        className="bg-secondary text-white w-20"
        onChange={handleChange}
      >
        <option value="fr">France</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
