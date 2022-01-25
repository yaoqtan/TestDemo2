import axios from 'axios'

// service 循环遍历输出不同的请求方法
let instance = axios.create({
    baseURL:'https://ssc-dev.mideazy.com/',
})
instance.defaults.headers.common['Authorization'] = `Bearer xxxx`;
instance.defaults.headers.common['X-Access-Token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDMwMjI5NDgsImFjY291bnQiOiIzMDcwMDBfbGlhbmdqdzY2In0.vyyWj9qhoNZG93sSm67kIxc-Zxls_NI0k8dH3qvFM5Y';
//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 拦截器的添加
// 请求拦截器
instance.interceptors.request.use(config=>{
    // 发起请求前做些什么
    console.log(config,'config')
    console.log('loading start')
    //自定义参数
    const commonObj = config.commonObj || {}
    if(commonObj.hidePopup){
        console.log('hidePopup')
    }
    return config
},(err)=>{
    console.log(err,'err')
    // 请求错误
});
// 响应拦截器
instance.interceptors.response.use(res=>{
    // 请求成功
    //Toast.clear()
    
    console.log(res,'res')
    console.log('loading-end1')
    const data = res.data || {}
    if(data.code===200){
        return Promise.resolve(data)
    }else{
        return Promise.reject(data)
    }

},(error)=>{
    console.log(error,'error')
    let {response} = error;
    if(!response){
        response={
            data:{
                message:'Network Error'
            }
        }
    }else{
        response={
            ...response,
            message:response.statusText
        }
    }
    console.log('loading-end2')
    return Promise.reject(response)
});

export default instance