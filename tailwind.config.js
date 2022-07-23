/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "420px",
      xs: "640px",
      md: "1280px",
      lg: "1920px",
    },
    extend: {},
  },
  plugins: [],
}