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
        primary: "#011470",
        secondary: "#FAD107",
        white: "#FFFFFF",
        light: "#E8E8E8"
      }
    },
  },
  plugins: [],
}

