<!-- 饮用精选轮播类型 -->
 <template>
     <swiper :options="swiperOption" class="banner3">
        <swiper-slide v-for="item, key in bannerData" :key="key">
         <router-link :to="{name:'goodsDetail',params:{Gseq: `${item.auctionGoodsSeq}`, Sseq: `${item.auctionSessionSeq}`}}">
          <!-- <a :href="`/detail/good/${item.auctionSessionSeq}/${item.auctionGoodsSeq}`"> -->
          <img v-if="item.auctionGoodsIcon" :src="item.auctionGoodsIcon">
          <div class="text-left btext">
            <b>BALBLAIR</b>
            <div class="textfir">{{item.auctionGoodsName}}</div>
            <div v-if="item.state ==2">
              <span class="PriceTitle-xs">起拍价：</span>
              <span class="priceNum">￥{{item.qiPaiJia}}</span>
            </div>
            <div v-if="item.state ==3">
              <span class="PriceTitle-xs">当前价：</span>
              <span class="priceNum">￥{{item.currPrice}}</span>
            </div>
            <div v-if="item.state ==4">
              <span class="PriceTitle-xs">成交价：</span>
              <span class="priceNum">￥{{item.currPrice}}</span>
            </div>
            <div v-if="item.state ==5">
              <span class="PriceTitle-xs">成交价:流拍</span>
            </div>
          </div>
          <!-- </a> -->
          </router-link>
        </swiper-slide>
      </swiper>
</template>

<script>
    export default {
        props: ['bannerData'],
        data() {
            return {
            // swiper使用参数
             swiperOption: {
                slidesPerView: 3,
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
<style scoped>
.btext>div {
  margin-top: .1rem;
}
.priceNum {
  font-size: 0.28rem;
  color: #C93B00;
}
</style>