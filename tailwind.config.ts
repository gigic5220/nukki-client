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
        'primary-white': "#bdbdbd",
        'primary-disabled': "#b6b6b6",
        'primary-nukki': "#ff9467"
      },
    },
  },
  plugins: [],
} satisfies Config;
