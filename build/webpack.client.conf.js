const webpack = require('webpack')
const base = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var Purify = require('purifycss-webpack-plugin')
// const WebpackShellPlugin = require('webpack-shell-plugin')

const config = Object.assign({}, base, {
  resolve: {},
  plugins: (base.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ])
})

if (process.env.NODE_ENV === 'production') {
  config.module.rules.push(
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[hash].[ext]'
      }
    }
  )
  config.module.rules.push(
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
      })
    }
  )
  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new Purify({
      basePath: __dirname,
      paths: [
        'dist/vendor*.js',
        'dist/app*.js'
      ]
    })// ,
    // dedupe and minify css after webpack build is finished
    // new WebpackShellPlugin({onBuildExit: ['ls -d1 dist/styles* | xargs -I {} ./node_modules/.bin/cleancss -o {} {}']})
  )
} else {
  config.performance = {hints: false}
  // inline all resources for hot module reload
  config.module.rules.push(
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 0,
        name: '[name].[hash].[ext]'
      }
    }
  )
  // inline css into js for hot module reload
  config.module.rules.push(
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
  )
}

module.exports = config
