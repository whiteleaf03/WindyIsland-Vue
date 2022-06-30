import {createApp} from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'
import qs from "qs";


axios.defaults.baseURL = '/api/'

const app = createApp(App)
app.config.globalProperties.qs = qs;
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
