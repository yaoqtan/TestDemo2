const http = require('http');

var server = http.createServer(function(req,res){

    res.write('hello');
    console.log('有人来了');
    res.end();

});
server.listen(8080);