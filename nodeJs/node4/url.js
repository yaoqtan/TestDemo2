var urlLib = require('url');

var urlObj = urlLib.parse('http://www.gtomato.com/d.html?a=23&b=2',true);
console.log(urlObj);