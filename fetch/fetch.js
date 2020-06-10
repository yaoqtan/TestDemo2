//前置拼接url
let api = '****';

//处理promise和fetch的兼容性以及引入
require('es6-promise').polyfill();
require('isomorphic-fetch');

//处理get请求，传入参数对象拼接
let formatUrl = obj => {
    let params = Object.values(obj).reduce((a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`, '?');
    return params.substring(0, params.length - 1);
};

let Fetch = (url, option = {}) => {
    option.headers = option.headers || {};
    option.headers['pl'] = 'admin';

    option.headers['token'] = `${window.localStorage.getItem('token')}`;
    const m = (option.method || '').toLocaleLowerCase();
    // get query format
    if (m == 'get') {
        if (option.query) {
            url = url + formatUrl(option.query);
        }
    }
    //对非get类请求头和请求体做处理
    if (m === 'post' || m === 'put' || m === 'delete') {
        option.headers['Content-Type'] = option.headers['Content-Type'] || 'application/json';
        option.body = JSON.stringify(option.body);
        // option.body = qs.stringify(option.body) //根据后台要求，如果有时候是java请求会用qs转
    }
    return new Promise((resolve, reject) => {
        fetch(api + url, option)
            .then(response => {
                status = response.status;
                if (response.status >= 500) {
                    Fetch.systemError && Fetch.systemError('系统错误');
                }
                return response;
            })
            .then(parseJSON)
            .then(response => {
                response.status = status;
                if (response.status >= 401) {
                    if (response.state == 8888) {
                        //登陆超时返回状态吗

                        Fetch.overTime && Fetch.overTime(response);
                    }
                    if (response.state == 6666) {
                        //没有权限返回状态码
                    }
                }
                resolve(response);
            })
            .catch(error => {
                console.log('err', error);
                Fetch.otherError && Fetch.otherError(error.message);
            });
    });
};

//response 转化
function parseJSON(response) {
    return response.json();
}

export default Fetch;