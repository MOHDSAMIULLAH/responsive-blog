import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: '#FF6464', // Primary pink color
          dark: '#db2777', // Darker pink for hover states
        },
        background: {
          light: '#fdf2f8', // Light pink background for light mode
          dark: '#831843', // Dark pink background for dark mode
        },
      },
    },
  },
  plugins: [],
};
export default config;
