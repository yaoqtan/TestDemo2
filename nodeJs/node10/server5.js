const express = require('express');
const bodyParser1 = require('./lib/my-body-parser');


var server = express();
server.listen(8080);



server.use(bodyParser1.aaa())


server.use('/',function(req,res){
    console.log(req.body);
});

