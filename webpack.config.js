const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },


            {
                test: /\.s(a|c)ss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }


        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.bundle.css',
            chunkFilename: '[id].[hash].css'}),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: "src/index.html"
        })
    ],
    /*watch: true,
    watchOptions: {
        aggregateTimeout: 600
    },*/

};