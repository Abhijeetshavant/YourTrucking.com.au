/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A0E17",
          50: "#1A2030",
          100: "#151B28",
          200: "#111620",
          300: "#0D111A",
          400: "#0A0E17",
          500: "#080B12",
          600: "#06080D",
          700: "#040508",
          800: "#020203",
          900: "#000000",
        },
        accent: {
          orange: "#FF4C00",
          blue: "#00C2FF",
          green: "#00E676",
          silver: "#C0C0C0",
        },
        surface: {
          glass: "rgba(255, 255, 255, 0.05)",
          "glass-hover": "rgba(255, 255, 255, 0.08)",
          "glass-border": "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
