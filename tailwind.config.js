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
        'navcolor':"#e4ebf3",
        'custom-dark-green': 'rgba(3, 41, 32, 1)',
        'custom-green': 'rgba(27, 130, 89, 1)',
        'custom-cyan': 'rgba(0, 212, 255, 1)',
        'customNivia':"#f2f4fa",
        'customMama':"#f8fbf5",
        'customHimalaya':"#f2f7f7",
        'customHuggies':"#fdf3f4",
        'customSavlon':"#fef6f3"

      }
    },
  },
  plugins: [],
}

