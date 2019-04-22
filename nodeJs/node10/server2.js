const express = require('express');
const bodyParser = require('body-parser');


var server = express();

server.use(bodyParser.urlencoded({
    extended:false,
    limit: 2 * 1024 * 1024
}));



server.use('/',function(req,res){
    console.log(req.body);
});

//req.query GET
//req.body POST


server.listen(8080);