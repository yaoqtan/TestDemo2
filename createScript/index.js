/*
*  COPYRIGHT.GT. ALL RIGHTS RESERVED.
*/

console.log(1);


let googleAd = document.createElement("div");
googleAd.className='google-ad'

let pc=document.createElement("div");
pc.style.width="336px";
pc.style.maxWidth="100%";
pc.style.height="280px";
pc.style.margin="#20px auto";
pc.style.overflow="hidden";
pc.style.textAlign="center";
pc.id='pc_all_middle'


let sp=document.createElement("div");
sp.style.width="336px";
sp.style.maxWidth="100%";
sp.style.height="280px";
sp.style.margin="#20px auto";
sp.style.overflow="hidden";
sp.style.textAlign="center";
sp.id='sp_article_underarticle';

let scriptSp = document.createElement('script');
scriptSp.appendChild(document.createTextNode('function sayHi(){console.log(\'hello world\')} sayHi()'))

let scriptPc = document.createElement('script');
scriptPc.appendChild(document.createTextNode('function sayHi(){console.log(\'hello world\')} sayHi()'))

pc.appendChild(scriptSp)
pc.appendChild(scriptPc)

googleAd.appendChild(pc);
googleAd.appendChild(sp);

document.getElementById('test').appendChild(googleAd)