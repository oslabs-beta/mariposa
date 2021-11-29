const path = require('path');
const ElectronReloadPlugin = require('webpack-electron-reload')({
  path: path.resolve(__dirname, 'dist/main.js'),
});

module.exports = {
  mode: process.env.NODE_ENV,//'development',
  entry: './electron/main.ts',
  devtool: 'source-map',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
    ],
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    // ...
    ElectronReloadPlugin()
  ],
};