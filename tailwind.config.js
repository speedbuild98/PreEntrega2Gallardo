/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow" : "#F9CC0B",
      },
    },
    daisyui: {
      themes: ["night", "light"],
    },    
  },
  plugins: [require("daisyui")],
}