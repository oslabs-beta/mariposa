const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.tsx', '.ts', '.js',],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: {
    index: './src/App.tsx'
  },
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator', '@babel/plugin-syntax-jsx'],
        }
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
      options: { name: '[name].[ext]', outputPath: 'fonts/', }
    },
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader',]
    },
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    // contentBase: path.join(__dirname, '../dist/renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: './build',
    },
    proxy: {
      '/': 'http:localhost:4000'
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  }
  
 
};