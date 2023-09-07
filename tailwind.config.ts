import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        '-0.35': '-0.035em',
      },
      lineHeight: {
        '135': '1.355',
      },
      colors: {
        thrasker: {
          header: "#242424",
          text: "#BCBCBC",
          secondPage: "#6C6C6C",
          textDarker: "#DDD",
          textWhitePage: "#333",
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
