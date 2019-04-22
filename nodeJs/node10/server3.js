const express = require('express');
const bodyParser = require('body-parser');


var server = express();
//链式操作
server.use('/',function(req,res,next){
    console.log('a');
    next();
});
server.use('/',function(req,res,next){
    console.log('b');
});


server.listen(8080);