const express = require('express');
const expressStatic = require('express-static');

var server=express();

/*server.get('/a.html',function () {


});*/
// 用户数据
var users={
    'blue':123,
    'yao':'24',
    'lisi':'test'
};

server.get('/login', function (req, res){
    console.log(req);
    var user=req.query['user'];
    var pass=req.query['pass'];

    if(users[user]==null){
        res.send({ok: false, msg: '此用户不存在'});
    }else{
        if(users[user]!=pass){
            res.send({ok: false, msg: '密码错了'});
        }else{
            res.send({ok: true, msg: '成功'});
        }
    }
});


server.use(expressStatic('./www'));




server.listen(8080);