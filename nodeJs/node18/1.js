const mysql = require('mysql');

//1.链接
//createConnection(哪台服务器, 用户名, 密码, 库)

var db=mysql.createPool({host: 'localhost', user: 'root', password: 'qwe123..', database: '20190328'});

//2.查询
//query(干啥, 回调)
console.log(mysql)

db.query("SELECT * FROM `user_table`;", (err, data)=>{
    if(err){
        console.log('出错了',err);
    }
    else{
        console.log('成功了');
    }

    console.log(JSON.stringify(data));
});



