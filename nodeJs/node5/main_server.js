const http = require('http');
const fs = require('fs');
const querystring=require('querystring');
const urlLib=require('url');

var server=http.createServer(function(req,res){
    //GET
    var obj=urlLib.parse(req.url,true);

    var url=obj.pathname;

    var GET=obj.query;

    //POST
    var str='';
    //data--有一段数据到达（多次）
    req.on('data',function(data){
        str+=data;
    });

    //end--数据全部到达（一次）
    req.on('end',function(){
        var POST=querystring.parse(str);

        /*
          url——要什么
          GET——get数据
          POST——post数据
        */
        console.log(url,GET,POST);


        //文件请求
        var filename='./www'+url;
        fs.readFile(filename,function(err,data){
            if(err){
                res.write('404');
            }else{
                res.write(data)
            }
        });

        res.end();

    });

});

server.listen(8080);