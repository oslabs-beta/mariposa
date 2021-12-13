const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,//'development',
  entry: './src/index.tsx',
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      // include: /src/,
      use: [{ loader: 'babel-loader' }]
    },
    {
      test: /\.(sass|css|scss)$/,
      use: ['style-loader', 'css-modules-typescript-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{ loader: 'file-loader' }],
    },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    static: path.join(__dirname, '../dist/renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 8080,
    // publicPath: '/',
    proxy: {
      '/': 'http://localhost:3000'
    },
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};