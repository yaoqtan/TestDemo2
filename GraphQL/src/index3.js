//五. 数组

const { GraphQLServer } = require('graphql-yoga');

const typeDefs= `
    type Query {
        #返回数组
        arr:[Int!]!
    }
`
const resolvers = {
    Query:{
        arr(){
            return [1,2,3,4]
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

/*
* { arr }
*
* */