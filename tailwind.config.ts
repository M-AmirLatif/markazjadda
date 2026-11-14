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
        background: "var(--background)",
        foreground: "var(--foreground)",
        shop: {
          gold: "#F5B800",
          "gold-hover": "#E0A700",
          "gold-light": "#FFF7E0",
          dark: "#0F1115",
          charcoal: "#161920",
          card: "#1C2028",
          border: "#282E3A",
          muted: "#8F9CAE",
          silver: "#D1D5DB",
          accent: "#EF4444"
        }
      },
      fontFamily: {
        arabic: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
        english: ["Inter", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
