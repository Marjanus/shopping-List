var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/client/index.html",
	filename: "index.html",
	inject: "body"
});


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
            {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
		]
	},

	plugins: [HtmlWebpackPluginConfig]
};