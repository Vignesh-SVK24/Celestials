/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        muted: '#1f1f1f',
        accent: '#e63946',
      }
    },
  },
  plugins: [],
}
