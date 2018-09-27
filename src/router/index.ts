import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Helloworld from '~/views/Helloworld.vue'

Vue.use(VueRouter)

const Routes: RouteConfig[] = [
  {
    path: '/',
    component: Helloworld,
    name: 'Helloworld'
  },
  { path: '*', redirect: '/error' }
]
export default new VueRouter({
  mode: 'history',
  routes: Routes
})
