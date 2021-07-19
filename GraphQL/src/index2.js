// 多层对象定义
const { GraphQLServer } = require('graphql-yoga');
const typeDefs = `
    type Query{
        me:User! # 这里把me这个key对应的value定义为User类型, 并且必须有值
    }
    type User { # 首字母必须大写
        name:String,
        id:ID
    }
`
const resolvers = {
    Query:{
        me(){
            return{
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
//    me{
//     name,
//         id
//    }
// }