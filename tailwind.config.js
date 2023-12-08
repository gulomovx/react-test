/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js"

  ], theme: {
    fontFamily: {
      body: ['Playfair Display'],
      small:['Lato', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  
}

