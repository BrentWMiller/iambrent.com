const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './components/*.vue',
    './pages/**/*.vue',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        site: '#0e0e0e',
        darkula: {
          green: '#4CE470',
          blue: '#80FFEA',
          purple: '#9580FF',
          yellow: '#FFFF80',
          pink: '#FF80BF',
        },
      },
      fontFamily: {
        body: ['Fira Code'],
      },
    },
  }
}