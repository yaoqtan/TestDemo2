const fs = require('fs');
//fs.readFile
//fs.writeFile
//fs.readFile(文件名，)
fs.readFile('aaa.txt',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
});
