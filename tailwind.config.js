/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      opensans: ['"Open Sans"', 'sans-serif'],
      popins: ['"Poppins"', 'sans-serif'],
      volkov: ['"Volkov"', 'sans-serif'],
      montserrat: ['"Montserrat"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
