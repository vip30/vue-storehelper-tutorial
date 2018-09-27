<template lang="pug">
  div
    | Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    button(@click='increment') +
    button(@click='decrement') -

</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'
@Component({
  name: 'view-helloworld'
})
export default class Helloworld extends Vue {
  @Action
  public increment: void
  @Action
  public decrement: void
  @Getter
  public evenOrOdd: number
  @State(state => state.counterModule.count)
  public count: number
}
</script>
