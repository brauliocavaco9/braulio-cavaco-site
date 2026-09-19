import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A09",       // page background
        panel: "#131311",      // section / card background
        panel2: "#1A1A17",     // slightly raised panel
        ink: "#EDEAE2",        // primary text on dark
        ink2: "#B7B3A8",       // secondary text
        muted: "#7C786E",      // tertiary / captions
        hairline: "#26241F",   // dividers, borders
        gold: "#B4914F",       // primary accent, used sparingly
        goldDim: "#5B4C2E",    // low-emphasis gold (borders, icons)
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
