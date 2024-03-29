/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    // extender os temas do tailwind como fontes e cores
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app:'url(/app-bg.png)'
      },
      colors: {
        ignite: {
          500: '#129E57',
        },
      gray: {
        100: '#E1E1E6',
        300: '#8D8D99',
        600: '#323238',
        800: '#202824',
        900: '#121214'
      },
      yellow: {
        500: '#F7DD43',
        700: '#E5CD3D',
      }
    }
    },
  },
  plugins: [],
}
