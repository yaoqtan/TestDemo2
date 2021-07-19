const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const getUser = require('./data/getUser.json')

const baseInfoList = require('./data/baseInfoList.json')
const baseDetail = require('./data/baseDetail.json')

const categoryList = require('./data/categoryList.json')
const findPlatFormTypeForEnum = require('./data/findPlatFormTypeForEnum.json')
const importAndExportList = require('./data/importAndExportList.json')

const jobGetBusDataDic = require('./data/jobGetBusDataDic.json')
const jobList = require('./data/jobList.json')
const regionList = require('./data/regionList.json')
const upPlatformList = require('./data/upPlatformList.json')
const successData = require('./data/success.json')

const RoleList = require('./data/roleList.json')
const roleAdminTypeGget = require('./data/roleAdminTypeGget.json')
//const roleMenuList = require('./data/roleMenuList.json ')
//const roleMenuAdd = require('./data/roleMenuAdd.json')
//const roleMenuDelete = require('./data/roleMenuDelete.json')

// const dirname = __dirname //当前路径
// const files = fs.readdirSync(`${__dirname}/data`)//当前路径下所有文件名
// const PromiseAllArr=[]
// for(let i=0;i<files.length;i++){//遍历当前文件，读取每个文件内容
//     const file = files[i]
//     PromiseAllArr.push( new Promise((resolve,reject)=>{
//         fs.readFile(`${dirname}/data/${file}`, "utf-8", async (error, data)=> {
//             if (error) {
//                 //console.log("读取文件失败,内容是" + error.message)
//                 reject(error)
//             };
//             resolve({
//                 data,
//                 method:data.method,
//                 path:data.path,
//             })
//         });
//     }))
// }
// return Promise.all(PromiseAllArr).then((res)=>{
//
// })






const RouterData = [
    {
        "method": "post",
        "path": "/get_user",
        "data":getUser
    },
    {
        "method": "get",
        "path": "/upPlatform/list",
        "data":upPlatformList
    },
    {
        "method": "get",
        "path": "/upPlatform/findPlatFormTypeForEnum",
        "data":findPlatFormTypeForEnum
    },
    {
        "method": "get",
        "path": "/base/info/list",
        "data":baseInfoList
    },
    {
        "method": "get",
        "path": "/base/business/list",
        "data":baseInfoList
    },
    {
        "method": "get",
        "path": "/base/detail",
        "data":baseDetail
    },
    {
        "method": "post",
        "path": "/base/updateBusiness",
        "data":successData
    },
    {
        "method": "post",
        "path": "/base/updateStatus",
        "data":successData
    },
    {
        "method": "get",
        "path": "/job/getBusDataDic",
        "data":jobGetBusDataDic
    },
    {
        "method": "get",
        "path": "/job/list",
        "data":jobList
    },
    {
        "method": "get",
        "path": "/job/save",
        "data":successData
    },
    {
        "method": "get",
        "path": "/job/update",
        "data":successData
    },
    {
        "method": "get",
        "path": "/job/del",
        "data":successData
    },
    {
        "method": "get",
        "path": "/category/list",
        "data":categoryList
    },
    {
        "method": "get",
        "path": "/category/updateStatus",
        "data":successData
    },
    {
        "method": "get",
        "path": "/importAndExport/list",
        "data":importAndExportList
    },
    {
        "method": "post",
        "path": "/importAndExport/importExcel",
        "data":importAndExportList
    },
    {
        "method": "get",
        "path": "/region/list",
        "data":regionList
    }
]


module.exports = RouterData