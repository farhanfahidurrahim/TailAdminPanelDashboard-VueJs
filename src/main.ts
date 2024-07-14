import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";
import NProgress from './nprogress'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircle)

const app = createApp(App)

// NProgress
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Toast,{ timeout: 2000, });
app.mount('#app')
