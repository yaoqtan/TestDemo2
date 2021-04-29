import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo1',
    name: 'Demo1',

    component: () => import( '../views/Demo1.vue')
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import( '../views/Demo2.vue')
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: () => import( '../views/Demo3.vue')
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: () => import( '../views/Demo4.vue')
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: () => import( '../views/Demo5.vue')
  },
  {
    path: '/demo6',
    name: 'Demo6',
    component: () => import( '../views/Demo6.vue')
  },
  {
    path: '/demo7',
    name: 'Demo7',
    component: () => import( '../views/Demo7.vue')
  },
  {
    path: '/demo8',
    name: 'Demo8',
    component: () => import( '../views/Demo8.vue')
  },
  {
    path: '/demo9',
    name: 'Demo9',
    component: () => import( '../views/Demo9.vue')
  },
  {
    path: '/demo10',
    name: 'Demo10',
    component: () => import( '../views/Demo10.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
