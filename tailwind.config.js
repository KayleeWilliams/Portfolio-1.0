module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      s: "360px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: (theme) => ({
        bars: "url('/img/bars.png')",
      }),
    },
    colors: {
      white: "#FFFFFF",
      gunpowder: "#424052",
      nightrider: "#343434",
      slateblue: "#7768EE",
      lavendergrey: "#B4ADEA",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
