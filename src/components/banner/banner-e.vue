<!-- 详情页轮播 -->
<template>
     <swiper :options="swiperOption" class="banner5">
        <swiper-slide v-for="item, key in bannerData" :key="key">
          <img  :src="item.auctionGoodsPath" style="width:100%;height: 7.5rem;">
        </swiper-slide>
        <div v-if="bannerData && bannerData.length > 1" class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
    export default {
        props: ['bannerData'],
        data() {
            return {
            // swiper使用参数
             swiperOption: {
                loop: true,     //循环轮播
                // autoHeight: true,  //自动高度
                pagination: {
                  el: '.swiper-pagination',
                  type: 'fraction'
                },

              }
            }
        },
        methods: {
            
        },
        mounted() { 
             
      },
        
    }
</script>
<style lang="less" scoped>


</style>