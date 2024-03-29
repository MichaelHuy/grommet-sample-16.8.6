const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./build'),
    filename: 'index.js',
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './public' }]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve('./build'),
    historyApiFallback: true,
    hot: true,
    port: 8585,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
