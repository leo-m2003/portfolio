/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
      'darkBlue': '#000814',
      'yellow': '#FFD604',
      'lightGray': '#EDF2F4',
      },
    },
  },
  plugins: [],
}

