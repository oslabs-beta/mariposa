//first set the module.exports to be an object that will hold all the configuration necessary
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: path.join('/client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build')
  },
  // I believe this works?
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/, 
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: './client/index.html'})],
  devServer: {
    static: {
      directory: path.join(__dirname),
      publicPath: '/'
    },
    compress: true,
    //port: 9000,
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
        secure: false,
      }
    }
  },
}