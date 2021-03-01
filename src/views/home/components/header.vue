<template>
  <header
    class="home-header"
    :class="{'active' : headerScroll}"
  >
    <router-link
      tag="i"
      to="./category"
    >
      <van-icon
        name="wap-nav"
        color="#01cb91"
        size="21"
      />
    </router-link>
    <div class="header-search">
      <span class="app-name">杰杰商城</span>
      <van-icon
        name="search"
        color="#01cb91"
        size="21"
      />
      <router-link
        tag="span"
        class="search-title"
        to="./product-list?from=home"
      />
    </div>
    <router-link
      v-if="!isLogin"
      class="login"
      tag="span"
      to="./login"
    >
      登录
    </router-link>
    <router-link
      v-else
      class="login"
      tag="span"
      to="./user"
    >
      <van-icon name="manager-o" />
    </router-link>
  </header>
</template>
<script>
import { onMounted, onUnmounted, ref } from 'vue'
export default {
  name: 'Header',
  props:{
    scrollTop:{
      type: String,
      default: ''
    }
  },
  setup(props){
    let headerScroll = ref(false)
    onMounted(()=>{
      if(props.scrollTop){
        window.addEventListener('scroll', ()=>{
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          headerScroll.value = scrollTop > props.scrollTop
        })
      }
    })
    onUnmounted(()=>{
      window.addEventListener('scroll', ()=>{})
    })
    return {
      headerScroll
    }
  },
  data(){
    return {
    }
  },
  computed:{
    isLogin(){
      return ''
    }
  }
}
</script>

<style lang="less">
@import '../../../styles/base.less';
.home-header{
  .fixed();
  .flex-display();
  padding: 10px;
  height: 36px;
  line-height: 2;
  font-size: 18px;
  .header-search{
    width: 282px;
    height: 36px;
    font-size: 18px;
    line-height: 2;
    padding: 0 15px;
    color: #232326;
    background: rgba(255, 255, 255, .7);
    border-radius: 20px;
    box-sizing: border-box;
    .app-name{
      color: @green;
      font-weight: bold;
      border-right: 0.02667rem solid #666;
    }
  }
  .login{
    font-size: 18px;
    color: @green;
  }
  .van-icon{
    vertical-align: text-bottom;
    margin-left: 10px;
  }
  &.active{
    background: #1baeae;
  }
}
</style>