const defaultTheme = require("tailwindcss/defaultTheme");

console.log(defaultTheme.fontWeight);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
