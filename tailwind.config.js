/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'composite-beige': '#F8F7F4',
        'composite-black': '#111111',
        'composite-orange': '#F06423',
        'off-white': '#FDFBF9',
      },
    },
  },
  plugins: [],
}

