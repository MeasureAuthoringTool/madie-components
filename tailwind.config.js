const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Geometria", "system", "sans-serif"],
      body: ["Inter", "system", "sans-serif"],
      mono: ["DejaVu\\ Sans\\ Mono", "system", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      "dark-bg": "#080B1A",
      primary: {
        50: "#d6e4ff",
        100: "#adc8ff",
        200: "#84a9ff",
        300: "#6690ff",
        400: "#5680ff",
        500: "#3366ff",
        DEFAULT: "#3366ff",
        600: "#254edb",
        700: "#1939b7",
        800: "#102693",
        900: "#091a7a",
      },
      teal: {
        50: "#d6fced",
        100: "#aff9e2",
        200: "#83edd6",
        300: "#61dccc",
        400: "#45cfca",
        500: "#33c5bf",
        DEFAULT: "#33c5bf",
        600: "#25a3a9",
        700: "#197e8d",
        800: "#105c72",
        900: "#09435e",
      },
      green: {
        50: "#d3fcd1",
        100: "#a4faa8",
        200: "#74f288",
        300: "#51e676",
        400: "#3adb73",
        500: "#1dd65e",
        DEFAULT: "#1dd65e",
        600: "#15b85e",
        700: "#0e9a5b",
        800: "#097c53",
        900: "#05664e",
      },
      blue: {
        50: "#d7f9ff",
        100: "#b0eeff",
        200: "#88dfff",
        300: "#6bceff",
        400: "#56beff",
        500: "#3ab3ff",
        DEFAULT: "#3ab3ff",
        600: "#2a8cdb",
        700: "#1d69b7",
        800: "#124a93",
        900: "#0b347a",
      },
      yellow: {
        50: "#fff6ce",
        100: "#ffeb9c",
        200: "#ffdd6c",
        300: "#ffcf47",
        400: "#ffc229",
        500: "#ffb90a",
        DEFAULT: "#ffb90a",
        600: "#db9807",
        700: "#b77a05",
        800: "#935d03",
        900: "#7a4901",
      },
      red: {
        50: "#ffe4d5",
        100: "#ffc3ab",
        200: "#ff9a81",
        300: "#ff7461",
        400: "#ff4c46",
        500: "#ff342d",
        DEFAULT: "#ff342d",
        600: "#db202a",
        700: "#b7162c",
        800: "#930e2b",
        900: "#7a082b",
      },
      gray: {
        50: "#f2f5fb",
        100: "#e5ecf7",
        200: "#cfd8e8",
        300: "#b6bed2",
        400: "#a0aac1",
        500: "#949db4",
        DEFAULT: "#949db4",
        600: "#6c779a",
        700: "#4a5681",
        800: "#2f3a68",
        900: "#1c2556",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
