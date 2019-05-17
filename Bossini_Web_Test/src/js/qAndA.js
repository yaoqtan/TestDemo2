import {jsonData} from './../utils'
import './../less/qAndA.less';

import contentArt from "./../art/qAndA.art";

const data = jsonData().settingQandA;


const contentHtml = contentArt({data:data});

document.querySelector('#App').innerHTML=contentHtml;
