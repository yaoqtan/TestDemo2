"use strict";
// function searchXiaojiejie(age:number):string{
//     return `年龄${age}`
// }
// var age:number=28;
// var result:string = searchXiaojiejie(age)
// console.log(result)
//有可选参数的函数
// function searchXiaojiejie(age:number,statrue?:string):string{
//     let yy:string=`age:${age}`
//     if(statrue != undefined){
//         yy = `${yy},${statrue}`
//     }
//     return  yy 
// }
// var age:number=22;
// var statrue:string='17.8'
// var result:string = searchXiaojiejie(age,statrue)
// console.log(result)
//有默认参数的函数
/*
*不传参数，取值默认参数
*有传参数，取值实参
*
*
*/
// function searchXiaojiejie(age:number=18,statrue:string='17.8'):string{
//     let yy:string=`age:${age}`
//     if(statrue != undefined){
//         yy = `${yy},${statrue}`
//     }
//     return  yy 
// }
// var age:number=22;
// var statrue:string='16.8'
// var result:string = searchXiaojiejie()
// console.log(result)
// 有剩余参数的函数
function searchXiaojiejie() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = "\u627E\u5230";
    yy = yy + xuqiu.join(',');
    //    for(let i=0;i<xuqiu.length;i++){
    //        yy=yy+xuqiu[i]
    //    } 
    return yy;
}
var age = 22;
var statrue = '16.8';
var result = searchXiaojiejie('29', statrue);
console.log(result);
