//nodeJs 代码实现文件夹及所有文件名

const fs = require('fs')
const path = require('path')
const readDir = (entry) =>{
    const dirInfo = fs.readdirSync(entry)

    dirInfo.forEach(item=>{
        const location = path.join(entry,item);//item 路径
        const info = fs.statSync(location) //文件（文件夹）信息
        
        if(info.isDirectory()){//true:文件夹，false:文件//
            console.log(`dir:${location}`)
            readDir(location)//如果是文件夹，递归寻找文件
           
        }else{
            console.log(`file:${location}`) // 打印出文件路径
        }
    })
    //console.log(dirInfo)
    //console.log(__dirname)
}

readDir(__dirname)