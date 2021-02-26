<template>
  <div class="vd-home">
    <swiper :list="swiperList" />
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
import {swiperList, cardList} from '../data/'
import Swiper from '@/components/swiper'
import Card from '@/components/card'
export default {
  name: 'Home',
  components:{
    Swiper,
    Card
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
  }
}
</script>

<style lang="less">
.vd-home{
  .flex-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__item{
      flex-basis: 50%;
    }
    &__item.left{
      padding: 5px 5px 5px 10px;
    }
    &__item.right{
      padding: 5px 10px 5px 5px;
    }
  }
}
</style>