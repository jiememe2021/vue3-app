<template>
  <component :is="componentsNameMap[componentsName]" />
</template>

<script>
import Audio from './audio/index'
export default {
  components:{
    Audio
  },
  props:{
    componentsName:{
      type: String,
      default: ''
    }
  },
  data(){
    return {
      componentsNameMap:{
        'audio': 'audio'
      }
    }
  },
  computed:{

  }
}
</script>

<style>

</style>