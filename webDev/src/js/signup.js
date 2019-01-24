import './../less/signup.less'
import $ from "jquery";


$(function(){

    $('#btn').click(function () {

        const queryData = {
            user:$('#name').val(),
            pwd:$('#pwd').val(),
        };

        $.ajax({
            url:"http://127.0.0.1:8081/signup",
            type:"post",
            data:queryData,
            dataType:"json",
        }).then(function (jsonData) {
            console.log(jsonData)
        });
    })

});