import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App Router Pages
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",// Reusable Components
  ],
  theme: {
    extend: {
      fontFamily: {
        coda: ["Coda", "sans-serif"],          
      },
    },
  },
  plugins: [],
};

export default config;
