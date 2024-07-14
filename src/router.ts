import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Authentication/Login.vue'
import CalendarView from '@/views/CalendarView.vue'
import BasicChartView from '@/views/Charts/BasicChartView.vue'
import Dashboard from '@/views/Dashboard.vue'
import FormElementsView from '@/views/Forms/FormElementsView.vue'
import FormLayoutView from '@/views/Forms/FormLayoutView.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TablesView from '@/views/TablesView.vue'
import AlertsView from '@/views/UiElements/AlertsView.vue'
import ButtonsView from '@/views/UiElements/ButtonsView.vue'

import ProductList from '@/views/Product/ProductList.vue'
import ProductCreate from '@/views/Product/ProductCreate.vue'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: 'Category'
    }
  },
  // Product
  {
    path: '/product/list',
    name: 'productList',
    component: ProductList,
    meta: {
      title: 'Product List'
    }
  },
  {
    path: '/product/create',
    name: 'productCreate',
    component: ProductCreate,
    meta: {
      title: 'Product Create'
    }
  },

  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      title: 'Calendar'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: FormElementsView,
    meta: {
      title: 'Form Elements'
    }
  },
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: FormLayoutView,
    meta: {
      title: 'Form Layout'
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      title: 'Tables'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  {
    path: '/charts/basic-chart',
    name: 'basicChart',
    component: BasicChartView,
    meta: {
      title: 'Basic Chart'
    }
  },
  {
    path: '/ui-elements/alerts',
    name: 'alerts',
    component: AlertsView,
    meta: {
      title: 'Alerts'
    }
  },
  {
    path: '/ui-elements/buttons',
    name: 'buttons',
    component: ButtonsView,
    meta: {
      title: 'Buttons'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})

export default router
