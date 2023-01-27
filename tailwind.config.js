/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ['../server/public/*.html', './**/*.{js,vue}'],
  content: [
    './client/pages/**/*.{html,js,vue}',
    './client/components/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merri': ['Merriweather']
      },
    },
  },
  plugins: [],
}