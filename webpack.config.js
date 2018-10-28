const HtmlWebPackPLugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlPluginConfig = new HtmlWebPackPLugin({
   template: './src/index.html',
   filename: 'index.html'
})

module.exports = {
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.(scss|css)$/,
            use: [
               'css-hot-loader',
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ]
         }
      ]
   },
   plugins: [
      htmlPluginConfig,
      new MiniCssExtractPlugin({
         filename: 'style.[name].css',
         chunkFilename: "[id].css"
      })
   ]
};