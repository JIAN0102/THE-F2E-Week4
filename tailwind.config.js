module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#6785FF',
        secondary: '#FF9667',
        'dark-blue': {
          100: '#2F3136',
          200: '#393C43'
        },
        gray: {
          100: '#B9BBBE',
          200: '#707070'
        },
        black: '#000000',
        white: '#ffffff',
      },
      spacing: {
        '25': '6.25rem',
        '75': '18.75rem'
      }
    },
  },
  plugins: [],
}
