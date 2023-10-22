/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dalu": "#113042",
        "secondary-dalu": "#3790af",
        "third-dalu": "#8ed13f",
        "gray-dalu": "#212121",
        "light-gray-dalu": "#efefef",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
