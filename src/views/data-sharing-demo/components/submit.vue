<template>
  <van-button 
    @click="submit"
  >
    提交
  </van-button>
</template>

<script>
import {emrData} from '../data'
export default {
  name: 'Submit',
  methods:{
    submit(){
      console.warn('emrData=============>', emrData)
    }
  }
}
</script>

<style>

</style>