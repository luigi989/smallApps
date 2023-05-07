/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": '#dc2626',
        "blue": '#3b82f6',
        "green": '#22c55e',
        //Dark mode
        "dbg": '#172d13',
        "dbgAlt": '#6bb77b',
        "dbuttonbg": '#d76f30',
        "dbuttonhover": '#ac5826',
        "dtextAlt": 'd2a295',
        // Light mode
        "liBg": '#e5e5f7',
        "liBgAlt": '#e4e5f1',
        "liPrimary": '#d2d3db',
        "liSec": "#484b6a",
        "liLight": '#9394a5',
      },
      textColor: {
        "dtext": '#fff',
        "litext": '#000'
      },
      animation: {
        'blinkRed': 'blinkingRed 1s linear infinite',
        'blinkBlue': 'blinkingBlue 1s linear infinite',
        'blinkGreen': 'blinkingGreen 1s linear infinite',
      },
      keyframes: theme => ({
        'blinkingRed': {
          '0%, 100%': { boxShadow: '0px 0px 40px ' + theme('colors.red') },
          '50%': { boxShadow: '0px 0px 0px ' + theme('colors.red') },
        },
        'blinkingBlue': {
          '0%, 100%': { boxShadow: '0px 0px 40px ' + theme('colors.blue') },
          '50%': { boxShadow: '0px 0px 0px ' + theme('colors.blue') },
        },
        'blinkingGreen': {
          '0%, 100%': { boxShadow: '0px 0px 40px ' + theme('colors.green') },
          '50%': { boxShadow: '0px 0px 0px ' + theme('colors.green') },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
