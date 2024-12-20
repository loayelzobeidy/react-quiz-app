/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#1d0433"
      },
      scrollbar: {
        hide: {
          scrollbarWidth: 'none',
          '-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
      fontFamily: {
        playwriteMX: ['"Playwrite MX Guides"', 'sans-serif'], // Replace 'YourCustomFont' with your font name
      },
    },
  },
  plugins: [],
};
