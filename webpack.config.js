const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: "./src/index.js",
	devtool: 'inline-source-map',
	mode: isDevelopment ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components|vendor)/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					{ loader: require.resolve('style-loader') }, 
					{ loader: require.resolve('css-loader') }
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	output: {
		path: __dirname,
		filename: "./dist/bundle.js"
	},
};