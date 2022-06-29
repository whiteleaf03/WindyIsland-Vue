import {createApp} from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router/index'

createApp(App)
    .use(VueAxios, axios)
    .use(router)
    .mount('#app')

