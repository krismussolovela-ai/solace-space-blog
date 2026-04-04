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
        cream: "#FAF7F2",
        "deep-brown": "#342007",
        clay: "#C4A882",
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
            color: "#342007",
            fontFamily: "var(--font-jost)",
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-cormorant)",
              color: "#342007",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
