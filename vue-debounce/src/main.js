import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import './assets/style.css'
import 'ant-design-vue/dist/antd.css';
import vuescroll from 'vuescroll';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/dialog'
import Directive from './utils/directive'
import request from './utils/request'
Directive.initDirective(Vue);
//Vue.use(scroll)
//Vue.use(scroll,{componentName: 'scroll-seamless'})

Vue.use(Antd);
Vue.use(vuescroll); // install the vuescroll first
Vue.use(ElementUI);
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$Http', { value: request })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
