/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../server/public/*.html', './**/*.{js,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'merri': ['Merriweather']
      },
    },
  },
  plugins: [],
}