import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '../node_modules/axios'

import VueSweetalert2 from 'vue-sweetalert2';
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';

axios.defaults.baseURL = 'http://127.0.0.1:5000'

createApp(App).use(store, axios, VueSweetalert2).use(router).mount('#app')