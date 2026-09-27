import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#54C0A4",
          dark: "#3FA98D",
          deep: "#2E8A73",
        },
        blue: {
          link: "#2B7BB9",
        },
        ink: "#111111",
        body: "#333333",
        mist: "#F4F5F5",
        line: "#E5E7E7",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-roboto)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
        cardHover: "0 6px 20px rgba(0,0,0,0.12)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
