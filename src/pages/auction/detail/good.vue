<!-- 拍品详情 -->
<template>
  <div>
      <titleHead :fixed="true"></titleHead>
      <div class="bannerBox">
        <bannere :bannerData="data.auctionGoodsIcons" style="min-height: 7.5rem;"></bannere>
        <countdownc id="fixedCount" class="positionCount"  :class="{'isFixed': winscoHeight}" :endDate="data.endTime" :startDate="data.startTime" :serverTime="serverTime"></countdownc>
      </div>
      <div class="padding-sm">
        <p class="priceText" v-if="data.state < 3"> 
          <span class="text">起拍价：</span><span class="num">￥{{data.qiPaiJia}}</span>
        </p>
         <p class="priceText" v-if="data.state == 3"> 
          <span class="text">当前价：</span><span class="num">￥{{data.currPrice}}</span>
        </p>
         <p class="priceText" v-if="data.state == 4"> 
          <span class="text">成交价：</span><span class="num">￥{{data.currPrice}}</span>
        </p>
        <p class="priceText" v-if="data.state == 5"> 
           <span class="num">流拍</span>
        </p>
        <p class="gray margin-top-xs">NO.{{data.auctionGoodsCode}}</p>
        <h2 class="fs18 margin-top-sm">{{data.auctionGoodsEName}} {{data.auctionGoodsName}}</h2>
        <div class="childTitle">
          <div class="crow">
            <span class="l">保证金：￥{{data.bond}}</span>
            <span class="c">保留价：{{data.lowState}}</span>
            <span class="r">起拍价：¥ {{data.qiPaiJia}}</span>
          </div>
          <div class="crow">
            <span class="l">加价幅度：¥ {{data.jiaJiaStep}}</span>
            <span class="c">预估价：¥ {{data.referencePriceMin < 10000?data.referencePriceMin:data.referencePriceMin/10000+'万'}}-{{data.referencePriceMax < 10000?data.referencePriceMax:data.referencePriceMax/10000+'万'}}</span>
          </div>
        </div>
      </div>


      <!-- 出价记录 -->
      <router-link  v-if="data.bond" :to="`/detail/record/${$route.params.Gseq}`" class="bidRecord">
        <p><span class="fs18 fw600">出价记录</span><i class="iconfont icon-Slicex13 gray pull-right"></i></p>
        <!-- <div class="margin-top-sm" v-for="item,key in note.slice(0,3)"> -->
        <div class="margin-top-md">
          <span>P6789</span>
          <span class="margin-left-lg padding-right-md margin-right-md">04-12 12:23:50</span>
          <span class="bgred white fs10 padding-xxs">领先</span>
          <span class="red pull-right">￥13000</span>
        </div>
        <div class="margin-top-md">
          <span>P6789</span>
          <span class="margin-left-lg padding-right-md margin-right-md">04-12 12:23:50</span>
          <span class="bgdgray white fs10 padding-xxs">出局</span>
          <span class="red pull-right">￥13000</span>
        </div>
        <div class="margin-top-md">
          <span>P6789</span>
          <span class="margin-left-lg padding-right-md margin-right-md">04-12 12:23:50</span>
          <span class="bgdgray white fs10 padding-xxs">无效</span>
          <span class="red pull-right">￥13000</span>
        </div>
      </router-link>
     
      <aboutSale></aboutSale>
      <h1 class="fs18 padding-sm margin-top-md">
         拍品信息
      </h1>
      <yd-cell-group class="goodsMes">
          <yd-cell-item>
              <span slot="left">
                <span class="name">品牌：</span>
                <span class="val">{{data.brandInfo}}</span>
              </span>
              <span slot="right">
                <span class="name">净含量：</span>
                <span class="val">{{data.jingHangLiang}}ml</span>
              </span>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">
                <span class="name">数量：</span>
                <span class="val">{{data.auctionNumber}}</span>
              </span>
              <span slot="right">
                <span class="name">酒精度：</span>
                <span class="val">{{data.jiuJingDu}}%</span>
              </span>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">
                <span class="name">年份：</span>
                <span class="val">{{data.auctionYearTime}}年</span>
              </span>
              <span slot="right">
                <span class="name">水位：</span>
                <span class="val">{{data.waterLevel}}</span>
              </span>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">
                <span class="name">现重：</span>
                <span class="val">{{data.weight}}g</span>
              </span>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">
                <span class="name">备注：</span>
                <span class="val">{{data.remark}}</span>
              </span>
          </yd-cell-item>
      </yd-cell-group>
      <h1 class="fs18 padding-sm margin-top-md">
         拍品详情
      </h1>
      <div class="detailImg margin-bottom-lg">
        <img v-for="item in data.auctionGoodsIcons" :src="item.auctionGoodsPath">
      </div>
      <footer class="detailsFooter">
        <a href="javascript:void(0)">
          <i class="iconfont icon-Slice4"></i>
          <span>客服</span>
        </a>
        <a href="javascript:void(0)" @click="favorite()">
          <i v-if="isNotFavorite == 1" class="iconfont icon-Slice1"></i>
          <i v-if="isNotFavorite == 0" class="iconfont icon-Slice2"></i>
          <span>收藏</span>
        </a>
        <yd-button v-if="data.state == 3 && bondPayedOrNot == 1" class="sky-btn sky-btn-orange" @click.native="bidden" type="primary">立即出价</yd-button>
        <yd-button v-if="data.state <= 3 && bondPayedOrNot == 0" class="sky-btn sky-btn-orange" @click.native="goPayBoon" type="primary">交保证金￥{{data.bond}}</yd-button>
        <yd-button v-if="data.state == 2 && bondPayedOrNot == 1"  class="sky-btn sky-btn-orange" type="primary">已交保证金</yd-button>
        <yd-button v-if="data.state > 3 && data.isNegotiate == 0" class="sky-btn sky-btn-orange" @click.native="negotiate" type="primary">洽谈</yd-button>
        <yd-button v-if="data.state > 3 && data.isNegotiate == 1" class="sky-btn sky-btn-orange" type="primary">已洽谈</yd-button>
      </footer>
      <!-- 出价组件 -->
      <bidden></bidden>
      <!-- 私洽组件 -->
      <negotiate></negotiate>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import bannere from '@/components/banner/banner-e.vue'
