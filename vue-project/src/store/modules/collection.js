const state ={
  collects:[{id:1,name:'yao'}]
};
const getters={
  renderCollects(state){
    return state.collects;
  }
};
const mutations={
  pushCollects(state,items){
    state.collects.push(items)
  }
};
const actions={
  invokePushItems(context,item){
    console.log(context)
    context.commit('pushCollects',item);
  }
};
export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
