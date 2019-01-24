const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './app.bundle.js'
    },
    devServer: {
        port: 9000,
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        },
        hash: true,
        title:"HI"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    }
};