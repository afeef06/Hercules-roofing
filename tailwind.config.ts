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
        brand: {
          black: "#0A0A0A",
          charcoal: "#161616",
          steel: "#1E2832",
          crimson: "#C41E3A",
          fire: "#E02020",
          ember: "#FF3333",
          stone: "#F8F4EE",
          sand: "#EDE8DF",
          warm: "#D4C9B8",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A0A0A 0%, #1E2832 50%, #0A0A0A 100%)",
        "crimson-gradient": "linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)",
        "steel-gradient": "linear-gradient(180deg, #1E2832 0%, #0A0A0A 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "card-dark": "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(196,30,58,0.2)",
        "hero-text": "0 2px 20px rgba(0,0,0,0.8)",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

export default config;
