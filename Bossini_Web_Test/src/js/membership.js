import {jsonData} from './../utils'
import './../less/membership.less';

import contentArt from "./../art/membership.art";

const data = jsonData().membership;

const contentHtml = contentArt(data);
document.title=data.title;
document.querySelector('#App').innerHTML=contentHtml;

