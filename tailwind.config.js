/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [animations],
  theme: {
    screens : {
      "5xl" : { max: "1920px" },
      "4xl" : { max: "1870px" },
      "3xl" : { max: "1680px" },
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      colors: {
        'moderateCyan': '#3cb4ac',
      },
      backgroundImage: {
        'hero-desktop': "url('/src/assets/image-hero-desktop.jpg')",
        'hero-mobile': "url('/src/assets/image-hero-mobile.jpg')",
      },
      fontFamily: {
        'commissioner': ['Commissioner', 'sans-serif'],
      },
      animation: {
        'fade': 'fade .8s linear',
        'fade-in': 'fade-in .6s ease-in',
      },
      keyframes: {
        'fade': {
          from: { top: '-100%' },
          to: { top: '0%' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      }
    },
  },
}

