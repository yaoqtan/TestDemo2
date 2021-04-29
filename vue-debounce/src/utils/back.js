let directive = {
  initDirective(Vue) {

    Vue.directive('validate', {
      bind(el,binding,vNode) {
        const dom =el.querySelector('input')

        const context = vNode.context;
        Vue.nextTick(()=>{
          console.log(dom.value)

          if( !isNaN(dom.value) ){
            dom.value=thousandNum(Number(dom.value).toFixed(2))
          }else{
            dom.value='0.00'
          }
        })
        const thousandNum=function(num=0){
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        const inputMoney=function(v){
          if(!v) return ''
          //如果输入非数字，则替换为''
          v= v.replace(/[^\d.]/g, '');
          //必须保证第一个为数字而不是.
          v = v.replace(/^-./g,'');
          //保证只有出现一个.而没有多个.
          v = v.replace(/\.{2,}/g,'.');
          //保证.只出现一次，而不能出现两次以上
          v = v.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
          //只能输入两位小数
          v = v.replace(/^(-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
          return v
        }
        dom.onblur=(e)=>{
          //console.log(binding.value)
          let trueValue = inputMoney(e.target.value)
          if(trueValue%1===0){
            trueValue=parseInt(trueValue)
          }

          context[binding.expression] = trueValue

          // if(isNaN(e.target.value)){
          //   e.target.value='0.00'
          // }else{
          //   e.target.value=thousandNum(Number(e.target.value).toFixed(2))
          // }
          // if(e.target.value===0){
          //   e.target.value='0.00'
          // }


        }

        dom.onfocus=(e)=>{

          e.target.value =inputMoney(e.target.value)
          console.log(e.target.value)
          if(e.target.value%1===0){
            e.target.value=parseInt(e.target.value)
          }
          // console.log(e.target.value)
          //console.log(binding.value)
        }
      }
    });
  }
}
export default directive