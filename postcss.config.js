module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia: { "--t": "(min-width: 960px)" }
        },
        {
          customMedia: { "--t": "(min-width: 1270px)" }
        }
      ]
    }
  }
};
