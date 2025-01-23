/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      opensans: ['"Open Sans"', 'sans-serif'],
      popins: ['"Poppins"', 'sans-serif'],
      volkov: ['"Volkov"', 'sans-serif'],
      montserrat: ['"Montserrat"', 'sans-serif'],
    },
    extend: {
      colors: {
        midnightBlue: '#212832',
      },
    },
  },
  plugins: [],
};
