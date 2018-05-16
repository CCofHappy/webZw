 
<template>
     <yd-list theme="2" class="ydlist">
        <yd-list-item v-for="item, key in listData" :key="key">
            <img slot="img" v-if="item.auctionGoodsIcon" :src="item.auctionGoodsIcon">
            <img slot="img" v-else="item.auctionGoodsIcon" src="@/assets/applogo.png">
            <span slot="title">BRORA</span>
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
  .yd-list-theme2 .yd-list-item:nth-child(odd) {
    padding-right: .1rem;
  }
  .yd-list-other{
    margin-top: .16rem;
  }
  .otherStatus {
    height: .38rem;
  }
  .PriceTitle {
    color: #282828;
  }
  .priceNum{
    color: #C93B00;
    font-size: 0.32rem;
  }
}
</style>