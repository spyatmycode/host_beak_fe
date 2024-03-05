/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'gilroy': ['Gilroy', 'sans-serif'],
      'manrope': ['Manrope', 'sans-serif'],
      'roobert': ['Roobert', 'sans-serif'],
      'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}