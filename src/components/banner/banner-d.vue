<!-- 正在拍卖轮播类型 -->
 <template>
  <div>
    <router-link :to="{name:'sessionDetail',params:{seq: `${bannerData.auctionSessionSeq}`}}">
        <div class="lists clearfix margin-bottom-sm">
          <div class="pull-left text-left">
             <div class="cntitle text-left">{{bannerData.auctionSessionName}}</div>
             <!-- 预展中和拍卖中的都要显示倒计时 -->
             <countdown :startTimeOverplus="bannerData.startTimeOverplus" :endTimeOverplus="bannerData.endTimeOverplus" :type="1"></countdown>
             <!-- 拍卖结束后直接显示结束时间即可 -->
             <span v-if="bannerData.state > 3" class="gray">结束时间：{{formtDate(bannerData.auctionSessionEnd,3)}}</span>
          </div>
          <div class="pull-right">
            <p class="gray">围观：<span class="fred">{{bannerData.surroundCatchCount}}次</span></p>
          </div>
        </div>
    </router-link>
    <swiper :options="swiperOption" class="banner4">
      <swiper-slide>
        <router-link :to="{name:'sessionDetail',params:{seq: `${bannerData.auctionSessionSeq}`}}">
          <img :src="bannerData.auctionSessionIcon" style="width:100%;">
        </router-link>
      </swiper-slide>
      <!-- 判断条件待接口完善后可优化  Pdata.children.length > 1  -->
      <!-- children是拍场下的拍品数组 -->
      <swiper-slide v-for="i,index in 3" :key='index' class="slideChild padding-xs" v-if="bannerData.auctionGoodsList.length > index*3">
          <yd-grids-group :rows="3" item-height="4rem">
              <yd-grids-item v-for="item, key in bannerData.auctionGoodsList.slice(index*3, i*3)" :key="key" type='link' :link="{name : 'goodsDetail',params:{Sseq:item.auctionSessionSeq,Gseq:item.auctionGoodsSeq}}">
                  <div slot="else" style="text-align: center;">
                      <img :src="item.auctionGoodsIcon" style="width: 2.2rem;height: 2.2rem;">
                      <div class="text-left">
                        <b class="enGoodsName" style="width: 2.2rem;">{{item.auctionGoodsEname}}</b>
                        <p class="enGoodsName margin-top-xs margin-bottom-xs" style="width: 2.2rem;">{{item.auctionGoodsName}}</p>
                        <p v-if="item.state == 5">
                          <span class="PriceTitle-xs">成交价：</span>
                          <span class="priceNum-sm">流拍</span>
                        </p>
                        <p v-if="item.state == 4">
                          <span class="PriceTitle-xs">成交价：</span>
                          <span class="priceNum-sm">￥{{item.currPrice | Bigprice}}</span>
                        </p>
                        <p v-if="item.state == 3">
                          <span class="PriceTitle-xs">当前价：</span>
                          <span class="priceNum-sm">￥{{item.currPrice | Bigprice}}</span>
                        </p>
                        <p v-if="item.state == 2">
                          <span class="PriceTitle-xs">起拍价：</span>
                          <span class="priceNum-sm">￥{{item.qiPaiJia | Bigprice}}</span>
                        </p>
                      </div>
                  </div>
              </yd-grids-item>
          </yd-grids-group>
      </swiper-slide>
 
      
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
import countdown from '@/components/countdown/countdown.vue'
export default {
    props: ['bannerData','serverTime'],
    components: {
      countdown
    },
    data() {
        return {
        // swiper使用参数
         swiperOption: {
            // autoHeight: true,  //自动高度
            pagination: {
                el: '.swiper-pagination'
            },
          },
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

</style>