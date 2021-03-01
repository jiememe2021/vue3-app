<template>
  <main-suit />
  <present-illness />
  <submit />
</template>

<script>
import MainSuit from './components/main-suit'
import PresentIllness from './components/present-illness'
import Submit from './components/submit'
import {getData} from './data'
export default {
  name: 'DataSharing',
  components: {
    MainSuit,
    PresentIllness,
    Submit
  },
  mounted(){
    getData()
  }
}
</script>

<style>

</style>