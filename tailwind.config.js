
/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}
  // your (existing) Tailwind CSS config here
)