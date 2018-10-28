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
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
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
   resolve: {
      extensions: ['.js', '.jsx']
   },
   plugins: [
      htmlPluginConfig,
      new MiniCssExtractPlugin({
         filename: 'style.[name].css',
         chunkFilename: "[id].css"
      })
   ]
};