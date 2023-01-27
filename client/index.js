import { createApp } from 'vue'
import './styles/main.css'
import Main from './pages/Main.vue'
import router from './routes'
import TextInput from '@components/TextInput.vue'
import Button from '@components/Button.vue'
import Loader from '@components/Loader.vue'
import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import store from './store'
import authmixin from './mixins/auth.js'

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

const app = createApp(Main)
app.use(router)
app.use(store)
app.mixin(authmixin)
app.component('text-input', TextInput)
app.component('btn',Button)
app.component('loader',Loader)
app.mount('#app')

