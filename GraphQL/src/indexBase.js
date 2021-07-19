var {graphql ,buildSchema } = require('graphql');

// 1: 定义模板/映射,  有用mongoose操作数据库经验的同学应该很好理解这里
var schema = buildSchema(`
    type Query {
        hello:String
        name:String
    }
`);
// 2: 数据源,可以是热热乎乎从mongodb里面取出来的数据
var root = {
    hello:()=>'Hello!',
    name:'金毛cc',
    age:5
};
// 3: 描述语句, 我要取什么样的数据, 我想要hello与name 两个字段的数据, 其他的不要给我
const query = '{hello,name}'

// 4: 把准备好的食材放入锅内, 模型->描述->总体的返回值
graphql(schema,query,root).then(res=>{
    console.log(JSON.stringify(res))
    //{"data":{"hello":"Hello!","name":"金毛cc"}}
})
