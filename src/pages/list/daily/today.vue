<template>
  <div class="bggray">
      <yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
      </yd-navbar>
       <header class="cl-box headFixed">
         <div class="cl-row">
           <div class="cl-td text-middle active">
              <h2 class="fs18">拍卖中</h2>
              <div>距结束 35小时 50分 37秒</div>
           </div>
          
           <div class="cl-td text-middle">
            <router-link to="/goods/next">
              <h2 class="fs18">14:00</h2>
              <div>明日开拍</div>
            </router-link>
           </div>
         </div>
       </header>

       <div class="content scroll-a">
          <yd-infinitescroll :callback="loadListDown" ref="ls">
              <yd-list theme="4" slot="list">
                 <itemscroll v-for="(item,key) in list" :key="key" class="list-child padding-bottom-md" :item="item" :serverTime="serverTime"></itemscroll>
              </yd-list>
              <span slot="doneTip">没有更多内容~~</span>
               <!-- 加载中提示，不指定，将显示默认加载中图标 -->
              <div slot="loadingTip">
                <scrolLoading></scrolLoading>
              </div>
          </yd-infinitescroll>
       </div>
       <yd-backtop></yd-backtop>
  </div>
</template>

<script>
import itemscroll from '@/components/lists/Itemscroll.vue'
import scrolLoading from '@/components/common/scrolLoading'
export default {
  components: {
      itemscroll,
      scrolLoading
    },
  data () {
    return {
      list:[],
      postData:{
        page:1,
        rows:10,
      },
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
            fly.post('/auction/getMoreHisAuction',this.postData)
             .then((res) => {
              if(res.state == 1){
                this.$store.dispatch('getServerTime')
                const _list = res.data.dataList;
                this.list = [...this.list, ..._list];
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
       
  },
  mounted() {
 
    this.$nextTick(function(){
        this.loadListDown()
    })
   this.$store.dispatch('getServerTime')
  },
  watch: {

  }
}
</script>

<style scoped>
.headFixed {
  position: fixed;
  top: 1rem;
  z-index: 99;
  width: 100%;
}
 .headFixed .cl-td{
    position: relative;
    text-align: center;
    height: 1rem;
    width: 50%;
    background: #272727;
    color: #ffffff;
  }
  .headFixed .active {
    background: #CC723C;
    transition: all .2s cubic-bezier(.55, 0, .1, 1);
   -webkit-overflow-scrolling: touch;
  }
  .headFixed .active:after {
    position: absolute;
    content: " ";
    width:0;
    border-top:.14rem solid #CC723C;
    border-left:.14rem solid #F1F1F1;
    border-right:.14rem solid #F1F1F1;
    bottom: -.14rem;
  }
  .content {
    margin-top: 2.2rem;
  }
</style>
