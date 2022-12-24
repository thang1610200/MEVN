import { createApp } from 'vue'
import Main from './pages/Main.vue'
import router from './routes'
import './styles/main.css'

const app = createApp(Main)
app.use(router)
app.mount('#app')

