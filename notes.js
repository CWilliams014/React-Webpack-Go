const webpackValidator = require('webpac-validator')
const {resolve} = require('path')

module.exports = env => {
	return webpackValidator({
		context: resolve('src')
		entry: './bootstrap.js',
		output: {
			path: resolve('dist'),
			filename: 'bundle.js',
			publicPath: '/dist/',
		},
		devtool: env.prod ? 'source-map' : 'eval',
		module: {
			loaders: [
			{
				test: /\.js$/,loaders: ['babel'], exclude: /node_modules/
			}]
		}
	})
}



/* 

source maps 
- eval : fast to generate and rebuild( but you ship source maps to customers - bad)
- in dev use eval, in prod use source-map

- path info (helps for debug??) 1:25:00

- learn dependency resolution in common.js

- style loader(after css loader) takes the css from js module, creating a script tag and inserting into DOM at runtime

- loaders run from right to left

*/






//package.json

scripts: {
	prebuild: rimraf dist //avoids sending stale bundles
	build: webpack -p, //minimize mode, optimize, dedoup (-p)
	dev: webpack-dev-server,
	build:dev : webpack,
	validate: npm run lint,
	start: http-server --silent -c-1,
	lint: eslint .

}
build: webapck -p --env.prod
	// webpack uses package called Yargs - it will take the env object and create property called prod and set to true (same for env.dev)