"use strict";
//函数声明法
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 2));
//函数表达式法 
var add2 = function (n1, n2) {
    return n1 + n2;
};
console.log(add2(3, 4));
//typescript 完全支持ES6 
//箭头函数
var add3 = function (n1, n2) { return n1 + n2; };
console.log(add3(4, 5));
