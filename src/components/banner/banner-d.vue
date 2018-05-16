<!-- 正在拍卖轮播类型 -->
 <template>
  <div class="tembg">
    <router-link :to="{name:'sessionDetail',params:{seq: `${bannerData.auctionSessionSeq}`}}">
        <div class="clearfix margin-bottom-sm">
          <div class="pull-left text-left">
             <div class="cntitle text-left">{{bannerData.auctionSessionName}}</div>
             <!-- 预展中和拍卖中的都要显示倒计时 -->
             <countdowna v-if="bannerData.state <=3" :serverTime="serverTime" :startDate="bannerData.auctionSessionStart" :endDate="bannerData.auctionSessionEnd" :dateType="1"></countdowna>
             <!-- 拍卖结束后直接显示结束时间即可 -->
             <span v-if="bannerData.state > 3" class="gray">结束时间：{{formtDate(bannerData.auctionSessionEnd,3)}}</span>
          </div>
          <div class="pull-right">
            <p class="gray padding-top-sm">围观：<span class="fred">{{bannerData.surroundCatchCount}}次</span></p>
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
      <!--
      <swiper-slide class="slideChild" v-if="bannerData.children">
          <yd-grids-group :rows="3" item-height="4rem">
              <yd-grids-item v-for="item, key in bannerData.children.slice(0, 3)" :key="key">
                  <div slot="else" style="text-align: center;">
                      <img :src="item.auctionGoodsIcon" style="width:100%;">
                      <div class="text-left">
                        <b class="enGoodsName">{{item.enGoodsName}}</b>
                        <p class="enGoodsName">{{item.auctionGoodsName}}</p>
                        <p>
                          <span class="PriceTitle-xs">起拍价：</span>
                          <span class="priceNum-sm">￥{{item.curprice}}</span>
                        </p>
                      </div>
                  </div>
              </yd-grids-item>
          </yd-grids-group>
      </swiper-slide>
      <swiper-slide class="slideChild" v-if="bannerData.children.length > 3">
          <yd-grids-group :rows="3" item-height="4rem">
              <yd-grids-item v-for="item, key in bannerData.children.slice(3, 6)" :key="key">
                  <div slot="else" style="text-align: center;">
                      <img :src="item.auctionGoodsIcon" style="width:100%;">
                      <div class="text-left">
                        <b class="enGoodsName">{{item.enGoodsName}}</b>
                        <p class="enGoodsName">{{item.auctionGoodsName}}</p>
                        <p>
                          <span class="PriceTitle-xs">起拍价：</span>
                          <span class="priceNum-sm">￥{{item.curprice}}</span>
                        </p>
                      </div>
                  </div>
              </yd-grids-item>
          </yd-grids-group>
      </swiper-slide>
      <swiper-slide class="slideChild">
        <yd-grids-group :rows="3" item-height="4rem">
              <yd-grids-item v-for="item, key in bannerData.children.slice(6, 9)" :key="key">
                  <div slot="else" style="text-align: center;">
                      <img :src="item.auctionGoodsIcon" style="width:100%;">
                      <div class="text-left">
                        <b class="enGoodsName">{{item.enGoodsName}}</b>
                        <p class="enGoodsName">{{item.auctionGoodsName}}</p>
                        <p>
                          <span class="PriceTitle-xs">起拍价：</span>
                          <span class="priceNum-sm">￥{{item.curprice}}</span>
                        </p>
                      </div>
                  </div>
              </yd-grids-item>
          </yd-grids-group>
      </swiper-slide>
      -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
import countdowna from '@/components/countdown/countdown-a.vue'
export default {
    props: ['bannerData','serverTime'],
    components: {
      countdowna
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
.tembg {
  padding-left: .2rem;
  padding-right: .2rem;
  padding-bottom: .5rem;
  background: white;
  position: relative;;
}
</style>