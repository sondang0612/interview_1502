"use client";

import { useRouter } from "next/navigation";

const LanguageSelector = () => {
  const router = useRouter();

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "France" },
  ];

  return (
    <div className="relative">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          onClick={() => {
            router.push(`/${lang.code}`);
          }}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
