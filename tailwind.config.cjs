/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [],
}
