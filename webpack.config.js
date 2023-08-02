const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // nouvelle règle pour les fichiers .webp
      {
        test: /\.(webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "assets/img",
            },
          },
        ],
      },
    ],
  },
};
