import { createApp } from 'vue'
import App from './App.vue'
import vantPlugin from './plugins/vant'
import router from './router/'

const app = createApp(App)
app.use(router)
app.use(vantPlugin)

app.mount('#app')


