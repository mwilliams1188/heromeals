module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'active', 'even', 'odd'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    })
  ],
}