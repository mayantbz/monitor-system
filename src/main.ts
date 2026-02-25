import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/styles/theme.css'
import { useThemeStore } from '@/stores/modules/theme'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

const themeStore = useThemeStore()
themeStore.initTheme()

app.use(router)
app.use(ElementPlus)

app.mount('#app')
