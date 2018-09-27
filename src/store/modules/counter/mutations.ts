import * as types from './mutation-types'

// interface
import { AppState } from '~/store/interfaces/state'

/*
  Need to use export default({}) rather than export default {}
  ref links: https://github.com/TypeStrong/ts-loader/issues/588
*/
export default {
  [types.INCREMENT](state: AppState) {
    state.count++
  },
  [types.DECREMENT](state: AppState) {
    state.count--
  }
}
