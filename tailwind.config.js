/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Manrope", "serif"],
      serif: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
