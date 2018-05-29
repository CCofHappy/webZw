<!-- 首页头部轮播 -->
<template>
     <swiper :options="swiperOption" class="banner1">
        <swiper-slide v-for="item, key in bannerData" :key="key">
          <img :src="item.pic" style="width:100%;">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

<script>
    export default {
        props: ['bannerData'],
        data() {
            return {
            // swiper使用参数
             swiperOption: {
               autoplay: {
                  delay: 3000,
                  disableOnInteraction: false
                },
                loop: true,     //循环轮播
                // autoHeight: true,  //自动高度
                pagination: {
                    el: '.swiper-pagination'
                },

              }
            }
        },
        methods: {
            testData () {
               console.log(this.bannerData); 
            }
        },
        mounted() { 
            
      },
        
    }
</script>
<style lang="less" scoped>


</style>