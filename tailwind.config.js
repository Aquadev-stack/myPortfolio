/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           // All HTML files in root (index.html, about.html, etc.)
    "./src/**/*.{js,ts}"  // Any JS files in src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}