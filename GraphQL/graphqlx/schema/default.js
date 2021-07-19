const {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLInputObjectType,
} = require('graphql');

// id对应的详情
let idArr = {
    1:{
        name:'我是id1',
        age:'19'
    },
    2:{
        name:'我是id2',
        age:'24'
    }
}

// 定义id的类
let GID= new GraphQLObjectType({
    name: 'gid',
    fields: {
        name: { type: GraphQLString },
        age: { type: GraphQLString },
    }
})

// 参数类型 不太对
let cs = new GraphQLInputObjectType({
    name:'iddecanshu',
    fields: {
        id: { type: GraphQLString },
    }
})

//定义导航Schema类型
var GraphQLNav = new GraphQLObjectType({
    name: 'nav',
    fields: {
        cc:{ // 传参
            type:GraphQLString,
            // args:new GraphQLNonNull(cs), // 1; 这种是错的
            args:{
                data: {
                    type:new GraphQLNonNull(cs), // 这种可以用data为载体了
                }
            },
            // args:{ // 3：这种最好用了。。。
            //   id:{
            //     type:GraphQLString
            //   }
            // },
            resolve(parent,args){
                return '我传的是' + args.data.id
            }
        },
        // greeting(name: String):String
        title: { type: GraphQLString },
        url: { type: GraphQLString },
        id: {
            // type:GraphQLList(GID), // 这里很容易忽略
            type:GraphQLNonNull(GID), // 反复查找也没有专门obj的 这里用非空代替
            async resolve(parent,args){
                // console.log('wwwwwwwww', idArr[parent.id])
                // 这个bug我tm。。。。。
                // 需要是数组形式。。。。不然报错
                // "Expected Iterable, but did not find one for field \"nav.id\".",
                // return [idArr[parent.id]];

                // 2: 更改类型后就对了
                return idArr[parent.id] || {}
            }
        },
    }
})

//定义根
var QueryRoot = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        navList: {
            type: GraphQLList(GraphQLNav),
            async resolve(parent, args) {
                var navList = [
                    { title: 'title1', url: 'url1', id:'1' },
                    { title: 'title2', url: 'url2', id:'2' }
                ]
                return navList;
            }
        }
    }
})

//增加数据
const MutationRoot = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNav: {
            type: GraphQLNav,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parent, args) {
                return {
                    msg: '插入成功'
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: QueryRoot,
    mutation: MutationRoot
});