declare module 'store-helper' {
  // vuex action interface
  interface MyActions {
  }

  interface MyGetters {
  }

  module 'vuex/types' {
    interface Store<S> {
      myActions: MyActions
      _actions: {
        [key: string]: () => any
      }
      // can't redefine the property
      // ref: https://stackoverflow.com/questions/48690619/how-can-i-augment-a-property-within-a-third-party-typescript-interface-defined-a
      myGetters: MyGetters
    }
  }
}