module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { default: '100px' },
    },
    fontSize: {
      xs: ['13px', '15.6px'],
      sm: ['14.33px', '17.19px'],
      md: ['16px', '31.36px'],
      lg: ['18px', '20.7px'],
      xl: ['20px', '85px'],
      '2xl': ['23px', '33.98px'],
      '3xl': ['24px', '27.6px'],
      '4xl': ['29px', '43.5px'],
      '5xl': ['45.48px', '226px'],
      '6xl': ['50px', '85px'],
      '7xl': ['92px', '85px'],
      '8xl': ['125.55px', '226px'],
    },
    extend: {
      colors: {
        purple: '#A56CF3',
      },
      fontFamily: {
        Hellix300: ['Hellix-Light', 'Helvetica', 'Arial', 'sans-serif'],
        Hellix400: ['Hellix-Regular', 'Helvetica', 'Arial', 'sans-serif'],
        Hellix500: ['Hellix-Medium', 'Helvetica', 'Arial', 'sans-serif'],
        Hellix600: ['Hellix-SemiBold', 'Helvetica', 'Arial', 'sans-serif'],
        Hellix700: ['Hellix-Bold', 'Helvetica', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        1: '15.6px',
        2: '17.19px',
        3: '18.4px',
        4: '20.7px',
        5: '24px',
        6: '27.6px',
        7: '31.36px',
        8: '43.5px',
        9: '85px',
        10: '226px',
      },
    },
    spacing: {
      0: '0',
      6: '6px',
      8: '8px',
      11: '11px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      25: '25px',
      27: '27px',
      28: '28px',
      30: '30px',
      32: '32px',
      33: '33px',
      37: '37px',
      38: '38px',
      39: '39px',
      42: '42px',
      43: '43px',
      45: '45px',
      46: '46px',
      47: '47px',
      60: '60px',
      63: '63px',
      65: '65px',
      69: '69px',
      70: '70px',
      72: '72px',
      87: '87px',
      97: '97px',
      101: '101px',
      102: '102px',
      104: '104px',
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    function ({ addVariant }) {
      addVariant('third', '&:nth-child(3n)');
      addVariant('postThird', '&:nth-child(3n+1)');
    },
  ],
};
