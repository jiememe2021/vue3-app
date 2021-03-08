import Home from '@/views/home.vue'

const routes =  [
    // 子应用入口组件需要同步加载，不能异步加载
    {
      path: '/',
      component: Home,
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

export default routes