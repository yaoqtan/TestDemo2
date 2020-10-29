import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import KeeepAlive from '../views/KeeepAlive.vue'
import routerOne from '../views/routerOne.vue'
import DemoScroll from '../views/DemoScroll.vue'
import AttrListeners from '../views/AttrListeners.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/attrListeners',
    name: 'attrListeners',
    component: AttrListeners,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/routerOne',
    name: 'routerOne',
    component: routerOne,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/keepAlive',
    name: 'KeeepAlive',
    component: KeeepAlive,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      keepAlive:true
    },

  },{
      path: '/demoscroll',
      name: 'demoscroll',
      component: DemoScroll,
      meta:{
        keepAlive:true
      },
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
