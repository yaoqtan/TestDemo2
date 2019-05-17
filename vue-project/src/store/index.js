import Vue from 'vue';
import Vuex from 'vuex';
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'
Vue.use(Vuex);


const store = new Vuex.Store({
  modules:{
    footerStatus,
    collection
  }
});
export default store;
