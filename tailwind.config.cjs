/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'extrabold': ['Tofu', 'Dancing_Script'],
        'gradient': ['Tofu', 'Dancing_Script'],
      },
    },
  },
  plugins: [],
}
