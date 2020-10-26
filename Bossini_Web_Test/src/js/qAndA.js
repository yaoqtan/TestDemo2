import {jsonData} from './../utils'
import './../less/qAndA.less';

import contentArt from "./../art/qAndA.art";

const data = jsonData().settingQandA;


const contentHtml = contentArt({data:data});
console.log(process.env.NODE_ENV)

document.querySelector('#App').innerHTML=contentHtml;
