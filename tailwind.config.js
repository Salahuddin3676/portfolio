/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: `'Poppins', montserrat, sans-serif`,
        Montserrat: `'Montserrat', poppins, sans-serif`,
      },
    },
  },
  plugins: [],
};
