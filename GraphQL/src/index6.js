//八. 不是获取, 是操作.

const { GraphQLServer } = require('graphql-yoga');

const typeDefs=`
    type Query{
        hello:String!
    }
    # 是操作而不是获取, 增删改:系列
    type Mutation{
        createUser(name:String!,age:Int!):CreateUser
        
        # 这里面可以继续书写create函数...
    }
    
    type CreateUser{
        id:Int
        msg:String
    }
`

const resolvers = {
    Query:{
        hello(){
            return '我是cc的主人'
        },
    },
    // query并列
    Mutation:{
        createUser(parent,args,ctx,info){
            const {name,age} = args;
            // 这里我们拿到了参数, 那么就可以去awit 创建用户
            return {
                msg:'创建成功',
                id:999
            }
        }
    }
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => {
    console.log('启动成功, 默认是4000')
})
// mutation{
// 	createUser(name:"xxxxx",age:23){
//     id,
//     msg
//   }
// }