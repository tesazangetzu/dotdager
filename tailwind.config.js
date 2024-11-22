/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      screens: {
        'xs': '430px',
      },
      backgroundImage: {
        'overlay-video': "url('../images/overlay-m.png')",
      },
      height: {
        inherit: "inherit",
      },
      padding: {
        22: "88px",
      },
      backgroundColor: {
        "custom-1": "#FFDF39",
        "custom-2": "#232323",
        "custom-3": "#9F0202",
      },
      colors: {
        "custom-1": "#FFDF39",
        "custom-2": "#232323",
        "custom-3": "#9F0202",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
