console.log(1)

function demo(value) {
    if(value){
        return Promise.resolve('yao')
    }else{
       return Promise.reject('tan')
    }
}

demo()
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

