//十. '更鸡肋的'MutationType特殊类型

const {GraphQLServer} =  require('graphql-yoga');

// 非常鸡肋, 这种事做不做, 该不该你做, 心里没点数
const typeDefs = `
  type Query{
    hello: MutationType
  }

  enum MutationType{
    aaaa
    bbbb
    cccc
  }
`
const resolvers = {
    Query:{
        hello(){
            // 只能返回菜单里面的内容, 这样可以保证不出格... p用
            return 'bbbb'
        },
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('启动成功, 默认是4000')
})