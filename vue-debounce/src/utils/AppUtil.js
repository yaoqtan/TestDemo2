const AppUtil={
  inputMoney:function(v){
    if(!v) return ''
    //如果输入非数字，则替换为''
    v= v.replace(/[^\d-.]/g, '');
    //必须保证第一个为数字而不是.
    v = v.replace(/^\./g,'');
    //保证只有出现一个.而没有多个.
    v = v.replace(/\.{2,}/g,'.');
    //保证.只出现一次，而不能出现两次以上
    v = v.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
    //只能输入两位小数
    v = v.replace(/^(-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
    return v
  },
  thousandNum:function(num=0){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
export default AppUtil