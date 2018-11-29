import Vue from 'vue'
import Router from 'vue-router'
import LifelinesWebshop from './views/LifelinesWebshop.vue'
import CartView from '@/views/CartView.vue'
import { INITIAL_STATE } from '@/store/state'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: INITIAL_STATE.baseUrl || process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'lifelines-webshop',
      component: LifelinesWebshop
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})
