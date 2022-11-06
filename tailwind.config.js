/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#292929",
          secondary: "#ffffff",
          accent: "#96dae0",
          neutral: "#202020",
          "base-100": "#ffffff",
          info: "#4064CE",
          success: "#31D36F",
          warning: "#A9640F",
          error: "#EC1842",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
