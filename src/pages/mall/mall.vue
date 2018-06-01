<template>
  <div style="padding-bottom: 1.4rem;">
    <loading v-if="Vloading"></loading>
    <div v-if="Number(this.$localStorage.get('client'))">
      <yd-navbar :fixed="true" class="text-center">
          <router-link to="#" slot="left">
            <div class="iconBox">
              <i class="iconfont icon-Slicex10"></i>
              <span>消息</span>
            </div>
          </router-link>
          <div slot="center" class="search" @click="clickSearch"><i class="iconfont icon-sousuo"></i> 快速搜索</div>
          <router-link to="#" slot="right">
              <div class="iconBox">
                <i class="iconfont">&#xe65a;</i>
                <span>购物车</span>
              </div>
          </router-link>
      </yd-navbar>
    </div>
    <bannera class="margin-top-lg" :bannerData="bannerData1"></bannera>

    <!-- 限时抢购 -->
    <div v-if="outSale.length">
       <div class="lists padding-top-md">
        <router-link :to="{name: 'flashSale'}">
          <div class="child">
            <b class="cntitle">限时抢购</b>
            <!-- <p class="entitle">DRINK SELECTION</p> -->
            <countdowna style="margin-top: .1rem;" :serverTime="serverTimeTest" :startDate="startDateTest" :endDate="endDateTest" :dateType="1"></countdowna>
            <i class="iconRight iconfont icon-Slicex13"></i>
          </div>
        </router-link>
          <yd-list theme="4">
              <!-- <yd-list-item v-for="item, key in list" :key="key">
                  <img slot="img" :src="item.img">
                  <span slot="title">{{item.title}}</span>
                  <yd-list-other slot="other">
                      <div>
                          <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                          <span class="demo-list-del-price">¥{{item.w_price}}</span>
                          <yd-flexbox>
                              <yd-flexbox-item><yd-progressbar class="progress" type="line" :progress="progress" trail-width="8" stroke-width="8" trail-color="#FDB081"></yd-progressbar></yd-flexbox-item>
                              <div>&nbsp;&nbsp;&nbsp;</div>
                              <yd-flexbox-item class="flexbox-fontSize">剩余200件</yd-flexbox-item>
                          </yd-flexbox>
                          <yd-flexbox class="flexBottom">
                              <div class="discount">￥10000</div>
                              <yd-flexbox-item class="originalPrice">￥13000</yd-flexbox-item>
                          </yd-flexbox>
                          <yd-button class="performBtn" bgcolor="#282828" color="#FFF">马上抢</yd-button>
                      </div>
                  </yd-list-other>
              </yd-list-item> -->
              <rush-to-purchase :itemData="list[0]" :purchaseType="true"></rush-to-purchase>
          </yd-list>
       </div>
    </div>
    <div style="height: .2rem;background-color: #F2F2F2;"></div>
    <div>
      <single-mall-list :itemData="singleMallData"></single-mall-list>
    </div>
    <div style="height: .2rem;background-color: #F2F2F2;"></div>
    <div>
      <div class="lists padding-top-md">
        <router-link :to="{name:'allMall'}">
          <div class="child">
            <b class="cntitle">拼团优惠<span class="gray rightSpan"><i class="iconfont icon-Slicex12"></i> <span class="fred">10人团</span></span></b>
            <p class="entitle">限时团购 不容错过</p>
          </div>
        </router-link>
          <yd-list theme="4" style="padding-top: .1rem; padding-bottom: .1rem;">
              <yd-list-item v-for="item, key in list" :key="key">
                  <img slot="img" :src="item.img">
                  <span slot="title">POLT ENLLEN</span>
                  <yd-list-other slot="other">
                      <div>
                          <span class="demo-list-price">波特艾伦25年 19763001 道格拉斯</span>
                          <yd-flexbox>
                              <yd-flexbox-item class="capacity">
                                <span style="padding-right: 0.2rem;">净含量：700ml</span>
                                <span>酒精度：62.3%vol.</span>
                              </yd-flexbox-item>
                          </yd-flexbox>
                          <yd-flexbox class="flexBottom">
                              <div class="discount">￥10000</div>
                              <yd-flexbox-item class="originalPrice">￥13000</yd-flexbox-item>
                          </yd-flexbox>
                          <yd-button class="performBtn" bgcolor="#282828" color="#FFF">去拼团</yd-button>
                      </div>
                  </yd-list-other>
              </yd-list-item>
              <!-- <rush-to-purchase :itemData="list1[1]" :purchaseType="true"></rush-to-purchase> -->
          </yd-list>
       </div>
    </div>
    <div style="height: .2rem;background-color: #F2F2F2;"></div>
    <div>
      <single-mall-list :itemData="singleMallData1"></single-mall-list>
    </div>
    <div>
      <div class="box-type">
        <b class="cn">全部商品</b>
        <div class="en margin-top-xs">PRODUCTS RECOMMENDED</div>
        <router-link :to="{name: 'allMall'}">
          <i class="iconRight iconfont icon-Slicex13"></i>
        </router-link>
      </div>
      <yd-list theme="3">
          <commodityList v-for="item, key in list1" :itemData="item" :key="key"></commodityList>
      </yd-list>
    </div>
  </div>
