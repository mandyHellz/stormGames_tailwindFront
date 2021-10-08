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
        darkbackground: "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v882-sasi-13.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=012f0abdf565090eb02bdeb9f97d0f88')",
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
