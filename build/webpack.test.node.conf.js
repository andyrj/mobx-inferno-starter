var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

var nodeModules = {}
fs.readdirSync('node_modules').filter(function (x) {
  return ['.bin'].indexOf(x) === -1
}).forEach(function (mod) {
  nodeModules[mod] = 'commonjs ' + mod
})

var testConfig = {
  name: 'test',
  entry: {
    client: [
      './test/index.js'
    ]
  },
  target: 'node',
  externals: nodeModules,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        isparta: {
          embedSource: true,
          noAutoWrap: true,
          // these babel options will be passed only to isparta and not to babel-loader
          babel: {
            presets: [
              ['es2015', { 'modules': false }],
              'stage-0'
            ]
          }
        }
      }
    }
  )
  ],
  module: {
    rules: [
      { // this pre loader should instrument code for test coverage
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        // include: path.resolve('/home/dev/github/andyrj/vue-ssr-webpack/src/'),
        loader: 'isparta-loader',
        exclude: /(node_modules|test)/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'null-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '../test'),
    filename: 'test.node.bundle.js'
  }
}

module.exports = testConfig
