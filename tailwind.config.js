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
      {
        mytheme: {
          water: "#60A5FA",
          fire: "#FC6C6D",
          grass: "#5DBE62",
          bug: "#9DC130",
          dark: "#5F606D",
          dragon: " #0773C7",
          electric: "#EDD53F",
          fairy: "#EF97E6",
          fighting: "#D94256",
          flying: "#9BB4E8",
          gosht: "#7975D4",
          ground: "#D78555",
          ice: "#98D8D8",
          normal: "#9A9DA1",
          poison: "#B563CE",
          psychic: "#F85888",
          rock: "#CEC18C",
          steel: "#B8B8D0",
        },
      },
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
