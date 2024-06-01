/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1A2C38",
        'dark':'#0F212E'

      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}