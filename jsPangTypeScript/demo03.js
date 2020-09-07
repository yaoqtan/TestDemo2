"use strict";
var age = 28;
var stature = 178.5;
console.log(age); //28
console.log(stature); //178.5
console.log('---------------------');
var jspang = 'jspang.com';
console.log(jspang); //jspang.com
console.log('---------------------');
//boolean true false
var b = true;
var c = false;
console.log(b); //true
console.log(c); //false
console.log('---------------------');
//enum 类型（枚举类型） 
//人：男，女人，中姓
//四季：春 夏 秋 冬
var REN;
(function (REN) {
    REN["nan"] = "\u7537\u4EBA";
    REN["nv"] = "\u5973\u4EBA";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao); //无值：2 索引 下标  ,有值 ： 打印值
console.log('---------------------');
var t = 10;
t = 'jspang 10';
t = true;
console.log(t); //true
console.log('---------------------');
//null
