import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from '@renderer/routes'
import '@renderer/assets/tailwind.scss'
import '@renderer/assets/global.scss'

const setupAll = () => {
  const app = createApp(App)
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(router)
  app.use(pinia)
  app.use(ElementPlus)

  app.mount('#app')
}

setupAll()
