"use strict";
//变量的作用域，函数划分（与javascirpt 差不多）
//var yangzi:string = 'liudehua'
// function zhengxing():void{
//     var yangzi:string='liudehua2'
//     console.log(yangzi)
// }
// zhengxing()
// 全局变量 局部变量
//let
function zhengxing() {
    var yangzi = 'liudehua2';
    {
        var yangzib = 'xiaoshenyang';
    }
    console.log(yangzi);
    console.log(yangzib);
}
zhengxing();
