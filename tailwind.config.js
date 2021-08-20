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

        'soft-white': {
          100: '#FFFFF9',
          200: '#EFEFD5',
          500: '#C7C7A5',
          700: '#BABA98',
        },

        'site': '#F8F8F2',
        'site-dark': '#0E0E0E',
        'accent': '#F5F4EF',
        'accent-dark': '#0C0C0C',

        darkula: {
          green: '#4CE470',
          blue: '#80FFEA',
          purple: '#9580FF',
          yellow: '#FFFF80',
          pink: '#FF80BF',
        },

        lightula: {
          green: '#00CE05',
          blue: '#7ABFFF',
          purple: '#7F44D9',
          yellow: '#FFD700',
          pink: '#EC35A4',
        },
      },
      fontFamily: {
        body: ['Fira Code'],
      },
      zIndex: {
        '-1': '-1'
      }
    },
  }
}