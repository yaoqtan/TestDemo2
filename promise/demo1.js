console.log('start')

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('100');
        //reject('200')
    },1000)
}).then((res)=>{
    console.log(res)
    //return res+1
},(error)=>{
    console.log(error)
}).then((res)=>{
    console.log(res)
})