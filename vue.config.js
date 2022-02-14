module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: "raw-loader", // npm install -D raw-loader
        },
      ],
    },
  },
};
