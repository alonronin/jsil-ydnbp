const HtmlPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
	entry: {
		main: ['babel-polyfill', './src/'],
		vendors: ['jquery']
	},

	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				include: resolve(__dirname, 'src')
			},

			{
				test: /.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					chunks: 'initial',
					name: 'vendors',
					test: 'vendors',
					enforce: true
				},
			}
		}
	},

	plugins: [
		new HtmlPlugin()
	]
};
