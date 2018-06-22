const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom','react-dom']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'assets/[name].[chunkhash].js',
        chunkFilename: 'assets/[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
              //"url-loader?limit=10240&name=images/[hash].[ext]"
              "url-loader?limit=4192&name=images/[hash].[ext]"
          ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
    ],
    optimization: {
      splitChunks: {
        name: 'vendor'
      }
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
        }
    }
};

module.exports = commonConfig;