// Composables
import { createRouter, createWebHistory } from 'vue-router'
//import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'top',
    component: () => import(/* webpackChunk//name: "about" */ '../views/TopPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunk//name: "about" */ '../views/HomePage.vue')
  },
  //{
    //path: '/map/all',
    //name: 'all',
    //component: () => import('../views/MapAll.vue')
  //},
  {
    path: '/map/a',
    name: 'a',
    component: () => import(/* webpackChunk//name: "about" */ '../views/MapA.vue')
  },
  {
    path: '/map/b',
    name: 'b',
    component: () => import(/* webpackChunk//name: "about" */ '../views/MapB.vue')
  },
  {
    path: '/map/c',
    name: 'c',
    component: () => import(/* webpackChunk//name: "about" */ '../views/MapC.vue')
  },
  //{
    //path: '/map/d',
    //name: 'd',
    //component: () => import('../views/MapD.vue')
  //},
  //{
    //path: '/map/e',
    //name: 'e',
    //component: () => import('../views/MapE.vue')
  //},
  //{
    //path: '/map/arena',
    //name: 'arena',
    //component: () => import('../views/MapArena.vue')
  //},
  //{
    //path: '/map/others',
    //name: 'others',
    //component: () => import('../views/MapOthers.vue')
  //},
  {
    path: '/navi',
    name: 'navi',
    component: () => import(/* webpackChunk//name: "about" */ '../views/Navi.vue')
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/Docs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
