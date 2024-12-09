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
        "primary-white": "#f8fafc",
        "black-color": "#1d242d",
        "black-light": "#bbbbbb",
        "secondary-color": "#ff7d29",
      },
    },
  },
  plugins: [],
} satisfies Config;
