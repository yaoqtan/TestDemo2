import {ref } from "vue";

const nowTime = ref('00:00:00');
const getNowTime=()=>{
    const now = new Date();
    const hour = now.getHours()< 10?`0${now.getHours()}`:now.getHours();
    const minus = now.getMinutes()<10?`0${now.getMinutes()}`:now.getMinutes();
    const second = now.getSeconds()<10?`0${now.getSeconds()}`:now.getSeconds();
    nowTime.value=`${hour}:${minus}:${second}`
    setTimeout(getNowTime,1000)
}
export {nowTime,getNowTime}