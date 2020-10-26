var http = require('http');
var fs = require('fs')
var url = require('url');
var path = require('path')
var mine = require('./mine').type;

http.createServer((req,res)=>{
    if(req.url!='/favicon.ico'){
        var pathname=url.parse(req.url).pathname;
        var realpath=path.join('index',pathname);
        //返回path路径文件扩展名，如果path以 ‘.' 为结尾，将返回 ‘.'，如果无扩展名 又 不以'.'结尾，将返回空值。
        var ext=path.extname(realpath)
        ext=ext?ext.slice(1):'unknow';
//		console.log(realpath)
//		console.log(pathname)
//		console.log(ext)
        //测试某个路径下的文件是否存在。
        fs.exists(realpath,(data)=>{
            if(!data){
                res.writeHead(404,{'content-type':'text/plain;charset=utf-8'})
                res.write('页面丢了')
                res.end()
            }else{
                var content=mine[ext]||'unknow';
                fs.readFile(realpath,(err,data)=>{
                    res.writeHead(200,{'content-type':content});
                    res.write(data);
                    res.end()
                })
            }
        })
    }
}).listen(8091)

// ————————————————
// 版权声明：本文为CSDN博主「么么哒呀」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_45551411/article/details/102552193