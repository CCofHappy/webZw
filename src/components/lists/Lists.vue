 
<template>
     <yd-list theme="2" class="ydlist">
     	 <!--:href="`/detail/good/${item.auctionSessionSeq}/${item.auctionGoodsSeq}`"-->
 	    <router-link  v-for="item, key in listData" :key="key" :to="{name:'goodsDetail',params:{Gseq: `${item.auctionGoodsSeq}`, Sseq: `${item.auctionSessionSeq}`}}"> 
        <yd-list-item>
            <img slot="img" v-if="item.auctionGoodsIcon" :src="item.auctionGoodsIcon">
            <img slot="img" v-else="item.auctionGoodsIcon" src="@/assets/applogo.png">
            <span slot="title">{{item.auctionGoodsEName ? item.auctionGoodsEName : 'PORT ELLEN'}}</span>
            <yd-list-other slot="other">
              <span class="title">{{item.auctionGoodsName}}</span>
            </yd-list-other>
            <yd-list-other slot="other" class="otherStatus">
              <div v-if="item.state ==2">
                <span class="PriceTitle">起拍价：</span>
                <span class="priceNum">￥{{item.qiPaiJia}}</span>
              </div>
              <div v-if="item.state ==3">
                <span class="PriceTitle">当前价：</span>
                <span class="priceNum">￥{{item.currPrice}}</span>
              </div>
              <div v-if="item.state ==4">
                <span class="PriceTitle">成交价：</span>
                <span class="priceNum">￥{{item.currPrice}}</span>
              </div>
              <div v-if="item.state ==5">
                <span class="PriceTitle">成交价:流拍</span>
              </div>
            </yd-list-other>
        
        </yd-list-item>
         </router-link> 
    </yd-list>
</template>

<script>
    export default {
        props: ['listData'],
        data() {
            return {
             
            
            }
        },
        methods: {
            
        },
        mounted() { 
            
      },
        
    }
</script>
<style lang="less" scoped>
.ydlist {
  background-color: white;
  .title{
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 0.28rem;
    color: #282828;
    height:0.38rem;
  }
  .yd-list-other{
    margin-top: .1rem;
  }
  .otherStatus {
    height: .38rem;
  }
  .PriceTitle {
    color: #282828;
    font-size: .24rem;
  }
  .priceNum{
    color: #C93B00;
    font-size: 0.32rem;
  }
}
</style>