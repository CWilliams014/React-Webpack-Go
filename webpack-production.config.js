//extension of webpack.config so we can take advantage of the overlap
let WebpackStrip = require('strip-loader')
let devConfig = require('./webpack.config.js');

// running webpack --config --webpack-production.config.js will run production webpack
// strip loader will remove anything you want from your dev code for production.
let webpackStripLoader = {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: WebpackStrip.loader('console.log')
}

devConfig.module.loaders.push(webpackStripLoader)

module.exports = devConfig;