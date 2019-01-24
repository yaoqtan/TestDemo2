import config from './public/config';
import '../less/home.less';
import $ from "jquery";
import jQueryScrollbar from "jquery.scrollbar";

console.log(jQueryScrollbar);

let h2=document.querySelector('h2');

let demo = document.querySelector('.demo');
//demo.style.display='none';

let scrollbar= null;

h2.onclick=function () {
    let wrap = document.querySelector('.demo > div');
    if(!scrollbar){
        wrap.setAttribute('class','scrollbar-rail');
        scrollbar=$('.scrollbar-rail').scrollbar();
    }
    console.log(scrollbar);

};








$(function(){
    console.log($);
    $.ajax({
        url:'/data/data.json',
        type:'get',
        data:{},
        dataType:'json',
    }).then(function (jsonData) {
        console.log(jsonData)
        let _el=$('#list')
        jsonData.map((value,index)=>{
            _el.append('<li>'+value.user+'</li>')
        })
    })
});


function home() {
    console.log('this is home1');
}
home();
config.say();