import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import vantPlugin from './plugins/vant'
import routes from './router/'
import { createRouter, createWebHistory } from 'vue-router'


function renderApp(props = {}){

  const { container, routerBase } = props

  const router = createRouter({
    history: createWebHistory('/vue3-app'), // hash模式：createWebHashHistory，history模式：createWebHistory
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    routes
  })

  const app = createApp(App)

  app.use(router)
  app.use(vantPlugin)
  
  app.mount(container ? container.querySelector('#app') : '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  renderApp()
}


export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)

  renderApp(props)
}

export async function unmount () {
  // instance.$destroy()
  // instance.$el.innerHTML = ''
  // instance = null
}