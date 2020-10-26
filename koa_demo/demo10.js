
const Koa =require('koa');

const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        ctx.cookies.set('MyName','J1SPang',{
            domain:'localhost',
            maxAge:1000*60*60,
            expires:new Date('2020-12-31'),
            httpOnly:false,
            overwrite:false
        });
    }else{
        ctx.body=ctx.cookies.get('MyName')
    }
})


app.listen(3000,()=>{
    console.log('starting at port 3000');
})