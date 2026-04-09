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
        cream: "#FAF5EC",
        "deep-brown": "#2A2016",
        clay: "#2AADA4",
        amber: "#C9873A",
        forest: "#2C3519",
        "clay-light": "#E8D9C4",
        "brown-muted": "#7A5C3E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2A2016",
            fontFamily: "var(--font-jost)",
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-cormorant)",
              color: "#2A2016",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
