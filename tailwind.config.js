/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
  theme: {
    extend: {
      colors: {
        Hijau: "#0d9488",
        Dark: "#0f172a",
        Pucat: "#64748b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
