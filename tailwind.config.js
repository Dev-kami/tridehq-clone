/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C56F6",
        veryDark: "#1D1D1B",
        dark: "#282825",
        lightPurple: "#F8F5FE",
        // // "green": "#61CE70",
        // // "lightBlue": "#6EC1E4",
      },
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        customLg: "1180px",
        customMd: "1024px",
      },
    },
  },
  plugins: [],
};
