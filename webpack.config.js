const path = require("path");

module.exports = {
  entry: "./src/index.ts",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.hbs/,
        use: "handlebars-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],

        exclude: /node_modules/,
      },

      {
        test: /index\.html/,
        type: "asset/resource",
        generator: {
          filename: "index.html",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],

    fallback: {
      fs: false,
    },
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
