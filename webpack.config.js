const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{ test: /\.vue$/, loader: "vue-loader" },
			{ test: /\.js$/, loader: "babel-loader" },
			{ test: /\.css$/, loader: "css-loader"}
		]

	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			inject: "header",
			template: path.resolve(__dirname, "index.html")
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname,"dist"),
		port: 8600,
		open: true,
		proxy: {
			"/api/": {
				target: "http://localhost:3500",
				secure: false
			}
		}
	}
}