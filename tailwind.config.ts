import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#B45309", // warm amber
          deep: "#92400E"
        },
        wood: {
          bg: "#0f0f0c",
          card: "#171512",
          accent: "#d6ad60"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(212,163,115,0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;
