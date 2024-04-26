/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs',],
  theme: {
  extend: {
    colors : {
      black : {
        100 : "#827E7E",
        200 : "#231F20",
      },
      grey : {
        100 : "#E5E6E7",
        200 : "#667185"
      },
      purple : "#9546E8"
    },
    fontFamily : {
      inter : ["Inter", 'sans-serif'],
      satoshi : ['Satoshi', 'sans-serif']
    },
    backgroundSize : {
      '25' : '25%',
      '35' : '35%',
      '50' : '50%',
      '100' : '100%'
    },
    backgroundPosition : {
      'bottome' : '50% 150%',
      'tope' : '100% -20%'
    },

    backgroundImage : {
      bio : "url('/images/TO.png')",
      biogrey : "url('/images/TOgrey.png')"
    }
  },
  },
  plugins: [
  {
  tailwindcss: {},
  autoprefixer: {},
  },
  ],
  };
