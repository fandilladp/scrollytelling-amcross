const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Helvetica Neue"],
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      red: colors.red,
      map: {
        DEFAULT: "#FC0002",
        50: "#FFB5B5",
        100: "#FFA0A1",
        200: "#FF7778",
        300: "#FF4F50",
        400: "#FF2628",
        500: "#FC0002",
        600: "#C40002",
        700: "#8C0001",
        800: "#540001",
        900: "#1C0000",
      },
    },
  },

  plugins: [],
};
