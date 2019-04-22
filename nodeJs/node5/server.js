const http=require('http');
const querystring=require('querystring');

var server = http.createServer(function (req,res) {
    var str='';
    var i=0;
    //data--有一段数据到达（多次）
    req.on('data',function(data){
        console.log(`第${i++}次`)
        str+=data;
    });
    //end--数据全部到达（一次）
    req.on('end',function(){
        var POST=querystring.parse(str);
        console.log(POST);
    });
    res.end();
});

server.listen(8080);