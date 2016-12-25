const webpack = require('webpack')
const base = require('./webpack.base.conf')

// add proper rule for url-loader on pre-render
base.module.rules.push({
	test: /\.(png|jpg|gif|svg)$/,
	loader: 'url-loader',
	options: {
		limit: 10000,
		name: '[name].[hash].[ext]'
	}
})

module.exports = Object.assign({}, base, {
	target: 'node',
	devtool: false,
	entry: './src/prerender.js',
	output: Object.assign({}, base.output, {
		filename: 'prerender-bundle.js',
		libraryTarget: 'commonjs2'
	}),
	externals: Object.keys(require('../package.json').dependencies),
	plugins: [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': 
			JSON.stringify(process.env.NODE_ENV || 'development'),
		'process.env.INFERNO_ENV': '"server"'
	})
]
})
