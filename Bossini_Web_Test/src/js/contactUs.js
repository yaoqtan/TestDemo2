import {jsonData} from './../utils'
import './../less/contactUs.less';
import Img from './../assets/contact_kv.png';
import Page from './../utils/page'

import Api from './../api'

import contentArt from "./../art/contactUs.art";


const data = jsonData().settingContactUs;

const contentHtml = contentArt({Img:Img,data:data});

//document.querySelector('#App').innerHTML=contentHtml;

Page(contentHtml).then((val)=>{

    Api()

});