</template>

<script>
  import bannera from '@/components/banner/banner-a.vue'
  import loading from '@/components/common/loading.vue'
  import countdowna from '@/components/countdown/countdown-a.vue'
  import commodityList from '@/components/lists/commodityList.vue'
  import singleMallList from '@/components/lists/singleMallList.vue'
  import rushToPurchase from "@/components/lists/RushToPurchase"
  export default {
    name: 'mall',
    components: {
          bannera,
          loading,
          commodityList,
          countdowna,
          singleMallList,
          rushToPurchase
      },
    data () {
      return {
         Vloading:false,
         bannerData1:[],
         bannerData2:[],
         bannerData3:[],
         bannerData4:[],
         daySale: [],    //每日一拍
         outSale: [],    //历史拍卖
         // serverTime:null,  //服务器时间
         serverTimeTest: 111100000,
         startDateTest: 111110000,
         endDateTest: 111120000,
         list: [
                      {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36}
                  ],
          list1: [
                      {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                      {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                      {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                      {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                      {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                      {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
                  ],
          progress: 0.5,
          singleMallData: {
            path: "/goods/history",
            title: "珍品预售",
            details: "布朗拉35年 1978-2014",
            describe: "已售：",
            number: "100件",
            img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg"
          },
          singleMallData1: {
            path: "/goods/history",
            title: "稀酿摇号",
            details: "布朗拉35年 1978-2014",
            describe: "参与人数：",
            number: "200人",
            img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg"
          }
      }
    },
    computed: {

    },
    methods: {
      clickSearch() {
        this.$router.push({name: 'search'})
      }
    },
    mounted() {
      // this.$nextTick(function () {
      //   window.scroll(0,1000)
      // })

     this.Vloading = true;
     fly.all([
        this.api.getData(),
        this.api.history(),
        this.api.sessionlist({page:1,rows:5,state:["4"]}),
        this.api.getServerTime()
      ])
      .then(fly.spread((getData, history, sessionlist,serverTime) => {
         this.bannerData1 = getData.data.recommendList;
         this.bannerData2 = sessionlist.data.dataList;
         this.bannerData3 = getData.data.recommend2;
         this.bannerData4 = getData.data.recommendSession;
         this.daySale = getData.data.SessionRecommend1;
         if(history.state){
          this.outSale = history.data;
         }
         // this.serverTime = serverTime;
         setTimeout(()=>{
           this.Vloading = false;
         },500)
      }))
    },
    watch: {

    }
  }
</script>

<style lang="less" scoped>
  .search {
    font-size: 0.28rem;
    background-color: #F1F1F1;
    width: 100%;
    padding: .2rem;
    color: #D3D3D3;
    border-radius: 2px;
  }
  .center-menus {
    height: 1.6rem;
    .left,.right{
      width: 40%;
      float: left;
      height: 1.6rem;
    }

  }
  .progress {width:2.4rem;}
  .yd-progressbar svg {height:.2rem;}
  .yd-list-other {color: #424040;}
  .flexbox-fontSize {font-size:.2rem;}
  .discount {font-size: .36rem; color: #C93B00; padding-right: .1rem;}
  .originalPrice {font-size: .24rem; text-decoration: line-through;}
  .flexBottom {position: absolute; bottom: .1rem;}
  .child {position:relative;}
  .child p {padding-top: .1rem;}
  .rightSpan {position: absolute; font-size: .24rem; right:0px;}

  .capacity {font-size:.24rem; color:#979797; padding-top: .1rem;}

  .performBtn {position: absolute; right:.2rem; bottom: .1rem; color:#CD733B!important;}

  .yd-list-theme4 { padding: 0px; }
  .entitle { margin-bottom: 0px; }
  .timeBox { padding-bottom: 0px !important; }
</style>
