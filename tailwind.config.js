/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pokeball-image": "url(/src/assets/logo/pokeball.png)",
      },
      animation: {
        "show-content-animation": "zoom 0.3s",
        "show-image-animation": "zoom 0.8s",
        "background-image-animation": "wiggle 0.3s",
      },
      keyframes: {
        zoom: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-360deg)" },
          "50%": { transform: "rotate(130deg)" },
        },
      },
    },
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
