const ejs=require('ejs');

ejs.renderFile('./views/2.ejs', {
    json:{arr:[
        {user:'blue',pass:'123456'},
        {user:'blue2',pass:'123466'},
        {user:'blue3',pass:'1222456'},
    ]}}, function (err, data){
    console.log(data);
});