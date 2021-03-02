<template>
  <van-cell-group>
    <van-field
      v-model="emrData.pesentIllness"
      label="现病史"
      placeholder="请输入现病史"
    />
  </van-cell-group>
</template>

<script>
import {emrData} from '../data/'
export default {
  name: 'PresetIllness',
  // data(){
  //   return {
  //     emrData
  //   }
  // },
  setup(){
    return {
      emrData
    }
  }
}
</script>

<style>

</style>