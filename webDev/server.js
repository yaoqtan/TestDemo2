const express = require('express');
const body = require('body-parser');
const fs = require('fs');

express().all('*',function(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("consoleX-Powered-By",' 3.2.1');
        res.header("content-Type","application/json;charset=utf-8");
        next();
    }).use(body.urlencoded({extended:false}))//中间件
      .post('/signin',function(req,res){
        console.log(req.body);
        console.log('123');
        fs.readFile('./src/data/data.json','utf-8',function(err,data){
            if(!err){
                let jsonData=[];
                if(data !== ''){
                    jsonData=JSON.parse(data);
                }
                jsonData.push(req.body);
                fs.writeFile('./src/data/data.json',JSON.stringify(jsonData),function () {
                    res.send({
                        info:'成功',
                        data:jsonData
                    })
                })
            }
        })

    }).post('/signup',function(req,res){
        if(req.body.user && req.body.pwd){
            fs.readFile('./src/data/data.json','utf-8',function(err,data){
                if(!err){
                    let jsonData=[];
                    if(data !== ''){
                        jsonData=JSON.parse(data);
                    }
                    let result = false;
                    for( const item of jsonData){
                        if(item.user === req.body.user && item.pwd === req.body.pwd){
                            result === true;
                        }
                    }
                    if(result){
                        res.send({
                            info:"登陆成功",
                            data:jsonData
                        })
                    }else{
                        res.send({
                            info:"登陆失败",
                            data:jsonData
                        })
                    }
                }
            })
        }


    }).listen(8081,function () {
        console.log('.........server start localhost:8081')
    });