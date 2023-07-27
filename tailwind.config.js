/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        night: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          ".bg-dark-card": {
            "background-color": "#414558",
            color: "white",
          },
        },
      },
    ],
  },
};
