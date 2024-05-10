module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        greenbg: "#D7FFE0",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
