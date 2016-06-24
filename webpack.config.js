const path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./src/client/client.js'
	],
	output: {
		path: require('path').resolve('./dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
			    test: /\.js$/,
			    exclude: /node_modules/,
			    loader: "babel-loader",
			    query: {
			      presets: ['es2015', 'react', 'react-hmre','stage-1']
			    }
		  	}
		]		
	}	
}
