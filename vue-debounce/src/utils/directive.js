import AppUtil from "./AppUtil";

let directive = {
  initDirective(Vue) {

    Vue.directive('validate', {
      bind(el, binding, vNode) {

        const dom =el.querySelector('input')
        const context = vNode.context;
        console.log(context)
        dom.style.textAlign='right'
        Vue.nextTick(()=>{
          if( !isNaN(dom.value) ){
            dom.value=AppUtil.thousandNum(Number(dom.value).toFixed(2))
          }else{
            dom.value='0.00'
          }
        })
        dom.onblur=(e)=>{
          Vue.nextTick(()=>{
            let trueValue = AppUtil.inputMoney(e.target.value)
            if(isNaN(trueValue)){
              trueValue='0.00'
            }
            if(trueValue%1===0){
              trueValue=parseInt(trueValue)
            }
            e.target.value=AppUtil.thousandNum(Number(trueValue).toFixed(2))
          })
        }
        dom.onfocus=(e)=>{
          e.target.value =AppUtil.inputMoney(e.target.value)
          if(e.target.value%1===0){
            e.target.value=parseInt(e.target.value)
          }
        }
        dom.oninput=(e)=>{
          let value=AppUtil.inputMoney(e.target.value)
          e.target.value=AppUtil.inputMoney(value)
          if(isNaN(value) || !value){
            e.target.value=0
          }
        }
      },
      update(el, binding){
        // console.log('update')
        const dom =el.querySelector('input')
        Vue.nextTick(()=>{
          // dom!=document.activeElement元素是否是获取焦点
          if(!isNaN(binding.value) && (document && dom!=document.activeElement)){
            dom.value=AppUtil.thousandNum(Number(binding.value).toFixed(2))
          }
        })

      },
      componentUpdated(){//el,binding,vNode
        // console.log('componentUpdated')
      }
    });
  }
}
export default directive