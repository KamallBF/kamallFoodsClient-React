const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        devtool: isDevelopment && "cheap-module-source-map",
        entry: "./src/index.js",
        mode: "production",
        output: {
            path: path.resolve(__dirname, "./build"),
            filename: "assets/js/[name].[contenthash:8].js",
            publicPath: "/"
        },
        devServer: {
            contentBase: path.join(__dirname, 'output'),
            compress: true,
            port: 3000,
            historyApiFallback: true,
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/, //JS Loader
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development",
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                /*'@babel/preset-es2015',
                                '@babel/preset-stage-2',*/
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/, // CSS Loader
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        {loader: 'css-loader', options: {url: false}}
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: /\.global.scss$/,
                    use: [
                        {loader: "style-loader"},
                        //{ loader: "@teamsupercell/typings-for-css-modules-loader", options: { modules: true, namedExport: true, camelCase: true, localIdentName: "[name]_[local]_[hash:base64]" }},
                        {
                            loader: "postcss-loader", options: {
                                plugins: function () {
                                    return [require("autoprefixer")];
                                }
                            }
                        },
                        {loader: "sass-loader"}
                    ]
                },

                {
                    test: /\.scss$/,
                    include: /\.global.scss$/,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"},
                        {
                            loader: "postcss-loader", options: {
                                plugins: function () {
                                    return [require("autoprefixer")];
                                }
                            }
                        },
                        {loader: "sass-loader"}
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i, //Image Loader
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"]
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".css", ".scss"]
        },
        plugins: [
            isProduction &&
            new MiniCssExtractPlugin({
                filename: "assets/scss/[name].[contenthash:8].scss",
                chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
            }) &&
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                inject: true
            })
        ].filter(Boolean),
        optimization: {
            usedExports: true
        }
    };
};
