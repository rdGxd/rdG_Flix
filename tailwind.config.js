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
      screens: {
        GalaxyS8: "360px",
        iPhoneSE: "375px",
        iPhone12: "390px",
        Pixel7: "412px",
        iPhoneXR: "414px",
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
