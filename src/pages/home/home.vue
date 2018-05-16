<template>
  <div>
    <!-- <loading v-if="Vloading"></loading> -->
    <div v-if="Number(this.$localStorage.get('client'))" class="searchead">
      <yd-navbar :fixed="true">
          <router-link to="#" slot="left">
            <div class="iconBox">
              <i class="iconfont icon-Shapecopy"></i>
              <span>消息</span>
            </div>
          </router-link>
          <div slot="center" class="search"><i class="iconfont icon-sousuo"></i> 快速搜索</div>
          <router-link to="#" slot="right">
              <div class="iconBox" style="margin-right:10px">
                <i class="iconfont icon-paimaichui"></i>
                <span>送拍</span>
              </div>
              <div class="iconBox">
                <i class="iconfont icon-leimupinleifenleileibie"></i>
                <span>分类</span>
              </div>
          </router-link>
      </yd-navbar>
    </div>
    <bannera :bannerData="bannerData1"></bannera>
     <div class="center-menus">
      <router-link to="/session/hot">
        <div class="left">
          正在热拍
        </div>
      </router-link> 
      <div class="right">
        <router-link to="/session/preview">
          <div class="up">
             预展专区
          </div>
        </router-link>
        <router-link to="/session/history">
          <div class="down">
             历史专区
          </div>
        </router-link>
      </div>
    </div>
    <div class="cell-box">
      <router-link to="/session/hot">
        <div class="box-type">
          <b class="cn">正在热拍</b>
          <div class="en">UNDER AUCTION</div>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
      <bannerd class="list-child padding-bottom-md" :bannerData="bannerData4" :serverTime="serverTime"></bannerd>
    </div>

    <div class="cell-box" v-if="daySale.length">
      <router-link to="/session/daily">
       <div class="box-type">
        <b class="cn">每日一拍</b>
        <div class="en">Recommended collection</div>
        <i class="iconfont icon-youjiantou"></i>
       </div>
      </router-link>
      <!-- 每日一拍拍品列表 -->
      <goods :listData="daySale"></goods>
    </div>

    <div class="cell-box" v-if="outSale.length">
       <div class="lists margin-top-sm padding-top-sm padding-bottom-xs">
        <router-link to="/goods/pick">
         <div class="text-left">
            <b class="cntitle">饮用精选</b>
            <p class="entitle">DRINK SELECTION</p>
            <i class="iconRight iconfont icon-youjiantou"></i>
          </div>
        </router-link>
        <bannerc :bannerData="bannerData3"></bannerc>

      </div>
    </div>


    <div class="cell-box" v-if="outSale.length">
      <router-link to="/session/history">
        <div class="box-type">
          <b class="cn">历史拍卖</b>
          <div class="en">Recommended collection</div>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </router-link>
        <!-- 拍场轮播 -->
      <bannerb :bannerData="bannerData2"></bannerb>
       

       <div class="lists margin-top-sm padding-top-sm">
        <router-link to="/goods/history">
          <div class="text-left">
            <b class="cntitle">历史拍品</b>
            <p class="entitle">DRINK SELECTION</p>
            <i class="iconRight iconfont icon-youjiantou"></i>
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
import goods from '@/components/lists/goodsList.vue'
import loading from '@/components/common/loading.vue'
export default {
  name: 'home',
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
       this.outSale = history.data;
       this.serverTime = serverTime;
       setTimeout(()=>{
         this.Vloading = false;
       },500)
    }))
  },
  watch: {
    // 如有必要再加路由监听
    $route() {
       
    }
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
    width: 50%;
    float: left;
    height: 1.6rem;
  }
  
}

.box-type {
  position: relative;
  width: 100%;
  height: 1.48rem;
  padding-top: .32rem;
  background-color:#F1F1F1;
  text-align: center;
  .cn {
    font-size: 0.4rem;
    color: #282828;
  }
  .en {
    font-size: 0.2rem;
    color: #979797;
    letter-spacing: 5px;
  }
  .iconfont {
    position: absolute;
    top: .5rem;
    right: 0.2rem;
    font-size: 0.52rem;
    color: #CCCCCC;
  }
}
.lists {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  background-color: white;
  position: relative;
  .iconRight {
    position: absolute;
    top: .4rem;
    right: 0.2rem;
    font-size: 0.52rem;
    color: #CCCCCC;
  }
}
</style>
