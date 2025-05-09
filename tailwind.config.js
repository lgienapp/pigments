module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Barlow', 'sans-serif'],
        'serif': ['Crimson Pro', 'serif']
      },
      colors: {
        // Ash Gray
        'ash': {
          100: '#f1f0ef',
          200: '#dddad7',
          300: '#c8c4bf',
          400: '#b3afab',
          500: '#9d9a97',
          600: '#898683',
          700: '#75726f',
          800: '#615f5d',
          900: '#4f4d4a',
          1000: '#3d3b38',
        },
        // Prussian Blue
        'prussian': {
          100: '#e2f5f0',
          200: '#b7eceb',
          300: '#98d4dd',
          400: '#79bacd',
          500: '#5ea4c0',
          600: '#4590a9',
          700: '#2e7c92',
          800: '#176778',
          900: '#0b5561',
          1000: '#074248',
        },
        // Celadonite Green
        'celadon': {
          100: '#f0f5c2',
          200: '#d7e9b4',
          300: '#b3cd9b',
          400: '#9bb989',
          500: '#89a377',
          600: '#788d64',
          700: '#677851',
          800: '#56633f',
          900: '#4a512d',
          1000: '#40401f',
        },
        // Gold Ochre Yellow
        'ochre': {
          100: '#f9f2c8',
          200: '#f6e299',
          300: '#e6c069',
          400: '#d9a850',
          500: '#c98f39',
          600: '#b77927',
          700: '#9f6520',
          800: '#825420',
          900: '#5f3d16',
          1000: '#4b3313',
        },
        // Iron Oxide Red
        'oxide': {
          100: '#ffede8',
          200: '#ffd3cc',
          300: '#ffb0a4',
          400: '#ff9283',
          500: '#f27666',
          600: '#e15953',
          700: '#cb4245',
          800: '#aa333f',
          900: '#94202b',
          1000: '#720d1e',
        },
        // Manganese Violet
        'manganese': {
          100: '#f9ecff',
          200: '#eddbff',
          300: '#d7b8fb',
          400: '#c4a1f1',
          500: '#a98ce4',
          600: '#9177d4',
          700: '#7e62c0',
          800: '#6d4da5',
          900: '#5f3f7e',
          1000: '#502f5a',
        }
      }
    },
  },
  plugins: [],
}