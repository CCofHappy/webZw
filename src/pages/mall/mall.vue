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
          <div slot="center" class="search"><i class="iconfont icon-sousuo"></i> 快速搜索</div>
          <router-link to="#" slot="right">
              <div class="iconBox">
                <i class="iconfont">&#xe65a;</i>
                <span>购物车</span>
              </div>
          </router-link>
      </yd-navbar>
    </div>
    <bannera class="margin-top-lg" :bannerData="bannerData1"></bannera>
    <div v-if="bannerData4">
        <div class="box-type">
          <b class="cn">正在热拍</b>
          <div class="en margin-top-xs">UNDER AUCTION</div>
        </div>
      <bannerd class="list-child" :bannerData="bannerData4" :serverTime="serverTime"></bannerd>
    </div>

    <div v-if="daySale.length">
      <router-link to="/session/daily">
       <div class="box-type">
        <b class="cn">每日一拍</b>
        <div class="en margin-top-xs">Recommended collection</div>
        <i class="iconfont icon-Slice"></i>
       </div>
      </router-link>
      <!-- 每日一拍拍品列表 -->
      <goods :listData="daySale"></goods>
    </div>

    <div v-if="bannerData3.length" class="padding-top-md padding-bottom-md">
       <div class="lists">
        <router-link to="/goods/pick">
         <div class="child">
            <b class="cntitle">饮用精选</b>
            <p class="entitle">DRINK SELECTION</p>
            <i class="iconRight iconfont icon-Slicex13"></i>
          </div>
        </router-link>
        <bannerc :bannerData="bannerData3"></bannerc>
      </div>
    </div>


    <div v-if="outSale.length">
        <div class="box-type">
          <b class="cn">历史拍卖</b>
          <div class="en margin-top-xs">Recommended collection</div>
        </div>
        <!-- 拍场轮播 -->
      <bannerb :bannerData="bannerData2"></bannerb>


       <div class="lists padding-top-md">
        <router-link to="/goods/history">
          <div class="child">
            <b class="cntitle">历史拍品</b>
            <p class="entitle">DRINK SELECTION</p>
            <i class="iconRight iconfont icon-Slicex13"></i>
          </div>
        </router-link>
          <!-- 历史拍品列表 -->
          <goods :listData="outSale"></goods>

      </div>
    </div>
  </div>
</template>

<script>
import bannera from '@/components/banner/banner-a.vue'
import bannerb from '@/components/banner/banner-b.vue'
import bannerc from '@/components/banner/banner-c.vue'
import bannerd from '@/components/banner/banner-d.vue'
import goods from '@/components/lists/Lists.vue'
import loading from '@/components/common/loading.vue'
export default {
  name: 'mall',
  components: {
        bannera,
        bannerb,
        bannerc,
        bannerd,
        goods,
        loading
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
       serverTime:null,  //服务器时间
    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {
    this.$nextTick(function () {
      window.scroll(0,1000)
    })

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
       this.serverTime = serverTime;
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
</style>
