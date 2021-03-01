<template>
  <van-cell-group>
    <van-field
      v-model="emrData.mainSuit"
      label="主诉"
      placeholder="请输入主诉"
    />
  </van-cell-group>
</template>

<script>
import {emrData} from '../data/'
export default {
  name: 'MainSuit',
  setup(){
    return {
      emrData
    }
  }
  // data(){
  //   return {
  //     emrData
  //   }
  // }
}
</script>

<style>

</style>