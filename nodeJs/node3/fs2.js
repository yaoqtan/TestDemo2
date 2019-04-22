const fs = require('fs');
//fs.readFile
//fs.writeFile
//fs.readFile(文件名，)

let data='hehehehe'
fs.writeFile('aaa.txt',data,'utf-8',function (err) {
    console.log(err)
});