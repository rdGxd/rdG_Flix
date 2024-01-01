/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
      },
      colors: {
        title: "#fffcf9",
        subtitle: "#b3b3b3",
        bgButton: "#e9e6e3",
      },
    },
  },
  plugins: [],
};
