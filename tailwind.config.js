/** @type {import("tailwindcss").Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
    colors: {
      custom: {
        red: "#ff5757",
        purple: "#8c52ff",
        blue: "#0cc0df",
      },
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.gray
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    }
  },
  plugins: []
}