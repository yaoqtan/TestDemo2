
const express=require('express');
const static=require('express-static');

const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');

const multer=require('multer');
const fs = require('fs');
const pathLib=require('path');


var objMulter = multer({dest:'./www/upload/'});

var server = express();


server.use(objMulter.any());
//server.use(bodyParser.urlencoded({extended: false}));

server.post('/',function(req,res){


    console.log(req.files);
    console.log(req.body);

    // 1.获取原始文件扩展名
    // 2.重命名临时文件
    var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;

    console.log(newName);

    fs.rename(req.files[0].path, newName, function (err){
        if(err)
            res.send('上传失败');
        else
            res.send('成功');
    });

});

server.listen(8080);


