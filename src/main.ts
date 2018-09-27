import './class-component-hooks.ts'

import Vue from 'vue'
import App from './App.vue'
import { StoreHelper } from './plugins'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(StoreHelper)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
