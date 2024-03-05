/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#ddece4",
        "primary-300": "#d9e8d8",
        "primary-500": "#ff9548",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#409570a6",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePage.png')",
      }),
      fontFamily: {
        recoletaalt: ["RecoletaAlt-Regular", "sans-serif"],
        voga: ["Voga", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
      },
    },
    screens: {
      sl: "320px",
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