import aboutSale from '@/components/text/aboutSale.vue'
import bidden from '@/components/common/bidden'
import negotiate from '@/components/common/negotiate'
import countdownc from '@/components/countdown/countdown-c'
import { mapState, mapMutations} from 'vuex'
export default {
  components: {
      titleHead,
      bannere,
      aboutSale,
      bidden,
      negotiate,
      countdownc
    },
  data () {
    return {
      postData : {
        auctionGoodsSeq:parseInt(this.$route.params.Gseq),
        auctionSessionSeq:parseInt(this.$route.params.Sseq),
        customerSeq:parseInt(Cookie.get('userSeq')),
      },
      bondPayedOrNot: null,
      isNotFavorite: null,
      data: {},     //拍品详情
      note: {},     //出价记录
      winscoHeight:false,
      offsetTop:null,
    }
  },
  computed: {
      ...mapState({
      serverTime: state => state.server.serverTime,
    })
  },
  methods: {
     ...mapMutations([
           'setBiddenData',
           'setBiddenPopup',
           'setNegotiateData',
           'setNegotiatePopup',
           'setPayUrl'
    ]),
    // 出价弹出框
    bidden(){
        this.setBiddenData(this.data);
        this.setBiddenPopup(true);
    },
    // 私洽弹出框
    negotiate(event) {
        event.cancelBubble = true;
        this.setNegotiateData(this.data);
        this.setNegotiatePopup(true);
    },
    // 收藏
    favorite() {
      let status = this.isNotFavorite ? 0 : 1;
      this.api.favorite({auctionGoodsSeq:this.$route.params.Gseq, customerSeq:parseInt(Cookie.get('userSeq')), status:status})
      .then((res) => {
        if(res.state){
          this.isNotFavorite = this.isNotFavorite ? 0 : 1
          const message=  this.isNotFavorite ? '收藏成功'  : '取消收藏成功'
          this.$dialog.toast({
              mes: message,
              timeout: 1500,
              icon: 'success'
          });
        }
      })
    },
     // 去交保证金
    goPayBoon() {
        // 把支付前地址存起来，用于三方支付完之后跳转
        this.setPayUrl(window.location.href);
        this.$router.push({
            name:'boonPay',
            query:{
                sessionSeq:this.$route.params.Sseq,
                goodsSeq:this.$route.params.Gseq
            }
        })
    },
    // 滚动监听-倒计时吸顶
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(!this.offsetTop && document.querySelector('#fixedCount')){
        this.offsetTop = document.querySelector('#fixedCount').offsetTop;
      }
      if(scrollTop >= this.offsetTop){
         this.winscoHeight = true;
      }else {
        this.winscoHeight = false;
      }
    },

  },
  mounted() {
    
    fly.all([this.api.goodsDetail(this.postData), this.api.bondPayedOrNot(this.postData), this.api.isNotFavorite(this.postData)])
    .then(fly.spread((goodsDetail, bondPayedOrNot, isNotFavorite)=> {
        this.data = goodsDetail.data.AuctionInfo
        this.note = goodsDetail.data.auctionRecord
        this.bondPayedOrNot = bondPayedOrNot.state
        this.isNotFavorite = isNotFavorite.state
        this.$store.dispatch('getServerTime');//更新服务器时间
        window.scroll(0,0)
    }))
    .catch((error)=>{
      console.log(error)
    })


    this.$nextTick(function(){
       window.addEventListener('scroll', this.handleScroll)
    })
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped lang="less">
.bannerBox {
  position: relative;
  .positionCount {
    position: absolute;
    bottom: 0rem;
    z-index:10;
    width: 100%;
   }
   .isFixed {
    position: fixed;
    top: 1rem;
    width: 100%;
    height: 2rem;
    z-index: 99999;
   }
}
 .priceText {
  height: 0.56rem;
  font-size: 0.32rem;
    span{
       float: left;
    }
    .text {
      margin-top: 0.04rem;
    }
    .num {
      font-size: 0.4rem;
      color: #C93B00;
      font-weight: 600;
    }
 }
 .childTitle {
  margin-top: 0.4rem;
  color: #A8A8A8;
  font-size: 0.24rem;
  .crow {
    margin-top: 0.2rem;
    span {
      display: inline-block;
    }
    .l {
      width: 2.8rem;
    }
    .r {
      float: right;
    }
  }
 }
 .goodsMes {
   .name {
    color: #AFAFAF;
   }
   .name,.val {
     font-size: .28rem;
   }
   .val {
    white-space: initial;
   }
 }
 .detailImg{
  img{
    width: 100%;
  }
 }
 
 
 .bidRecord {
  display: block;
  margin-top: .4rem;
  padding: .4rem .2rem 0;
  border-top: 1px solid #F2F2F2;
 }
</style>
