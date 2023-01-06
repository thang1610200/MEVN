import { createApp } from 'vue'
import { createStore } from 'vuex'
import auth from './auth'

const app = createApp();

const store = createStore({
	modules: {
        auth
	}
});

app.use(store);

export default store;