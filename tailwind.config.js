/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Manrope", "serif"],
      serif: ["Poppins"],
      lato: ["Lato", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      dmsans: ["DMSans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
