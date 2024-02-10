/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        body: ["'PPNeueMontreal'", 'sans-serif'],
        code: ["'PPFraktionMono'", 'monospace'],
      },
      colors: {
        black: '#1D1D1D',
        gray: {
          DEFAULT: '#B9B9B9',
        },
        yellow: {
          DEFAULT: '#F5B12D',
          dark: '#3F0800',
        },
      },
    },
  },
  plugins: [],
};
