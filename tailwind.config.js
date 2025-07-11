/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        parisienne: ["Parisienne", "cursive"],
      },
      colors: {
        primary: "#00C2FF",
        secondary: "#DD0BFF",
        dark: "#111111",
        galaxyStart: "#49c6e5",
        galaxyMid: "#9d4edd",
        galaxyEnd: "#ff4ecd",
      },
      backgroundImage: {
        "galaxy-gradient": "linear-gradient(to right, #49c6e5, #9d4edd, #ff4ecd)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
