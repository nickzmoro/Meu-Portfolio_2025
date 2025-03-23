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
    },
  },
  plugins: [],
};
