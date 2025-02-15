import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F2542D",
        secondary: "#562C2C",
        link: "rgba(30, 136, 249, 1)",
        blur: "rgba(153, 153, 153, 1)",
      },
      boxShadow: {
        primary: "0px 0px 1px 0px rgba(242, 84, 45, 0.1)",
      },
      screens: {
        "1.5xl": "795px",
        "2.5xl": "1600px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
