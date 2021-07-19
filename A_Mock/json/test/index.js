
const fs = require('fs')

//const getUser = require('./data/getUser.json')


const dirname = __dirname //当前路径
const files = fs.readdirSync(`${__dirname}/data`)//当前路径下所有文件名

let RouterData=[]

for(let i=0;i<files.length;i++){//遍历当前文件，读取每个文件内容
    const file = files[i]

    let fileArr=file.split('.')
    let method= fileArr[0]
    let path = `/${fileArr[1].replace(/\-/gi,'/')}`

    RouterData.push({
        method,
        path,
        data:require(`./data/${file}`)
    })


}
// console.log(RouterData)

module.exports = RouterData