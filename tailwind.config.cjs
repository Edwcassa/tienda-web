/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Modern: ['Mulish', 'sans-serif'],
        Design: ['HMregular', 'sans-serif'],
        Design02: ['CodeSaver', 'sans-serif']
      }
    }
  },
  plugins: []
}
