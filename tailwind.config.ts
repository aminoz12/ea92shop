import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",
        "primary-dark": "#B91C1C",
        dark: "#0F172A",
        "dark-light": "#1E293B",
      },
    },
  },
  plugins: [],
};
export default config;

