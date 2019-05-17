// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
//import Vuex from 'vuex'
import store from './store'



Vue.config.productionTip = false;

Vue.use(Vuetify);
//Vue.use(Vuex);

//const store = new Vuex.Store({})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
