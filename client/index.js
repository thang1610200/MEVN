import { createApp } from 'vue'
import Main from './pages/Main.vue'
import router from './routes'
import TextInput from '@/client/components/TextInput.vue'
import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import store from './store'

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

const app = createApp(Main)
app.use(router)
app.use(store)
app.component('text-input', TextInput)
app.mount('#app')

