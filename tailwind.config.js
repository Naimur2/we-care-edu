/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        serif: ["Helvetica Now Display", "serif"],
        
      },
      backgroundImage: {
        line: "url('/public/line.svg')",
      }
    },
  },
  plugins: [],
};
