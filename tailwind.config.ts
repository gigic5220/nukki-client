import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-black': "#000000",
        'primary-white': "#ffffff",
        'primary-gray': "#b8b8b8",
        'primary-disabled': "#b6b6b6",
        'primary-nukki': "#ff9467",
        'primary-button-bg': "#ff5000",
        'secondary-nukki': "#ffd0be",
        'secondary-green': "#1dd83f",
        'primary-red': "#ff0000",
      },
    },
  },
  plugins: [],
} satisfies Config;
