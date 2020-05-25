const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports = {
  entry: {
    index: resolve(__dirname, "./src/index.js")
  },
  mode: "development",
  output: {
    path: resolve(__dirname,"./dist"),
    filename: "[name].[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname,"./template/index.html")
    }),
    new CleanWebpackPlugin()
  ],
  devtool: "cheap-source-map",
  devServer: {
    hot: true,
    open: true,
    port: 8000
  }
}