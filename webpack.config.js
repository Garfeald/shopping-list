const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    module: {
        rules: [
            // TypeScript
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            // SCSS
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'BuyList',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),

        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}