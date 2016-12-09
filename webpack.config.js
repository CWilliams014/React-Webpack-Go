//Public path tells webpack where the bundle will be serverd up on the web server
//easy to swap out sass and less
//url-loader?limit=20000
	//will look at each image, if its under 20kb, it will be inline and turned into base64 encoded data. Bigger ones will be separate request
// add fonts to test that loads images

const path = require('path')
const { resolve } = require('path')
const env = require('./.env');
const webpack = require('webpack')

module.exports = {

		context: resolve('client'),
		entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')
		],
		output: {
			path: resolve('dist'),
			filename: 'bundle.js',
			publicPath: '/dist/',
		},

		devtool: 'eval',

		eslint: {
			configFile: './.eslintrc'
		},

		plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
		],

		module: {
			preLoaders: [
	      { test: /\.json$/, 
	      	loader: 'json'
	      },
    	],
			loaders: [
				{
					test:/\.js$/,
					include: [
						path.join(__dirname, 'client'),
						path.join(__dirname, 'server'),
						path.join(__dirname, 'test')
					],
					loaders: ['react-hot', 'babel']
				},
				{
					test: /\.css$/,
					exclude: /node_modules/,
					loaders: ['style', 'css', 'autoprefixer']
				},
				{
					test:/\.scss$/,
					exclude:/node-modules/,
					loaders:['style', 'css', 'sass']
				},
				{
					test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
					loader: 'url-loader?limit=10000',
					include:[path.join(__dirname, 'Public')]
				}
			]
		},
		resolve: {
			extentions: ['', '.js']
	}
	
}