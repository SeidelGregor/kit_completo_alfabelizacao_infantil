const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/kit_completo_alfabelizacao_infantil/',
    clean: true
  },
  devServer: {
    static: './dist',
    open: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,    
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html',
        inject: 'body'
      }
    )
  ],
  mode: 'development'
};
