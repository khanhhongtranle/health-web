/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00'
        },
        secondary: {
          300: '#8FE9D0'
        },
        dark: {
          500: '#414141',
          600: '#2E2E2E'
        },
        gray: {
          400: '#777777',
          500: '#707070'
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        small: ['11px', '16px'],
        small2: ['12px', '17px'],
        default: ['15px', '22px'],
        big: ['16px', '23px'],
        big2: ['18px', '26px'],
        semilarge: ['20px', '24px'],
        large: ['22px', '27px'],
        huge: ['25px', '30px']
      },
      aspectRatio: {
        '4/3': '4 / 3'
      }
    }
  },
  plugins: []
};
