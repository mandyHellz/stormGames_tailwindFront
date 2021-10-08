module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        container: '1024px',
        page: '1920px',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'stormBlue': {
          default: '#2A2D40',
          darken: '#1B1D2A',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
