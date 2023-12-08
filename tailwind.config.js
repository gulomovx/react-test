/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    fontFamily: {
      body: ['Playfair Display'],
      small:['Lato', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

