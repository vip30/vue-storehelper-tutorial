import Vue from 'vue'

export class StoreHelperMixin extends Vue {
  public beforeCreate() {
    if (!this.$store) {
      return
    } else {
      const actions: any = {}
      Object.keys(this.$store._actions).forEach(action => {
        actions[action] = (...args: any[]) => this.$store.dispatch(action, ...args)
      })
      this.$store.myActions = actions
      this.$store.myGetters = this.$store.getters
    }
  }
}

export default (localVue: any) => {
  localVue.mixin(new StoreHelperMixin())
}
