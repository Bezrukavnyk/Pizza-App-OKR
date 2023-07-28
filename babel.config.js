module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          components: "./src/components",
          containers: "./src/containers",
          controls: "./src/controls",
          screens: "./src/screens",
          utils: "./src/utils",
        },
      },
    ],
  ],
};
