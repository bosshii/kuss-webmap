import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'top',
    component: () => import( '../views/TopPage.vue')
  },
  {
    path: '/map',
    name: 'home',
    component: () => import( '../views/MapHome.vue')
  },
  {
    path: '/map/a',
    name: 'a',
    component: () => import( '../views/MapA.vue')
  },
  {
    path: '/map/b',
    name: 'b',
    component: () => import( '../views/MapB.vue')
  },
  {
    path: '/map/c',
    name: 'c',
    component: () => import( '../views/MapC.vue')
  },
  {
    path: '/map/d',
    name: 'd',
    component: () => import('../views/MapD.vue')
  },
  {
    path: '/map/e',
    name: 'e',
    component: () => import('../views/MapE.vue')
  },
  {
    path: '/map/arena',
    name: 'arena',
    component: () => import('../views/MapArena.vue')
  },
  {
    path: '/map/others',
    name: 'others',
    component: () => import('../views/MapOthers.vue')
  },
  {
    path: '/navi',
    name: 'navi',
    component: () => import( '../views/Navi.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
