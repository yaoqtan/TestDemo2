
const fs = require('fs');

fs.rename('b.txt','a.txt',function (err) {
    console.log(err)
});
