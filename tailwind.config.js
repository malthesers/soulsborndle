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
        'inner-dmg': 'inset 0px 0px 5px 5px rgba(0, 0, 0, 0.7)'
      },
      dropShadow: {
        red: '0 1px 5px rgba(239, 68, 68, 1)'
      }
    },
    screens: {
      xs: '450px',
      sm: '650px',
      md: '768px',
      lg: '900px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
