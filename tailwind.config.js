/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          600: '#F15A24',  // BHOS-un rəsmi narıncı
        }
      }
    },
  },
  plugins: [],
}
