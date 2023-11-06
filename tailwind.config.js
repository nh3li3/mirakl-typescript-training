/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '600': '600px'
      },
      width: {
        '520': '520px',
      },
      backgroundColor: {
        '161a2b': '#161a2b',
      },
    },
  },
  plugins: [],
}

