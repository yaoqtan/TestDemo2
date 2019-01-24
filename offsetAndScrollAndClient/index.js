/*
*  COPYRIGHT.GT. ALL RIGHTS RESERVED.
*/


window.onload=function () {


   let body = document.querySelector('body');

   let head = document.querySelector('#head');

    /*console.log(body.offsetWidth);
    console.log(body.offsetHeight);
    console.log(body.offsetTop);
    console.log(body.offsetLeft);*/
    console.log("------offset-------")
    console.log(head.offsetWidth);
    console.log(head.offsetHeight);
   /* console.log(head.offsetTop);
    console.log(head.offsetLeft);




    console.log(getElementLeft(head))
    console.log(getElementTop(head))
*/
    console.log("------client-------")
    console.log(head.clientWidth);
    console.log(head.clientHeight);

   /*let allWidth = document.body.clientWidth || document.documentElement.clientWidth;
   let allHeight = document.body.clientHeight || document.documentElement.clientHeight;

    console.log(allWidth);
    console.log(allHeight);
    console.log(screen.width)
    console.log(screen.height)*/

   let scrollWidth = head.scrollWidth;
   let scrollHeight = head.scrollHeight;
   let scrollTop = head.scrollTop;
   let scrollLeft = head.scrollLeft;
    console.log("------scroll-------")
    console.log(scrollWidth);
    console.log(scrollHeight);
    console.log(scrollTop);
    console.log(scrollLeft);




};

function getElementLeft(element) {
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    while(current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

function getElementTop(element) {
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    while(current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;

}