import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/data-sharing',
      name: 'dataSharing',
      component: () => import(/* webpackChunkName: "home" */ '@/views/data-sharing-demo/index.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "home" */ '@/views/chat/index.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/detail',
      name: 'homeDetail',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home/detail.vue'),
      meta: {
        index: 2
      }
    }
  ]
})

export default router