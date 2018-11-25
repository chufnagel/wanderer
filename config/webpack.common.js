const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const SRC_DIR = path.join(__dirname, "../src");

module.exports = {
  entry: {
    app: `${SRC_DIR}/index.jsx`,
  },
  context: SRC_DIR,
  resolve: {
    extensions: [".js", ".jsx", ".json", "*"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      favicon: `${SRC_DIR}/favicon.ico`,
    }),
    // new workboxPlugin.GenerateSW({
    //   swDest: 'sw.js',
    //   clientsClaim: true,
    //   skipWaiting: true,
    // })
  ],
};
