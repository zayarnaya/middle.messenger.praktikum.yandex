const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },

    client: {
      overlay: false,
    },

    port: 3000,
    historyApiFallback: true,
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
     {
       test: /favicon\.ico/,
       type: 'asset/resource',
       generator: {
         filename: 'favicon.ico'
       }
     },


    ],
  },
  resolve: {
    extensions: [".ts", ".js"],

    //  fallback: {
    //    fs: false,
    //  },
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};
