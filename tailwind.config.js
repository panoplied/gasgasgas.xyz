/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: "420px",
      xs: "640px",
      md: "1280px",
      lg: "1920px",
    },
    extend: {
      fontFamily: {
        majorMonoDisplay: ['Major Mono Display'],
        shareTechMono: ['Share Tech Mono'],
        novaMono: ['Nova Mono'],
        robotoMonoRegular: ['Roboto Mono Regular'],
        robotoMonoLight: ['Roboto Mono Light'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}