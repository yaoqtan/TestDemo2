const {GraphQLServer} = require('graphql-yoga');
// 类型定义 增删改查
const typeDefs=`
    type Query{
        hello:String!  #一定返回字符串
        name:String
        id:ID
    }
`
const resolvers = {
    Query:{
        hello(){
            return '我是cc主人'
        },
        name(){
            return '鲁鲁'
        },
        id(){
            return 9
        },
    }
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(()=>{
    console.log('启动成功，默认4000')
})

{
    hello,
    name,
    id
}