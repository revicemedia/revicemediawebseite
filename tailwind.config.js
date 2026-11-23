/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Poppins = Schrift aus dem Revice-Logo (CI)
        display: ["var(--font-poppins)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(110deg, #113042 0%, #3790af 100%)",
      },
      colors: {
        // CI-Farben aus public/logo.svg
        "primary-dalu": "#113042",
        "secondary-dalu": "#3790af",
        navy: {
          DEFAULT: "#113042",
          900: "#0b2130",
          800: "#113042",
          700: "#1c4660",
        },
        brand: {
          DEFAULT: "#3790af",
          50: "#eef7fa",
          100: "#d6ecf3",
          600: "#2d7893",
        },
        "gray-dalu": "#212121",
        "light-gray-dalu": "#efefef",
        mist: "#f5f8fa",
      },
      // Zusätzliche Deckkraft-Stufen (z. B. text-navy/65)
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
