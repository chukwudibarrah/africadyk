/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "choc": "#594246",
        "yell": "#F2CA50",
        "burnt": "#F2B544",
        "gold": "#F29E38",
        "greyish": "#D9D1C7"
      }
    },
  },
  plugins: [],
}

