/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../server/public/index.html', './**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'merri': ['Merriweather']
      },
    },
  },
  plugins: [],
}