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
      },
      boxShadow: {
        top: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
}
