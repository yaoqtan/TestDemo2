// 六. 传参(前端可以传参数,供给服务端函数的执行)这个思路很神奇吧.

const {GraphQLServer} = require('graphql-yoga');
const typeDefs=`
    type Query{
        greeting(name:String):String # 需要传参的地方, 必须在这里定义好
        me:User!
    }
    type User{ # 必须大写
        name:String
        id:ID
    }
`
const resolvers ={
    Query:{
        // 四个参数大有文章
        greeting(parent,args,ctx,info){
          return '默认值'+ args.name
        },
        me(){
            return {
                id:9,
                name:'lulu'
            }
        }
    }
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(()=>{
    console.log('启动成功, 默认是4000')
})

// {
//     greeting(name:"xxxxx")
//     me{
//        name
//        id
//      }
// }