const merge = require("webpack-merge");
const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");

const common = require("./webpack.common");

const SRC_DIR = path.join(__dirname, "../src");
const DIST_DIR = path.join(__dirname, "../dist");

module.exports = merge(common, {
  mode: "production",
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
    warnings: true,
  },
  optimization: {
    minimize: true,
    sideEffects: true,
  },
  output: {
    path: DIST_DIR,
    filename: "[name].bundle.[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
          {
            loader: "img-loader",
            options: {
              plugins: [
                // eslint-disable-next-line
                require("imagemin-mozjpeg")({
                  progressive: true,
                  arithmetic: false,
                }),
                // eslint-disable-next-line
                require("imagemin-svgo")({
                  plugins: [{ removeTitle: true }, { convertPathData: false }],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50000,
            },
          },
        ],
      },
    ],
  },
  // add back in for multi-device favicon generation
  plugins: [
    new FaviconsWebpackPlugin({
      logo: `${SRC_DIR}/favicon.png`,
      emitStats: false,
      inject: true,
      persistentCache: true,
      title: "TestTaker",
      icons: {
        favicons: true,
      },
    }),
    new workboxPlugin.GenerateSW({
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
