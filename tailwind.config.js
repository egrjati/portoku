// tailwind.config.js
module.exports = {
  content: ["./index.html", "./project.html", "./sertivikat.html", "./js/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'side': '-10px 0 15px -3px rgba(0,0,0,0.3), 10px 0 15px -3px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
};
