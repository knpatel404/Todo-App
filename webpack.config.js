const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader']
            },
            {
                test: /\.html/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  'file-loader',
                ],
              },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                  },
                  {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                  },
                  {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                  },
                ],
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
          }),
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })
    ]
    
};