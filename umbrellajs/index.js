


//console.log(u);
const listener = function() {
    console.log('called');
}

//Add listener
u('.off-multiple-test').on('click', listener);
//Trigger event
u('.off-multiple-test').trigger('click'); //Alert appears
//Remove listener
u('.off-multiple-test').off('click', listener);
//Trigger event
u('.off-multiple-test').trigger('click'); //No alert


let array =u('<div class="test"><li>13</li><li>1234</li></div><div>124</div>').array(function(node){
    //console.log(node);
    if(u(node).hasClass('test')){
       // console.log(1);
    }else{
        //console.log(2)
    }
    return { name: u(node).text() };
});
//console.log(array);

let array1= u('ul li').each((node,index)=>{
    //console.log(node,index);
})
/*console.log(array1)*/

/*
console.log(u('body').size())*/



// .handle() == .on() + preventDefault()
/*u('form.contact').handle('submit', async e => {
    // Body: email=test@example.com&message=Hello+world
    console.log(e.target);
    const body = u(e.target).serialize();

    const data = await fetch('/contact', {
        method: 'POST', body
    }).then(res => res.json());
    console.log('Response data:', data);
});*/

    //If you were using the native FormData:
    // .handle() == .on() + preventDefault()
    u('form.contact').handle('submit', async e => {
        const body = new FormData(e.target);
        const data = await fetch('/contact', {
            method: 'POST', body
        }).then(res => res.json());
        console.log('Response data:', data);
    });
























