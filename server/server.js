const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
var dirname = path.join(__dirname, '/../');


const env = 'development'

if(env === 'development') {
	const webpack = require('webpack')
	const webpackMiddleware = require('webpack-dev-middleware')
	const webpackConfig = require('../webpack.config')
	const webpackHotMiddleware = require('webpack-hot-middleware')
	const compiler = webpack(webpackConfig)

	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true
	}))

	app.use(webpackHotMiddleware(compiler));

	app.listen(3000, () => {
		console.log('listening on port 3000')
	})

	app.get('/', (req, res) => {
		res.sendFile(dirname+ '/client/index.html')
	});
}

