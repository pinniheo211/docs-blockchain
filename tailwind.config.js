/** @type {import('tailwindcss').Config} */
const boxShadow = {
  ...require("tailwindcss/defaultConfig").theme.boxShadow,
  lg: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  "as-border":
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  dlg: "0px 4px 5px rgba(0,0,0,0.3),0px 0px 9px rgba(0,0,0,0.04)",
  sky: "0px 4px 4px 0px #DAEBF1",
  "sd-pink": "0px 4px 12.100000381469727px 0px rgba(244, 0, 116, 1)",
};

const screens = {
  ...require("tailwindcss/defaultConfig").theme.screens,
  xs: "300px",
};

const colors = {
  ...require("tailwindcss/defaultConfig").theme.colors,
  "primary-1": "#c2c2c2",
  "primary-3": "#fff",
  "primary-4": "#F40074",
  "primary-5": "#FF415533",
  "primary-6": "#E4C1FE",
  "primary-7": "#F40074",
  "primary-8": "#921CF5",
  black: "#011032",
  "black-2": "#02001D",
  green: "#43E353",
  yellow: "#F1B74F",
  white: "#FFFFFF",
  error: "#D32F2F",
  icon: "#D1D0D0",
  line: "#ECEBEB",
  "text-900": "#333A42",
  "text-700": "#757575",
  "text-500": "#C4C4C4",
  "text-400": "#68727D",
  pink: "#FF00A8",
  main: "#F1F3F8",
  bgMain: "#08021C",
  grayMobile: "#C8CBD7",
  dark: "#08021C",
  line: "rgba(255, 255, 255, 0.2)",
  transparent: "rgba(255, 255, 255, 0.1)",
};

const zIndex = {
  "-1": "-1",
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40", // for drawer
  50: "50", // for Tooltip
  100: "100", // for Dialog, FullScreenDialog...
};

const fontSize = {
  ...require("tailwindcss/defaultConfig").theme.fontSize,
  DEFAULT: "16px",
  "3xs": "9px",
  "2xs": "11px",
};

export default {
  darkMode: "class",

  content: [
    "./app/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./theme.config.jsx",
  ],
  theme: {
    boxShadow,
    zIndex,
    screens,
    extend: {
      backgroundImage: {
        "gradient-white":
          "linear-gradient(0deg, rgba(116, 116, 116, 0.2), rgba(116, 116, 116, 0.2)), linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
        "gradient-dark-pink":
          "linear-gradient(180deg, #E80274 0%, #7D0D6A 100%)",
        "gradient-dark-purple":
          "linear-gradient(180deg, rgba(234, 2, 116, 0.3) 0%, rgba(123, 13, 106, 0.3) 100%)",
        "gradient-transparent-purple":
          "linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
        "gradient-pink":
          "linear-gradient(90deg, rgba(214, 4, 115, 1) 0%,rgba(214, 4, 115, 0) 100%",
        "gradient-main": "linear-gradient(90deg, #08021C 0%, #3C004B 100%)",
        "gradient-manage-now":
          "linear-gradient(115deg, rgba(244, 0, 116, 0.40) 33.92%, rgba(37, 19, 81, 0.40) 99.86%)",
        "gradient-helping":
          "linear-gradient(92deg, rgba(80, 45, 159, 0.50) 0%, rgba(80, 45, 159, 0.00) 100%)",
        "gradient-purple":
          "linear-gradient(115deg, rgba(80, 45, 159, 0.40) 33.92%, rgba(244, 0, 116, 0.17) 99.86%)",
        "gradient-card-purple":
          "linear-gradient(115.36deg, rgba(235, 0, 255, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
        "gradient-button-purple":
          "linear-gradient(90deg, #F40074 4.81%, #921CF5 93.37%)",
        "gradient-marketing":
          "linear-gradient(180deg, #F40074 0%, #251351 100%)",
        "gradient-get-a-demo":
          "linear-gradient(180deg, rgba(80, 45, 159, 0.00) 0%, rgba(80, 45, 159, 0.50) 100%)",
        "gradient-linear-pink":
          "linear-gradient(180deg, rgba(168, 8, 154, 0) 0%, #FF00E9 100%)",
        "gradient-linear-purple":
          "linear-gradient(115.36deg, rgba(235, 0, 255, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
        "gradient-toearnnow":
          "linear-gradient(115.36deg, rgba(80, 45, 159, 0.4) 33.92%, rgba(8, 2, 28, 0) 99.86%)",
        "gradient-purple-fund":
          "linear-gradient(180deg, #502D9F 0%, rgba(0, 0, 0, 0) 100%)",
      },
      fontSize,
      colors,
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        wiggle: {
          "0%": { opacity: 0 },
          "25%": { opacity: 0.3 },
          "50%": { opacity: 0.6 },
          "75%": { opacity: 0.8 },
          "100%": { opacity: 1 },
        },
      },
      container: {
        ...require("tailwindcss/defaultConfig").theme.container,
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "2rem",
        },
        screens: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "1100px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out",
        typing: "typing 2s steps(20) infinite alternate, .7s infinite",
      },
      screens: {
        xs: { min: "100px", max: "450px" },
        sm: { min: "451px" },
      },
    },
  },
  darkMode: "class",
  variants: {
    extend: {
      borderColor: ["group-focus"],
      visibility: ["group-focus"],
      display: ["group-hover"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
