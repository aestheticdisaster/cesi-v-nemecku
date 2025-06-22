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
        'munich': "url('../public/960px-Stadtbild_München.jpg')",
        'lionflag': "url('../public/lionflag.png')"
      },

      animation: {
        slideInLeft: 'slideInLeft 2s ease-out',
        fadeIn: 'fadeIn 2s ease-in-out',
      },

      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-10%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}