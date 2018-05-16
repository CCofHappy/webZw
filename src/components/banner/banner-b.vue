<!-- 历史拍卖轮播类型 -->
 <template>
     <swiper :options="swiperOption" class="list-child banner2">
        <swiper-slide v-for="item, key in bannerData" :key="key">
          <router-link :to="{name:'sessionDetail',params:{seq: `${item.auctionSessionSeq}`}}">
            <p class="cntitle text-left textfir">{{item.auctionSessionName}}</p>
            <img v-if="item.auctionSessionIcon" :src="item.auctionSessionIcon">
            <img v-else="item.auctionSessionIcon" src="@/assets/default/default.png">
          </router-link>
        </swiper-slide>
      </swiper>
</template>

<script>
    export default {
        props: ['bannerData'],
        data() {
            return {
              // bannerData:[],
            // swiper使用参数
             swiperOption: {
                slidesPerView: 'auto',
                spaceBetween: 10,
              }
            }
        },
        methods: {
            
        },
        mounted() { 
          
      },
        
    }
</script>
<style lang="less">
 

</style>