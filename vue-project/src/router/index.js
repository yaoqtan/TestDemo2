import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import ParentChild from '@/page/ParentChild'
import Vuetify from '@/page/Vuetify'
import StoreTest from '@/page/StoreTest'
import Todo from '@/page/Todo'

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloWorld',
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
    },
    {
      path:"/storeTest",
      name:"storeTest",
      component:StoreTest
    },
    {
      path:"/todo",
      name:"Todo",
      component:Todo
    }
  ]
})
