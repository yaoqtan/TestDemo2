const jade=require('jade');
const fs=require('fs');

var str=jade.renderFile('./views/4.jade',{pretty:true});

fs.writeFile('./build/2.html',str,function(err){
    if(err){
        console.log('err')
    }else{
        console.log('success');
    }
})


console.log(str);