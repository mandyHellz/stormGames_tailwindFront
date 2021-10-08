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
      },
      backgroundImage:{
        darkbackground: "url('https://designshack.net/wp-content/uploads/Slate-Texture-BW-Background.jpg')",
        darkhive: "url('https://thumbnails-photos.amazon.com/v1/thumbnail/HjBySUiQR1qbIyxlr8sWFg?viewBox=1577%2C887&ownerId=A3F4ZK1XGPD068&groupShareToken=qWhphZvYTaGI-UGE_IpGNg.vPQBakdQEG0-zvKEWGyC0f')",
        deepblue: "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701908956-768x432.jpg')",
      },
    }
  },
  variants: {
    extend: {
      blur: ['hover'],
      grayscale: ['hover'],
      position: ['hover', 'focus']
    },
  },
  plugins: [],
}
