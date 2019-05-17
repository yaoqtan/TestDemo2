const state ={ //要设置的全局访问的state对象
  showFooter:true,
  changableNum:0
  //要设置的初始属性值
};

const getters = {
  isShow(state){
    return state.showFooter
  },
  getChangeNum(){
    return state.changableNum
  },
};
const mutations = {
  show(state){
    state.showFooter=true;
  },
  hide(state){
    state.showFooter=false;
  },
  newNum(state,sum){
    state.changableNum+=sum;
  }
};
const actions ={
  hideFooter(context){
    context.commit('hide')
  },
  showFooter(context){
    context.commit('show')
  },
  getNewNum(context,num){
    context.commit('newNum',num)
  }
};
export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
