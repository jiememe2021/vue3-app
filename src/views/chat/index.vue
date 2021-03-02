<!--
说明：聊天组件
待完善
功能：展示头像、文字、图片、语音、视频等消息
支持对话（上传图片、音视频）
支持常用语
-->
<template>
  <div>我是聊天组件</div>
  <message :components-name="componentsName" />
</template>

<script>
import message from './components/message.vue'
export default {
  components: { message },
  data(){
    return {
      componentsName: 'audio'
    }
  }
}
</script>

<style>

</style>