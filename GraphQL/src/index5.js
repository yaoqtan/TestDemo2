//七. 关联关系
const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query{
        lulu(dogId:Int):User!
    }
    type User{
        name:String
        age:Int
        chongwu:Chongwu!
    }
    type Chongwu{
        name:String!
        age:Int
    }
`
// 自定义的数据
const chongwuArr={
    1:{
        name:'cc',
        age:8
    },
    2: {
        name: '芒果',
        age:6
    },
    9: {
        name: '芒果主人',
        age:24
    }
}

const resolvers={
    Query:{
        lulu(parent,args,ctx,info){
            return {
                name:'鲁路修',
                age:24,
                chongwu:args.dogId
            }
        },
    },
    // 注意, 它是与Query并列的
    User:{
        // 1: parent指的就是 user, 通过他来得到具体的参数
        chongwu(parent,args,ctx,info){
            console.log('=======', parent.chongwu ) // 9
            return chongwuArr[parent.chongwu]
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


//{
//   lulu(dogId:1){
//     name,
//     age,
//     chongwu{
//       name,
//       age
//     }
//   }
// }