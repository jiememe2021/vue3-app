<template>
  <div
    class="vd-card"
    @click="$emit('click')"
  >
    <van-image 
      width="100%"
      :src="goodsCoverImg"
      lazy-load
    />
    <div>{{ goodsName }}</div>
    <div>{{ goodsIntro }}</div>
    <div>{{ sellingPrice }}</div>
    <div>{{ tag }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:{
    cardConfig:{
      type: Object,
      default:()=>{
        return {
          goodsName: '',
          goodsCoverImg: '',
          goodsIntro: '',
          sellingPrice: '',
          tag: ''
        }
      }
    }
  },
  emits: ['click'],
  data(){
    console.log(this.cardConfig)
    return {
      ...this.cardConfig
    }
  }
}
</script>

<style lang="less">
.vd-card{
  border-radius: 8px;
  margin-top: 10px;
  background: #fff;
  .van-image__img{
    border-radius: 8px 8px 0 0;
  }
}
</style>