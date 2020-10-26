let target=function(){
    return 'Im JSPang'
};
let handler={
    apply(target,ctx,args){
        console.log('do apply')
        return Reflect.apply(...arguments)
    }
};

let pro = new Proxy(target,handler)

console.log(pro())