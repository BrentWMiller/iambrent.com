/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
    },
    extend: {
      fontFamily: {
        body: ["'PPNeueMontreal'", 'sans-serif'],
        code: ["'PPFraktionMono'", 'monospace'],
      },
      colors: {
        black: '#1D1D1D',
        gray: {
          lighter: '#DFDFDF',
          light: '#B9B9B9',
          DEFAULT: '#8f8f8f',
        },
        theme: {
          DEFAULT: 'var(--theme-active-base)',
          dark: 'var(--theme-active-dark)',
        },
      },
    },
  },
  plugins: [],
};
