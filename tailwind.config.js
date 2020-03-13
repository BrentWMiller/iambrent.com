const ratios = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  half: '50%',
  full: '100%'
}

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: false,
  theme: {
    fontFamily: {
      body: ['Nunito'],
      display: ['Nunito']
    },
    extend: {
      colors: {
        primary: '#111779', // dark blue
        accent: '#FFE975', // yellow

        secondary: {
          '300': '#E4F2FF',
          '500': '#31A3FD'
        },

        light: {
          primary: '#FFFFFF',
          secondary: '#E8E8E8'
        },
        dark: {
          primary: '#44486D',
          secondary: '#40447E'
        }
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      spacing: ratios,
      inset: ratios
    }
  },
  variants: {},
  plugins: []
}
