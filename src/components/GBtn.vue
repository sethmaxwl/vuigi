<template lang="pug">
  button.vuigi-base.vuigi-button
    slot
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class GBtn extends Vue{

  // GBtn customization properties
  
  @Prop({default: false}) absolute?: boolean;
  @Prop({default: false}) append?: boolean;
  @Prop({default: false}) block?: boolean;
  @Prop({default: undefined}) color?: string;
  @Prop({default: false}) depressed?: boolean;
  @Prop({default: false}) disabled?: boolean;
  @Prop({default: undefined}) elevation?: number | string;
  @Prop({default: false}) fixed?: boolean;
  @Prop({default: undefined}) height?: number | string;
  @Prop({default: undefined}) href?: string | object;
  @Prop({default: false}) icon?: false;
  @Prop({default: false}) large?: boolean;
  @Prop({default: false}) left?: boolean;
  @Prop({default: false}) light?: false;
  @Prop({default: false}) loading?: false;
  @Prop({default: undefined}) maxHeight?: number | string;
}
</script>

<style lang='scss'>
  .vuigi-button {
    padding: 12px;
    background-color: ''
  }
</style>
