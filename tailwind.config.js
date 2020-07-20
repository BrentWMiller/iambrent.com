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
  full: '100%',
};

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
      body: ['Quicksand'],
      display: ['Quicksand'],
    },
    extend: {
      colors: {
        primary: {
          '50': '#e2e3ef',
          '100': '#b8b9d7',
          '200': '#888bbc',
          '300': '#585da1',
          '400': '#353a8d',
          '500': '#111779',
          '600': '#0f1471',
          '700': '#0c1166',
          '800': '#0a0d5c',
          '900': '#050749',
          A100: '#7e81ff',
          A200: '#4b4fff',
          A400: '#181dff',
          A700: '#0005fd',
        },

        secondary: {
          '50': '#f1faff',
          '100': '#dbf3ff',
          '200': '#c4ebff',
          '300': '#ace3ff',
          '400': '#9addff',
          '500': '#88d7ff',
          '600': '#80d3ff',
          '700': '#75cdff',
          '800': '#6bc7ff',
          '900': '#58beff',
          A100: '#ffffff',
          A200: '#ffffff',
          A400: '#fcfeff',
          A700: '#e3f4ff',
        },

        accent: {
          '50': '#fffcee',
          '100': '#fff8d6',
          '200': '#fff4ba',
          '300': '#fff09e',
          '400': '#ffec8a',
          '500': '#ffe975',
          '600': '#ffe66d',
          '700': '#ffe362',
          '800': '#ffdf58',
          '900': '#ffd945',
          A100: '#ffffff',
          A200: '#ffffff',
          A400: '#fffbec',
          A700: '#fff6d3',
        },

        light: {
          primary: '#FFFFFF',
          secondary: '#E8E8E8',
        },

        dark: {
          primary: '#44486D',
          secondary: '#40447E',
        },

        red: {
          '50': '#fbe5e9',
          '100': '#f5bdc9',
          '200': '#ee91a5',
          '300': '#e76581',
          '400': '#e24466',
          '500': '#dd234b',
          '600': '#d91f44',
          '700': '#d41a3b',
          '800': '#cf1533',
          '900': '#c70c23',
          A100: '#fff2f3',
          A200: '#ffbfc5',
          A400: '#ff8c97',
          A700: '#ff7380',
        },
      },
      fontSize: {
        '48': '3rem',
        '80': '5rem',
        '96': '6rem',
      },
      spacing: ratios,
      inset: ratios,
      zIndex: {
        '-1': '-1',
        '1': '1',
        '2': '2',
        '3': '3',
      },
      height: {
        '80': '20rem',
        '100': '25rem',
        '128': '32rem',
      },
    },
    gradients: (theme) => ({
      'g-primary': ['to top', theme('colors.primary'), 'transparent'],
      'g-black': ['to top', theme('colors.black'), 'transparent'],
    }),
  },
  variants: {
    gradients: ['responsive'],
  },
  plugins: [require('tailwindcss-plugins/gradients'), require('tailwindcss-blend-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'mixins/**/*.js', 'nuxt.config.js'],
  },
};
