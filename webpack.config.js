const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: "./src/index.js",
	devtool: 'inline-source-map',
	output: {
		path: __dirname,
		filename: "./dist/bundle.js"
	},
	mode: isDevelopment ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components|vendor)/,
				use: {
					loader: require.resolve('babel-loader'),
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							isDevelopment && require.resolve('react-refresh/babel'),
						].filter(Boolean)
					}
				}
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
};
