<template>
  <div class="vd-home">
    <vd-header scroll-top="185" />
    <swiper
      :list="swiperList"
    />
    <div class="flex-box">
      <div class="flex-box__item left">
        <card
          v-for="(item) in leftList"
          :key="item.goodsId"
          :card-config="item"
        />
      </div>
      <div class="flex-box__item right">
        <card
          v-for="(item) in rightList"
          :key="item.goodsId"
          :card-config="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { swiperList, cardList } from '../data/'
import Swiper from '@/components/swiper'
import Card from '@/components/card'
import Header from './home/components/header'
export default {
  name: 'Home',
  components:{
    Swiper,
    Card,
    'vd-header': Header
  },
  data(){
    return {
      swiperList,
      cardList
    }
  },
  computed:{
    leftList(){
      return this.cardList.filter((item, index) =>index % 2 === 0)
    },
    rightList(){
      return this.cardList.filter((item, index) =>index % 2 !== 0)
    }
  },
  async mounted(){
  }
}
</script>

<style lang="less">
.vd-home{
  .flex-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    }
  .flex-box__item{
    flex-basis: 50%;
  }
  .flex-box__item.left{
    padding: 5px 5px 5px 10px;
  }
  .flex-box__item.right{
    padding: 5px 10px 5px 5px;
  }
}
</style>