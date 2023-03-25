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
      },
      boxShadow: {
        'inner-dmg': 'inset 0px 0px 5px 5px rgba(0,0,0,0.7)'
      }
    }
  },
  plugins: []
}
