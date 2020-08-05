const http = require("http");
const https = require("https");
const fs = require("fs");
const Koa = require("koa");
const app = new Koa();

async function route(url) {
    let page = '404.html'
    switch (url){
        case '/':
            page='ad.html';
            break;
        case '/ad':
            page='ad.html';
            break;
        case '/todo':
            page='ad.html';
            break;
        case '/404':
            page= 'ad.html'
        default:
            break
    }

    let html = await render(page)
    return html

}
function render(page) {
    return new Promise((resolve,reject)=>{
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl,"binary",(err,data)=>{
            if(err){
                reject(err);
            }else {
                resolve(data)
            }
        })
    })
}

app.use(async(ctx)=>{
    let url = ctx.request.url;
    let html=await route(url);
    ctx.body=html;
});



http.createServer(app.callback()).listen(3000);
const options = {
    key: fs.readFileSync("./server.key", "utf8"),
    cert: fs.readFileSync("./server.cert", "utf8")
};
https.createServer(options, app.callback()).listen(443);