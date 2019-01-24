/*
module.exports = {
    entry:{
        "home":'./src/js/home.js',
        "signin":'./src/js/signin.js',
        "signup":'./src/js/signup.js',
    },
    output:{
        path:__dirname + '/src/bundle',
        filename:'js/[name].bundle.js'
    }
};*/

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new extractTextPlugin('css/[name]-[chunkhash].bundle.css');
const extractLESS = new extractTextPlugin('css/[name]-[chunkhash].bundle.css');
const cleanPlugin = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const getEntry = {
    entry:function(dirPath,option){
        const fileArr = fs.readdirSync(dirPath);
        const files = fileArr.filter(function(file){
            return option.test(file);
        });

        const entries = {};
        let dirname;
        let basename;
        let extname;
        for(var i = 0;i<files.length;i++){
            dirname = path.dirname(files[i]);
            extname = path.extname(files[i]);
            basename = path.basename(files[i],extname);
            entries[basename] = dirPath + basename +extname;
        }
        return entries;
    }
};
module.exports={
    entry:getEntry.entry('./src/js/',/\^*.js$/),
    output:{
        path:__dirname + '/src/bundle',
        filename:'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader:['style-loader','css-loader','less-loader']
            }
        ]
    },
    devtool:"eval-source-map",
    devServer:{
        contentBase:"./",
        historyApiFallback:true,
        inline:true,
        port:8099
    }

};

