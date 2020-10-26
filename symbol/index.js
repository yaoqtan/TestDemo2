//Symbol


// let japang = Symbol();
//
// let obj={
//     [japang]:'jispang'
// }
// console.log(obj[japang]);
//
// obj[japang]='web';
// console.log(obj[japang])



let obj={name:'jspang',skill:'web'};
let age = Symbol();
obj[age]=18

console.log(obj)

for(let item in obj){
    console.log(obj[item])
}

console.log(obj[age])