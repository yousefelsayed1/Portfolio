module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        primary: "#050816",
        secondary: "#ccc",
        tertiary: "#151030",
        "green-text": "#018C0F",
        greenbg: "#D7FFE0",
        lightPurple: "#604dee",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      dropShadow: {
        md: "3px 3px 8px rgba(0, 0, 0, 0.8)",
        xl: [
          "0 10px 15px rgba(0, 0, 0, 0.8)",
          "0 10px 15px rgba(0, 0, 0, 0.8)",
        ],
      },
    },
  },
  plugins: [],
};
