/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-500': colors.green[500],
        'yellow-500': colors.yellow[500],
        'red-500': colors.red[500],
        'green-400': colors.green[400],
        'yellow-400': colors.yellow[400],
        'red-400': colors.red[400],
        'blue-400': colors.blue[400],
        'gray-400': colors.gray[400],
        'gray-700': colors.gray[700],
        'gray-800': colors.gray[800],
        'blue-600': colors.blue[600],
        'blue-700': colors.blue[700],
        'purple-600': colors.purple[600],
        'white': colors.white,
      },
    },
  },
  plugins: [],
}
