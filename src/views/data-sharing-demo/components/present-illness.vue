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
  // 如果
  // data(){
  //   return {
  //     emrData
  //   }
  // },
  setup(){
    return {
      emrData
    }
  },
  mounted(){
    setTimeout(()=>{
      console.log('emrData', emrData)
      console.log('this.emrData', this.emrData)
    }, 3000)
  }
}
</script>

<style>

</style>