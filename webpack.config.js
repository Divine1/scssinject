const path = require('path');

var publicpath = "/static/images";
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options :{
                    data:"$publicpath : "+publicpath+";$red : red;$blue:blue;"
                }
            }]
        }]
    }
};