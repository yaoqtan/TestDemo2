koa A_Mock

npm install

npm run start

新建一个项目假数据：
    json 新建文件,
    routes新建文件，
    app.js/引入文件
    
普通 创建一个 测试假数据模型：参考 fe.

栗子：

高级创建一个假数据模型，参考 test
    1、创建一个测试json : 直接创建一个json文件规则 参考 
        json/test/index.js ,
        json/test/data/get.upPlatFormList-list.json

        1、json名 命名规则：
            1、method.path.json:  xxx.xxx-xx.json  xxx.xxx.json
            如果path 中有 -,则表示 文件 ， 转化为 /,

    2、 创建 routes ，test.js  router.prefix('/test') 前缀名，

    3、app.js 引入文件
        const test = require('./routes/test')
        app.use(test.routes(), test.allowedMethods())

项目跑起来路径拼接: http://localhost:8091/test/upPlatFormList/list  （get.upPlatFormList-list.json）



