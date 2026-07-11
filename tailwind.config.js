/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        smoke: '#131013',
        bone: '#EAE3D8',
        ambre: '#D9A05E',
        verte: '#93B08A',
        iris: '#A78FBF',
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        fraunces: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
