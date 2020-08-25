module.exports = {
	entry: "./src/index.js",
	devtool: 'inline-source-map',
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
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' }, 
					{ loader: 'css-loader' }
				]
			}
		]
	}
};
