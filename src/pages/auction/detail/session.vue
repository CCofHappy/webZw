<!-- 拍场详情 -->
<template>
  <div class="bggray">
    <titleHead :fixed="true"></titleHead>

      <img class="detailImg" :src="session.auctionSessionIcon">
    <div class="detail-box bgwhite list-child">
      <countdowna v-if="session.state <=3" :startDate="session.auctionSessionStart" :serverTime="serverTime" :endDate="session.auctionSessionEnd" :dateType="1"></countdowna>
      <!-- 拍卖结束后直接显示结束时间即可 -->

     <yd-flexbox class="fs10">
        <yd-flexbox-item  class="text-left fgray">
          拍品：<span class="fred">{{session.auctionCount}}件</span>
        </yd-flexbox-item>
        <yd-flexbox-item class="text-center fgray">
          出价次数：<span class="fred">{{session.printCount}}次</span>
        </yd-flexbox-item>
        <yd-flexbox-item class="text-right fgray">
          围观：<span class="fred">{{session.surroundCatchCount}}次</span>
        </yd-flexbox-item>
     </yd-flexbox>
     <div  style="padding-bottom: .3rem;">
       <article class="text-left margin-top-md" v-if="session.auctionSessionDesc">
         <h1 class="fs16">专场介绍</h1>
         <p class="margin-top-sm" style="color:#5F5F5F;">
          {{ session.auctionSessionDesc }}
         </p>
       </article>
       <span style="display:inline-block" v-if="session.state > 3" class="gray fs10 margin-top-sm">结束时间：{{formtDate(session.auctionSessionEnd,3)}}</span>
     </div>
    </div>
    <!-- 拍场下的拍品列表 -->
    <yd-infinitescroll :callback="loadListDown" ref="ls" class="scroll-a">
        <yd-list theme="4" slot="list">
          <itemscroll v-for="(item,key) in list" :key="key" class="list-child" :item="item" :serverTime="serverTime"></itemscroll>
        </yd-list>
        <span slot="doneTip">没有更多内容~~</span>
         <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <div slot="loadingTip">
          <scrolLoading></scrolLoading>
        </div>
    </yd-infinitescroll>
    <!-- 出价tab选项卡 -->
    <bidden @myEvent="biddenCB"></bidden>
    <!-- 私洽弹窗 -->
    <negotiate></negotiate>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import countdowna from '@/components/countdown/countdown-a.vue'
import itemscroll from '@/components/lists/Itemscroll.vue'
import scrolLoading from '@/components/common/scrolLoading'
import bidden from '@/components/common/bidden'
import negotiate from '@/components/common/negotiate'
export default {
  components: {
        titleHead,
        countdowna,
        itemscroll,
        scrolLoading,
        bidden,
        negotiate
    },
  data () {
    return {
        list:[],
        postData:{
          page:1,
          rows:10,
          customerSeq:parseInt(Cookie.get('userSeq')),
          auctionSessionSeq:parseInt(this.$route.params.seq),
          term:0,
        },
        // 拍场详情
        session:{},
    }
  },
  computed: {
      serverTime () {
        return this.$store.state.server.serverTime
      }
  },
  methods: {
     // 滚动加载
      loadListDown() {
        this.api.sessionDetail(this.postData)
       .then((res) => {
          if(res.state == 1){
              this.session = res.data.session;
              const _list = res.data.showAuction.dataList;
              this.list = [...this.list, ..._list];
              this.$store.dispatch('getServerTime');
              // 当最后一页的数据少于一页的数据或者页数等于后台返回的总页数时，就是全部加载完毕
              if (_list.length < this.postData.rows || this.postData.page >= res.data.pageCount) {
                  // 所有数据加载完毕
                  this.$refs.ls.$emit('ydui.infinitescroll.loadedDone');
                  return;
              }
              this.$refs.ls.$emit('ydui.infinitescroll.finishLoad');
              this.postData.page++;
          }

       })
      },
      //出价后的回调函数
      biddenCB(){
      	this.postData.page = 1;
      	this.list = [];
      	this.loadListDown()
      }
      
  },
  mounted() {
   this.$nextTick(function(){
        this.loadListDown()
    })
   this.$store.dispatch('getServerTime')
  },
  watch: {
    $route() {

    }
  }
}
</script>

<style scoped>
.detailImg {
  width: 100%;
  height: 4rem;
}
.detail-box {
  position: relative;
  top: -0.04rem;
  padding: .3rem .2rem;
}
</style>
