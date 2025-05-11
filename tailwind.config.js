/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if you're using /app dir
    "./pages/**/*.{js,ts,jsx,tsx}", // for pages dir
    "./components/**/*.{js,ts,jsx,tsx}", // optional
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
