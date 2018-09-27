import Vue from 'vue'
import Vuex from 'vuex'

import counterModule from './modules/counter'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    modules: {
      counterModule
    }
  })
}

const store = createStore()
export default store
