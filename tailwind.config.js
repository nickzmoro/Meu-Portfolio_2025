/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at center, #ff0000 0%, #0000ff 100%)",
        "linear-gradient":
          "linear-gradient(to bottom, #141841 0%, #0C0E23 100%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        slideUp: "slideUp 0.5s ease-out 0.3s forwards",
        zoom: "zoom 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards",
      },
    },
  },
  plugins: [],
};
