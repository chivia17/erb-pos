const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.tsx'],
  mode: 'jit',
  theme: {
    colors: {
      // add other colors in here

      // import all colors for a wide range of pick
      ...colors,
    },
    extend: {
      height: {
        '1/12': '8.33333333333%',
        '2/12': '16.6666666667%',
        '3/12': '25%',
        '4/12': '33.3333333333%',
        '5/12': '41.6666666667%',
        '6/12': '50%',
        '7/12': '58.3333333333%',
        '8/12': '66.6666666667%',
        '9/12': '75%',
        '10/12': '83.3333333333%',
        '11/12': '91.6666666667%'
      }
    },
  },
  plugins: [],
};
