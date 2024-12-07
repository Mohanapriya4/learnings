/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'pure-red':'#FF0000',
        'color-change':'#DCEDC8'
      },
      fontWeight :{
        'mohana':500
      }
    },
    fontFamily:{
      bebas:['Bebas Neue','sans-serif']
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
    
  },
  plugins: [],
  darkMode:"selector"
}

