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
      }
    },
  },
  plugins: [],
}

