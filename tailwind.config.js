/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: ["light", "dark", "cupcake","aqua"],
  },
  theme: {
    extend: {
      colors:{
        primary: "#4478ff",
        secondary:"#B3FEF9",
        third:"#F6FDFF",
        red:"#F7706F",
        orange:"#FF7A59",
        textColor:"#5F6D7E",
        yellow:"#EEF08C",
        green:"#9FEB93",
        blue:"#669EFF"
      },
      fontFamily: {
        mainFont: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

/* Lucida Console */