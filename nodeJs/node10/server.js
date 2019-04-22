const express = require('express');


var server = express();

server.use('/',function(req,res){
    console.log(req.query);
});

server.listen(8080);