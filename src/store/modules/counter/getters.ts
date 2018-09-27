// Interface
import { AppState } from '~/store/interfaces/state'
import util from '~/util'

export class CounterGetter {
  public evenOrOdd(state: AppState) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  }
}

export default util.classToObject(CounterGetter)
