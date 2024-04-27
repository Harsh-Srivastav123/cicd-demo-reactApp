/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      abc:["Montserrat", "sans-serif"],
      def:["Dosis", "sans-serif"],
      ghi:["Lexend", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

