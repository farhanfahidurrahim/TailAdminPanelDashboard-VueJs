// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/stores/auth'

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

import BrandList from '@/views/Brand/BrandList.vue'
import BrandCreate from '@/views/Brand/BrandCreate.vue'
import ProductList from '@/views/Product/ProductList.vue'
import ProductCreate from '@/views/Product/ProductCreate.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
      guest: true
    }
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
      requiresAuth: true
    }
  },

  // Brand
  {
    path: '/brand/list',
    name: 'brandList',
    component: BrandList,
    meta: {
      title: 'Brand List',
      requiresAuth: true
    }
  },
  {
    path: '/brand/create',
    name: 'brandCreate',
    component: BrandCreate,
    meta: {
      title: 'Brand Create',
      requiresAuth: true
    }
  },

  // Product
  {
    path: '/product/list',
    name: 'productList',
    component: ProductList,
    meta: {
      title: 'Product List',
      requiresAuth: true
    }
  },
  {
    path: '/product/create',
    name: 'productCreate',
    component: ProductCreate,
    meta: {
      title: 'Product Create',
      requiresAuth: true
    }
  },


  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      title: 'Calendar',
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile',
      requiresAuth: true
    }
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: FormElementsView,
    meta: {
      title: 'Form Elements',
      requiresAuth: true
    }
  },
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: FormLayoutView,
    meta: {
      title: 'Form Layout',
      requiresAuth: true
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      title: 'Tables',
      requiresAuth: true
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings',
      requiresAuth: true
    }
  },
  {
    path: '/charts/basic-chart',
    name: 'basicChart',
    component: BasicChartView,
    meta: {
      title: 'Basic Chart',
      requiresAuth: true
    }
  },
  {
    path: '/ui-elements/alerts',
    name: 'alerts',
    component: AlertsView,
    meta: {
      title: 'Alerts',
      requiresAuth: true
    }
  },
  {
    path: '/ui-elements/buttons',
    name: 'buttons',
    component: ButtonsView,
    meta: {
      title: 'Buttons',
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
});

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (isAuthenticated()) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
