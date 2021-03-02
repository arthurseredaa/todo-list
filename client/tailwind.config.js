const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
