const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
