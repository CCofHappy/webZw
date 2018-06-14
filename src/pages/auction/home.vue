<template>
  <div style="padding-bottom: 1.4rem;">
    <div v-if="Number(this.local.get('client'))">
      <yd-navbar :fixed="true" class="text-center">
        <img slot="center" src="@/assets/logo-txt.png" style="width: 1.6rem;height: auto;">
      </yd-navbar>
      <div style="height: 1rem;"></div>
    </div>
    <bannera :bannerData="bannerData1"></bannera>
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
    <div v-if="bannerData4.length">
        <div class="box-type">
          <b class="cn">正在热拍</b>
          <div class="en margin-top-xs">UNDER AUCTION</div>
        </div>
      <bannerd v-for="item,key in bannerData4" :key="key" class="list-child" :bannerData="item"></bannerd>
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


    <div v-if="bannerData2.length">
        <div class="box-type">
          <b class="cn">历史拍卖</b>
          <div class="en margin-top-xs">Recommended collection</div>
        </div>
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
 
  },
  methods: {
  
  },
 
  mounted() {
   this.$store.commit('setLoading',true);
   fly.all([
      this.api.getData(), 
      this.api.history({auctionSessionType:0}), 
      this.api.sessionlist({page:1,rows:5,state:["4"]}),
    ])
    .then(fly.spread((getData, history, sessionlist) => {
       this.bannerData1 = getData.data.recommendList ? getData.data.recommendList : [];
       this.bannerData2 = sessionlist.data.dataList ? sessionlist.data.dataList : [];
       this.bannerData3 = getData.data.recommend2 ? getData.data.recommend2 : [];
       this.bannerData4 = getData.data.recommendSession ? getData.data.recommendSession : [];
       this.daySale = getData.data.SessionRecommend1 ? getData.data.SessionRecommend1 : [];
       if(history.state){
        this.outSale = history.data;
       }
       this.$store.commit('setLoading',false);
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
