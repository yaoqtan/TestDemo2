//import "isomorphic-fetch" ;
/*console.log(window)
fetch('http://127.0.0.1:8080/Test.json').then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
}).catch(function(e) {
    console.log("Oops, error");
});*/

fetch('http://127.0.0.1:8080/Test.json',{
    method:"POST",
    headers : { // 请求头（可以是Headers对象，也可是JSON对象）
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body:{
        "name":"gt",
        "age":"1000"
    }
}).then(
    (response) => response.json()
        .then((data) => console.log(data))
        .catch((e) => console.log('Oops,error'))
);
