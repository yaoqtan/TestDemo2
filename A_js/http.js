import axios from 'axios'
import service from './contactApi'
import login from '@/store/modules/login'
import interceptedMessage from './messageText'

//import {Toast} from 'vant'

import { Loading,MessageBox } from 'element-ui';



// service 循环遍历输出不同的请求方法
let instance = axios.create({
    baseURL:'',
    /*headers:{'Authorization': `Bearer ${login.state.login.token}`}*/
    //timeout:100
})


const Http = {}; // 包裹请求方法的容器

// 请求格式/参数的统一
for(let key in service){
    let api = service[key]; // url method
    // async 作用：避免进入回调地狱
    Http[key] = async function(contact){
        let options ={
            path:'',
            params:{}, // 请求参数 get：url，put，post，patch（data），delete：url
            isFormData:false,// 标识是否是form-data请求
            config:{}, // 配置参数
            hidePopup:false,
            hasErrReload:false,
            query:{

            },
            ...contact,

        };
        let url = api.url;
        let queryUrl=''
        for(let qkey in options.query){
            queryUrl+=`${qkey}=${options.query[qkey]}&`
        }
        if(options.path) url = `${url}/${options.path}`;
        if(queryUrl) url = `${url}?${queryUrl.substring(0,queryUrl.length-1)}`;

        instance.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;
        instance.defaults.headers.common['X-Auth-Token'] = login.state.token;
        //instance.defaults.headers.common['hidePopup'] = options.hidePopup;
        let newParams = {}

        //  content-type是否是form-data的判断
        if(options.params && options.isFormData){
            newParams = new FormData()
            for(let i in options.params){
                newParams.append(i,options.params[i])
            }
        }else{
            newParams = options.params
        }
        let popupErrHandle=(errorMessage)=>{

            return MessageBox.alert(errorMessage, {
                showClose: false,
                callback:()=>{
                    if(options.hasErrReload){
                        location.reload();
                    }
                }
            });
        }
        let errHandle=(err)=>{
            if(!options.hidePopup){
                if(err.hasOwnProperty("isSuccess")) {
                   /* MessageBox.alert(err.errorMessage || 'Request failed', {
                        showClose: false
                    });*/
                    popupErrHandle(err.errorMessage || 'Network Error')
                    return Promise.reject(err)
                }else if(err.hasOwnProperty('data')){
                    const status = err.status || 0;
                    /*MessageBox.alert(interceptedMessage(status,err.data.errorMessage || err.data.message || 'Internal Server Error'),{
                        showClose:false
                    });*/
                    popupErrHandle(interceptedMessage(status,err.data.errorMessage || err.data.message || 'Network Error'))

                    return Promise.reject(err.data)
                }else {
                    /*MessageBox.alert(interceptedMessage(status,'Internal Server Error'),{
                        showClose:false
                    });*/
                    popupErrHandle(interceptedMessage(status,'Network Error'))
                    return Promise.reject('Network Error')
                }

            }

        }

        if(api.method === 'put'|| api.method === 'post'|| api.method === 'patch'){
            return instance[api.method](url,newParams,options.config).then((data)=>{
                console.log(data)
                return Promise.resolve(data)
            }).catch((err)=>{
                console.log(err)
                return errHandle(err)

            })
        }else if(api.method === 'delete'|| api.method === 'get'){
            options.config.params = newParams;
            return instance[api.method](url,options.config).then((data)=>{
                console.log(data)
                return Promise.resolve(data)
            }).catch((err)=>{
                console.log(err)
                return errHandle(err)
            })
        }
    }
}

// 拦截器的添加
// 请求拦截器
instance.interceptors.request.use(config=>{
    // 发起请求前做些什么
    console.log('request success')
    Loading.service({
        text: '読み込み中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
    });
    return config
},()=>{
    console.log('request fail')
    // 请求错误
    Loading.service({}).close()
});
// 响应拦截器
instance.interceptors.response.use(res=>{
    // 请求成功
    //Toast.clear()
    console.log('response success')
    Loading.service({}).close()
    const data = res.data
    if((data.hasOwnProperty("success") && !res.data.success)||(data.hasOwnProperty("isSuccess") && !res.data.isSuccess)){
        return Promise.reject(data)
    }else{
        return Promise.resolve(data)
    }



},(error)=>{
    console.log('response fail')
    let {response} = error;
    Loading.service({}).close();
    if(!response){
        response={
            data:{
                message:'Network Error'
            }
        }
    }
    return Promise.reject(response)
});




export default Http