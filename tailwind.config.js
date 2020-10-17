module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: ["./src/**/*.vue"],
  theme: {
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {},
  plugins: [
    function({ addBase, config }) {
      addBase({
        body: {
          color: config("theme.colors.black"),
          backgroundColor: config("theme.colors.white"),
        },
        "@screen dark": {
          body: {
            color: config("theme.colors.white"),
            backgroundColor: config("theme.colors.black"),
          },
        },
      });
    },
  ],
};
