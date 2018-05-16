<template>
  <div>
    <titleHead :fixed="true"></titleHead>
    
      <img class="detailImg" :src="session.auctionSessionIcon">
    <div class="detail-box margin-top-xs list-child">
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
     <div class="text-left">
       <article v-if="session.auctionSessionDesc">
         <h1 class="fs16 margin-top-sm">专场介绍</h1>
         <p class="margin-top-sm fblack">
          {{ session.auctionSessionDesc }}
         </p>
       </article>
       <span style="display:inline-block" v-if="session.state > 3" class="gray fs10 margin-top-sm">结束时间：{{formtDate(session.auctionSessionEnd,3)}}</span>
     </div>
    </div>
    <goodslist></goodslist>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import countdowna from '@/components/countdown/countdown-a.vue'    
import goodslist from '@/components/lists/scrolGoodslList.vue'
export default {
  components: {
        titleHead,
        countdowna,
        goodslist
    },
  data () {
    return {
      serverTime:null,
        postData:{
          page:1,
          rows:10,
          customerSeq:parseInt(Cookie.get('userSeq')),
          auctionSessionSeq:parseInt(this.$route.params.seq),
          term:0,
        },
        // 拍场详情
        session:{

        },
        // 拍场下的列表数据
        showAuction:[]
    }
  },
  computed: {
      
  },
  methods: {
    // 更新服务器时间
      upTime() {
         this.api.getServerTime()
         .then((res) => {
          this.serverTime = res;
         })
      },
  	 updata(callback){
        this.upTime()
        this.api.sessionDetail(this.postData)
       .then((res) => {
          this.session = res.data.session;
          this.showAuction = res.data.showAuction;
          if( typeof callback == 'function'){
            callback(this.showAuction);
          }
       })
     }
  },
  mounted() {
   
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
  padding: 0 .2rem .4rem;
}
</style>
