



let data={
    name:'yao'
}
export const test1 = (key)=>{
    if(key>10){
        return 10
    }else{
        return key
    }
}

export const test2 = (key)=>{
    if(key>100){
        return 100
    }else{
        return key
    }
}

export const test3 = (obj)=>{
    return {
        ...data,
        ...obj
    }
}
console.log(test3({age:3}))

