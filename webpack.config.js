var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/client/index.html",
	filename: "index.html",
	inject: "body"
});
var combineLoaders = require('webpack-combine-loaders');


module.exports = {

	entry: [
		__dirname + "/client/index.js"
	],

	output: {
		path: __dirname + "/client/public",
		filename: "index_bundle.js",
	},

	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {
                test: /\.scss$/, 
                loader: combineLoaders([
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        query: {
                            module: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }, {
                        loader: "sass-loader"
                    }
                ])
            }
		]
	},

	plugins: [HtmlWebpackPluginConfig]
};