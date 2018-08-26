const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src"
  },
  output: {},
  module: {
    rules: []
  },
  devServer: {
    clientLogLevel: "warning",
    // historyApiFallback: {
    //   rewrites: [
    //     {
    //       from: /.*/,
    //       to: path.posix.join(config.dev.assetsPublicPath, "index.html")
    //     }
    //   ]
    // },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: "localhost",
    port: "8080",
    open: true,
    overlay: { warnings: false, errors: true }
    // publicPath: config.dev.assetsPublicPath,
    // proxy: config.dev.proxyTable,
    // quiet: true, // necessary for FriendlyErrorsPlugin
    // watchOptions: {
    //   poll: config.dev.poll
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "index.html",
      inject: true
    })
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // })
  ]
};
