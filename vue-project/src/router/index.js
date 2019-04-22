import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ParentChild from '@/ParentChild'
import Vuetify from '@/Vuetify'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/parent",
      name:"ParentChild",
      component:ParentChild
    },
    {
      path:"/vuetify",
      name:"Vuetify",
      component:Vuetify
    }
  ]
})
