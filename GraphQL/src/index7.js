//九. input特殊类型

const { GraphQLServer } = require('graphql-yoga');
const typeDefs = `
    type Query{
        hello:String!
    }
     # 是操作而不是获取, 增删改:系列
     type Mutation{
         # 这个data随便叫的, 叫啥都行, 就是单独搞了个obj包裹起来而已, 不咋地
         createUser(data:CreateUserInput):CreateUser
     }
     
     type CreateUser{
        id:Int
        msg:String
     }
     # input 定义参数
     input CreateUserInput{
        # 里面的类型只能是基本类型
        name:String!
        age:Int!
     }
     
`
const resolvers = {
    Query:{
        hello(){
            return '我是cc的主人'
        }
    },
    // query并列
    Mutation:{
        createUser(parent,args,ctx,info){
            // **这里注意了, 这里就是data了, 而不是分撒开的了**
            const {data} = args
            return{
                msg: '创建成功',
                id: 999
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
// 	createUser(data:{name:"xxxxx",age:23}){
//     id,
//     msg
//   }
// }