const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ElectronReloadPlugin = require('webpack-electron-reload')({
  path: path.resolve(__dirname, 'dist/electron.js'),
});


module.exports = [{
  mode: process.env.NODE_ENV,//'development',
  entry: './src/electron.ts',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
    ],
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // ...
    ElectronReloadPlugin()
  ],
},
{
  mode: process.env.NODE_ENV,//'development',
  entry: './src/react.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      include: /src/,
      // exclude: /(node_modules)/,
      use: [{ loader: 'ts-loader' }]
    },
    {
      test: /\.s[ac]ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },]
  },
  output: {
    filename: 'react.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      directory: path.resolve(__dirname, 'dist'),
    },
    proxy: {
      '/': 'http://localhost:3000'
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
},
]