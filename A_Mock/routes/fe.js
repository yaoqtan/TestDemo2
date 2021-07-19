const router = require('koa-router')()

//  const getUser = require('./../json/fe/getUser.json')
//  const baseInfoList = require('./../json/fe/baseInfoList.json')
//  const baseDetail = require('./../json/fe/baseDetail.json')
//
// const categoryList = require('./../json/fe/categoryList.json')
// const findPlatFormTypeForEnum = require('./../json/fe/findPlatFormTypeForEnum.json')
// const importAndExportList = require('./../json/fe/importAndExportList.json')
//
// const jobGetBusDataDic = require('./../json/fe/jobGetBusDataDic.json')
// const jobList = require('./../json/fe/jobList.json')
// const regionList = require('./../json/fe/regionList.json')
//
// const upPlatformList = require('./../json/fe/upPlatformList.json')

const RouterData = require('./../json/fe/index.js')



const onRouter= function (obj) {
    const method=obj.method
    const path = obj.path
    const data = obj.data
    router[method](path, async (ctx, next) => {
        ctx.body = data
    })
}



router.prefix('/dc')

for(let i=0;i<RouterData.length;i++){
    onRouter(RouterData[i])
}

//
// router['post']('/get_user', async (ctx, next) => {
//     ctx.body = require('./../json/fe/getUser.json')
// })
// router.get('/base/info/list', function (ctx, next) {
//     ctx.body = baseInfoList
// })
//
// router.get('/upPlatform/list', function (ctx, next) {
//     ctx.body = upPlatformList
// })
//
// router.get('/category/list', async (ctx, next) => {
//     ctx.body = categoryList
// })
// router.get('/region/list', function (ctx, next) {
//     ctx.body = regionList
// })
//
// router.get('/importAndExport/list', function (ctx, next) {
//     ctx.body = importAndExportList
// })
//
//
//
// router.get('/base/detail', function (ctx, next) {
//     ctx.body = baseDetail
// })
//
// router.post('/findPlatFormTypeForEnum', async (ctx, next) => {
//     ctx.body = findPlatFormTypeForEnum
// })
// router.get('/job/list', function (ctx, next) {
//     ctx.body = jobList
// })
//
// router.get('/job/getBusDataDic', function (ctx, next) {
//     ctx.body = jobGetBusDataDic
// })



module.exports = router