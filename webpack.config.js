module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        // use: [
        //     {
        //       loader: 'vue-loader'
        //     },
        //     {
        //       loader: 'vue-markdown-loader/lib/markdown-compiler',
        //       options: {
        //             raw: true
        //       }
        //     }
        // ],
        use: {
          loader: "vue-markdown-loader/lib/markdown-compiler",
          options: {
            raw: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json", ".md"],
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/index.scss";
        `,
      },
    },
  },
};
