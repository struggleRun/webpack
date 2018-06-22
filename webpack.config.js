const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
      rules: [
      {
        test: /\.less|css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/[name].[chunkhash].css'
      })
    ],
};

module.exports = merge(commonConfig, publicConfig);