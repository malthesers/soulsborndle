/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      spectral: ['Spectral, serif, system-ui']
    },
    extend: {
      backgroundImage: {
        'boss-hidden': "url('/boss-default.jpg')"
      }
    }
  },
  plugins: []
}
