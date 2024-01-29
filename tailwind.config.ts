/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      spectral: ['Spectral, serif, system-ui']
    },
    extend: {
      backgroundImage: {
        'vertical-fade': 'linear-gradient(0deg, transparent 0%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 75%, transparent 100%)'
      },
      boxShadow: {
        'inner-dark': 'inset 0px 0px 5px 8px rgba(24, 24, 27, 1)',
        'inner-light': 'inset 0px 0px 5px 8px rgba(63, 63, 70, 1)'
      },
      dropShadow: {
        red: '0 1px 5px rgba(239, 68, 68, 1)'
      }
    },
    animation: {
      pulse: 'pulse 1500ms cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    screens: {
      xs: '450px',
      sm: '669px',
      md: '768px',
      lg: '900px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
