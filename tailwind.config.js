const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Mono", ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        ...defaultTheme.fontWeight,
        normal: "300",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
