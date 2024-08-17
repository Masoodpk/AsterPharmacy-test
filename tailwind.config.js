/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'laptop':"1280px",
        'monitor':"1600px"
      },
      colors:{
        'customBlue':"#003377",
        'customGreen':"#09a37c",
        'navcolor':"#e4ebf3"

      }
    },
  },
  plugins: [],
}

