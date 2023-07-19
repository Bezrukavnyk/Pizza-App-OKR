module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          components: "./src/components",
          controls: "./src/controls",
          screens: "./src/screens",
          utils: "./src/utils",
        },
      },
    ],
  ],
};
