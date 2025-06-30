/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: '#000957',
        secodary: '#FFEB0D'
      }
    },
  },
  darkMode: 'class',
  mode: 'jit',
  plugins: [],
}

