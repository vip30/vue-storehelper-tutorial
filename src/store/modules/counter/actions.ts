import { ActionContext } from 'vuex'
import { AppState } from '~/store/interfaces/state'
import util from '~/util'
import types from '../../all-mutation-types'

export class CounterAction {
  public increment(context: ActionContext<AppState, any>) {
    context.commit(types.INCREMENT)
  }
  public decrement(context: ActionContext<AppState, any>) {
    context.commit(types.DECREMENT)
  }
}

export default util.classToObject(CounterAction)
