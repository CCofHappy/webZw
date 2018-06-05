<template>
  <div style="padding-bottom: 1.4rem;">
     
    <div v-if="Number(this.$localStorage.get('client'))">
      <yd-navbar :fixed="true" class="text-center">
        <img slot="center" src="@/assets/logo-txt.png" style="width: 1.6rem;height: auto;">
         <!--  <router-link to="#" slot="left">
            <div class="iconBox">
              <i class="iconfont icon-Slicex10"></i>
              <span>消息</span>
            </div>
          </router-link>
          <div slot="center" class="search"><i class="iconfont icon-sousuo"></i> 快速搜索</div>
          <router-link to="#" slot="right">
              <div class="iconBox" style="margin-right:10px">
                <i class="iconfont icon-Slice8"></i>
                <span>送拍</span>
              </div>
              <div class="iconBox">
                <i class="iconfont icon-Slice8"></i>
                <span>分类</span>
              </div>
          </router-link> -->
      </yd-navbar>
    </div>
    <bannera class="margin-top-lg" :bannerData="bannerData1"></bannera>
     <div class="center-menus">
      <router-link :to="{name:'hotSession'}">
        <div class="left">
          <img src="@/assets/menus1.png">
        </div>
      </router-link> 
      <div class="right">
        <router-link :to="{name:'previewSession'}">
          <div class="up">
            <img src="@/assets/menus2.png">
          </div>
        </router-link>
        <router-link :to="{name:'historySession'}">
          <div class="down">
            <img src="@/assets/menus3.png">
          </div>
        </router-link>
      </div>
    </div>
    <div v-if="bannerData4">
      <!-- <router-link to="/session/hot"> -->
        <div class="box-type">
          <b class="cn">正在热拍</b>
          <div class="en margin-top-xs">UNDER AUCTION</div>
          <!-- <i class="iconfont icon-Slicex13"></i> -->
        </div>
      <!-- </router-link> -->
      <bannerd class="list-child" :bannerData="bannerData4" :serverTime="serverTime"></bannerd>
    </div>

    <div v-if="daySale.length">
      <router-link :to="{name: 'dailySession'}">
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
        <router-link :to="{name: 'pick'}">
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
      <!-- <router-link to="/session/history"> -->
        <div class="box-type">
          <b class="cn">历史拍卖</b>
          <div class="en margin-top-xs">Recommended collection</div>
          <!-- <i class="iconfont icon-Slicex13"></i> -->
        </div>
     <!--  </router-link> -->
        <!-- 拍场轮播 -->
      <bannerb :bannerData="bannerData2"></bannerb>
       

       <div class="lists padding-top-md">
        <router-link :to="{name:'history'}">
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
export default {
  name: 'home',
  components: {
        bannera,
        bannerb,
        bannerc,
        bannerd,
        goods,
    },
  data () {
    return {
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
      recruitScrollY(){
        return this.$store.state.position.recruitScrollY;
      }
  },
  methods: {
  
  },
  beforeRouteLeave (to, from, next) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    this.$store.commit('eposition',scrollTop)
    next()
  },
  mounted() {
   this.$store.commit('setLoading',true);
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
         this.$nextTick(function () {
          window.scroll(0,this.recruitScrollY);
           this.$store.commit('setLoading',false);
        });
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
  height: 2.65rem;
  .left,.right{
    width: 50%;
    float: left;
  }
  img {
    width: 100%;
  }
  .left {
    border-right: 1px solid #F1F1F1;
  }
  .up {
    border-bottom: 1px solid #F1F1F1;
  }
}
</style>
