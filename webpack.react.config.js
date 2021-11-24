const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: process.env.NODE_ENV,//'development',
  entry: './src/react.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      // include: /src/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }]
    },
    {
      test: /\.s[ac]ss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },]
  },
  // output: {
  //   filename: 'react.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   publicPath: path.resolve(__dirname, 'dist'),
  // },
  devServer: {
    static: path.join(__dirname, '../dist/renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    // publicPath: '/',
    // proxy: {
    //   '/': 'http://localhost:3000'
    // },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};