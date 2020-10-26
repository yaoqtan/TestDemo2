var path = require('path');
var webpack = require('webpack');

module.exports={
  mode:'development',
  context:path.resolve(__dirname,'./src'),
  entry:{
    app:'./app.js'
  },
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'_bundle.js'
  },
  plugins:[
    //new webpack.optimize.UglifyJsPlugin()//文件压缩
  ]
}