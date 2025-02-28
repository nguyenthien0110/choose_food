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
        primary: "#fec1bf",
        primary_bg: "#bdd3cd",
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
