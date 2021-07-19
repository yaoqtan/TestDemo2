原文链接：https://segmentfault.com/a/1190000023017476

启动 : nodemon 文件名

例如：nodemon index.js


GraphQL 中内置有一些标量类型 String、 Int、 Float、 Boolean、 ID，这几种都叫scalar类型, 意思是单个类型

工程化 koa2 
 npm install -g koa-generator 
 
 koa/koa2 graphqlx 
 
 {
    navList {
         cc(data:{id:"2"})
         title
         url
         id {
           name
           age
         }
    }
}

mutation{
  addNav(title:"title2"){
    title,
    url,
    id{
      name,
      age
    }
  }
}
