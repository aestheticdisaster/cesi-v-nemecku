module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'flag': "url('../public/Flag_of_Germany_(3-2).svg.png')",
        'wideFlag': "url('../public/Flag_of_Germany_(16-9).png')",
      }
    },
  },
  plugins: [],
}
