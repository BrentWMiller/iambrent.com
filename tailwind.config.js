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
        secondary: '#31A3FD', //light blue,
        accent: '#FFE975' // yellow
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      }
    }
  },
  variants: {},
  plugins: []
}
