/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F3F2FA",
        dark: "#1A1A1F",
        violet: "#5D37F3",
        error: "#EA1919",
        correct: "#14D81C",
      },
      padding: {
        "1/4": "1.25rem",
        20: "1.25rem",
      },
      width: {
        480: "30rem",
      },
      height: {
        17: "17rem",
      },
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
