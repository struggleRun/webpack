const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    /*入口*/
    entry: {
      app: [
          'babel-polyfill',
          'react-hot-loader/patch',
          path.join(__dirname, 'src/index.js')
      ],
    },
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        filename: '[name].[hash].js',
    },
    module: {
      rules: [
      {
        test: /\.less|css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }]
    },
    devServer: {
      port: 8080,
      contentBase: path.join(__dirname, './dist'),
      historyApiFallback: true,
      host: '0.0.0.0'
    }
};

module.exports = merge({
  customizeArray(a, b, key) {
      /*entry.app不合并，全替换*/
      if (key === 'entry.app') {
          return b;
      }
      return undefined;
  }
})(commonConfig, devConfig);