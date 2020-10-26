/*
*  COPYRIGHT.GT. ALL RIGHTS RESERVED.
*/

var canvas = new fabric.Canvas('main');

// 正方形
var rect = new fabric.Rect({
    left:100,
    top:100,
    fill:'red',
    width:100,
    height:100
})

//圆形
var circle = new fabric.Circle({
    radius:50,
    fill:'green',
    left:200,
    top:200
})

var triangle = new fabric.Triangle({
    width:80,
    height:100,
    fill:'blue',
    left:300,
    top:300
})


canvas.add(rect);

canvas.add(circle);
canvas.add(triangle)