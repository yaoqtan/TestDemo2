import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import _ from 'underscore'

console.log(_.first([5, 4, 3, 2, 1]))

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
