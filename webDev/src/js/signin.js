import './../less/signin.less'
import $ from "jquery";

import Scrollbar from 'smooth-scrollbar';

let scroll = Scrollbar.init(document.querySelector('.smooth-main'),{
    plugins: {
        // overscroll plugin will NEVER be constructed on this scrollbar!
        overscroll: false,
    },
    continuousScrolling:false
});



//Scrollbar.destroy(document.querySelector('.smooth-main'));
console.log(Scrollbar.has(document.querySelector('.smooth-main')));
console.log(scroll);




$(function(){
    console.log($);

    $('#a').click(function () {
        console.log(1)
    });


    $('#btn').click(function () {


        const queryData = {
            user:$('#name').val(),
            pwd:$('#pwd').val(),
            tel:$('#tel').val(),
            email:$('#email').val()
        };


        $.ajax({
            url:"http://127.0.0.1:8081/signin",
            type:"post",
            data:queryData,
            dataType:"json",
        }).then(function (jsonData) {
            console.log(jsonData)
        });
    })

});