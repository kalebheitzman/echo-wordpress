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
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
						loader: 'file-loader',
						options: {
							outputPath: 'dist',
						},
          },
        ],
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