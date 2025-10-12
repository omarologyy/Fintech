// // tailwind.config.js
// export default {
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2E5C38",
//       },
//       keyframes: {
//         scroll: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//       },
//       animation: {
//         scroll: "scroll 20s linear infinite",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6ff9d1",
          200: "#49f6d2",
          300: "#0cf3c3",
          400: "#08d6a9",
          500: "#03b792",
          main: "#880808",
        },
        secondary: {
          main: "#e7ffa9",
          200: "#c7ff5f",
        },
        neutral: {
          100: "#ffffff",
          200: "#e3e3e3",
        },
        tertiary: {
          main: "#c6eae2", // fixed as noted
          200: "#8dd4c4",
        },
      },
    },
  },
  plugins: [],
};
