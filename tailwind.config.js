/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pump': "url('./src/assets/images/pump.png')",
        'manual': "url('./src/assets/images/manual.png')",
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '5px',
        lg: '8px',
        xl: '16px'
      }
    },
  },
  plugins: [],
}

