module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname,
		filename: "./dist/bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components|vendor)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
