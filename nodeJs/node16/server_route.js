const express = require('express');

var server = express();

//目录1：/user/
var routerUser = express.Router();

routerUser.get('/1.html',function (req,res) {
    res.send('user1');
});

routerUser.get('/2.html',function (req,res) {
    res.send('user22222');
});
server.use('/user',routerUser);


var articleRouter=express.Router();

server.use('/article', articleRouter);

articleRouter.get('/10001.html', function (req, res){   //http://xxxx.com/article/10001.html
    res.send('asdfasdfasdf');
});



server.listen(8080);