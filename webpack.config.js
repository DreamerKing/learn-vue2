const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		//publicPath: "/",
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js"
	},
	resolve: {
		alias: {
			"vue": "vue/dist/vue.esm.js"  // "vue$": "vue/dist/vue.common.js"
		},
		extensions: [".vue", ".js",".ts", ".css"]
	},

	module: {
		rules: [
			{ enforce: "pre", test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /node_modules/, include:[path.resolve(__dirname, "src")], options: { formatter: require("eslint-friendly-formatter")} }, // 代码校验
			{ test: /\.vue$/, loader: "vue-loader", options: { hotReload: true } },
			{ test: /\.js?$/, loader: "babel-loader" },
			{ test: /\.ts$/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] }},
			{ test: /\.css$/, use:["vue-style-loader", "css-loader", "postcss-loader"] },
			{ test: /\.less$/, use:["vue-style-loader", "css-loader", "postcss-loader", "less-loader"] },
			{ test: /\.(png|jpg|gif)$/, use: ["file-loader"]}
		]

	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			inject: true,
			template:  "index.html" //path.resolve(__dirname, "index.html")
		}),
		new VueLoaderPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname,"dist"),
		port: 8800,
		open: true,
		proxy: {
			"/api/": {
				target: "http://localhost:3500",
				secure: false
			}
		}
	}
};
