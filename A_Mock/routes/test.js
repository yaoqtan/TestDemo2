const router = require('koa-router')()

const RouterData = require('./../json/test/index.js')


const onRouter= function (obj) {
    const method=obj.method
    const path = obj.path
    const data = obj.data
    router[method](path, async (ctx, next) => {
        ctx.body = data
    })
}

router.prefix('/test')
for(let i=0;i<RouterData.length;i++){
    onRouter(RouterData[i])
}

module.exports = router