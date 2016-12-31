const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

let assetsPluginInstance = new AssetsPlugin(
  {
    path: path.join(__dirname, '../dist/'),
    filename: 'assets.json'
  }
);

module.exports = {
  devtool: process.env.NODE_ENV !== 'production' ? '#source-map' : false,
  entry: {
    site: './src/client.jsx',
    vendor: [
      'history',
      'http-hash',
      'inferno',
      'inferno-component',
      'inferno-create-class',
      'inferno-create-element',
      'inferno-mobx',
      'mobx',
      '@material/drawer',
      'tcomb-forked'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ?
      '[name].[chunkhash].js' : '[name].js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [assetsPluginInstance],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: '/node_modules\/(?![' +
        'material-components-web|' +
        '@material/drawer' +
        '])/'
      }
    ]
  }
};
