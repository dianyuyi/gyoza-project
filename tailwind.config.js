/* eslint @typescript-eslint/no-var-requires: "off" */

const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  important: true,
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  options: {
    safelist: {
      standard: ['outline-none'],
    },
  },
  theme: {
    extend: {
      screens: {
        sm: { min: '576px' },
        md: { min: '768px' },
        lg: { min: '992px' },
        xl: { min: '1200px' },
        '2xl': { min: '1400px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}
