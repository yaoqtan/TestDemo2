//proxy 代理 ES6 增强 对象和函数（方法） 生命周期 预处理


let obj = {
    add:function(val){
        return val+100
    },
    name:'I am JSpang',
    age:19
};

let handler={//get set apply

    get: (target,key,property)=> {

        return target[key];
    },
    set:(target,key,value,receiver)=>{
        console.log(`seting ${key}=${value}`)
        return target[key]=value+1
    }
}

let pro = new Proxy(obj,handler);

console.log(pro.name)
pro.name='yao'

console.log(pro)
console.log(obj)

//console.log(obj.add(100))
//console.log(obj.name)