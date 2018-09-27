
declare module 'store-helper-extend' {
  import { CounterAction } from '~/store/modules/counter/actions'

  import { CounterGetter } from '~/store/modules/counter/getters'
  // Class extend interface is working as expected but we are not directly call the store action
  // We need to use dispatch to call the action so can't just extend the store action interfce directly

  module 'store-helper' {
    interface MyActions extends
    ActionHelper<CounterAction> {
    }

    interface MyGetters extends
      GetterHelper<CounterGetter>
      {
    }
  }
}
