import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height:{
        'screen-height-without-header': "calc(100vh - 60px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-black': "#000000",
        'primary-white': "#ffffff",
        'primary-gray': "#b8b8b8",
        'primary-disabled': "#c8c8c8",
        'primary-nukki': "#ff9467",
        'primary-button-bg': "#ff5000",
        'secondary-nukki': "#ffd0be",
        'primary-green': "#1dd83f",
        'primary-red': "#ff0000",

        // text
        'primary-disabled-text': "#dadada",
      },
    },
  },
  plugins: [],
} satisfies Config;
