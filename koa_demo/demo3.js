const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    //当请求时GET请求时，显示表单让用户填写
    if(ctx.url==='/' && ctx.method === 'GET'){
        let html =`
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body =html;
        //当请求时POST请求时
    }else if(ctx.url==='/' && ctx.method === 'POST'){
        //ctx.body='接收到请求';
        let postData= await parsePostData(ctx)
        ctx.body=parseQueryStr(postData)
    }else{
        //其它请求显示404页面
        ctx.body='<h1>404!</h1>';
    }
})
function parsePostData(ctx) {
    return new Promise((resolve,reject)=>{
        try {
            let postdata ="";
            ctx.req.addListener('data',(data)=>{
                postdata+=data;
            })
            ctx.req.on("end",function () {
                resolve(postdata)
            })
        }catch (err){
            reject(err)
        }
    })
}
function parseQueryStr(queryStr){
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}



app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})
