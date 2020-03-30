/* eslint-env node */

const path = require("path")
const webpack = require("webpack")

const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = env => {
  return {
    mode: env.prod ? "production" : "development",

    entry: {
      app: "./src/bootstrap.js"
    },

    optimization: {
      splitChunks: {
        chunks: "initial"
      }
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: "babel-loader", options: { cacheDirectory: true } }]
        },
        {
          test: /(\.css|\.scss)$/,
          use: [
            env.prod ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: env.prod ? false : true,
                modules: {
                  mode: "local",
                  localIdentName: env.prod
                    ? "[hash:base64]"
                    : "[path][name]__[local]"
                }
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.html$/,
          loader: "html-loader",
          options: {
            minimize: true
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]?[hash]"
          }
        }
      ]
    },

    plugins: env.prod
      ? [
          new webpack.DefinePlugin({ PRODUCTION: true }),
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin(),
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/app.html"),
            hash: true,
            minify: {
              html5: true,
              minifyJS: true
            }
          })
        ]
      : [
          new webpack.DefinePlugin({ PRODUCTION: false }),
          new CleanWebpackPlugin(),
          new webpack.HotModuleReplacementPlugin(),
          new HtmlWebpackPlugin({
            template: "./src/app.html",
            hash: true,
            minify: {
              html5: true,
              minifyJS: true
            }
          })
        ],

    devtool: env.prod ? "nosources-source-map" : "eval-source-map",

    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 9000,
      hot: true,
      open: true
    }
  }
}
