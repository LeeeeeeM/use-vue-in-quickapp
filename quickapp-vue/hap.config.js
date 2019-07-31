const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, 
    {
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    }, {
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
        options: {
          hotReload: false // 关闭热重载
        }
      }]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css.json',
    })
  ]
}
