<template>
  <div class="bggray">
    <transition name="fade">
      <loading v-if="Vloading"></loading>
    </transition>
      <titleHead :bg="'#F7F7F7'" :fixed="true"></titleHead>
      <yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
        <yd-infinitescroll :callback="loadListDown" ref="ls">
            <yd-list theme="4" slot="list">
              <itemscroll v-for="(item,key) in list" :key="key" class="list-child" :item="item" :serverTime="serverTime"></itemscroll>
            </yd-list>
            <span slot="doneTip">没有更多内容~~</span>
             <!-- 加载中提示，不指定，将显示默认加载中图标 -->
            <div slot="loadingTip">
              <scrolLoading></scrolLoading>
            </div>
        </yd-infinitescroll>
        <yd-backtop></yd-backtop>
    </yd-pullrefresh>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import itemscroll from '@/components/lists/Itemscroll.vue'
import scrolLoading from '@/components/common/scrolLoading'
import loading from '@/components/common/loading.vue'
export default {
  components: {
      titleHead,
      itemscroll,
      scrolLoading,
      loading
    },
  data () {
    return {
      Vloading:true,
      postUrl: '',
      list:[],
      // postData,作为请求的入参和无限加载的固定字段，不能随意修改
      postData:{
        page:1,
        rows:10,
      },
    }
  },
  computed: {
      serverTime () {
        return this.$store.state.server.serverTime
      },
      listScrollY(){
        return this.$store.state.position.listScrollY;
      }
  },
  methods: {
 
    // 下载刷新，重新获取新数据
        loadListUp() {
          this.page = 1;
            fly.post(this.postUrl,this.postData)
             .then((res) => {
              if(res.state == 1){
                this.$store.dispatch('getServerTime')
                const _list = res.data.dataList;
                this.list = _list;
                this.$dialog.toast({
                    mes:'更新成功'
                });
                this.$refs.prdemo.$emit('ydui.pullrefresh.finishLoad');
              }
           })
        },
        // 滚动加载
        loadListDown() {
            fly.post(this.postUrl,this.postData)
             .then((res) => {
              if(res.state == 1){
                this.$store.dispatch('getServerTime')
                const _list = res.data.dataList;
                this.list = [...this.list, ..._list];
                this.$nextTick(function () {
                  window.scroll(0,this.listScrollY)
                  setTimeout(()=>{this.Vloading = false;},500)
                });
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
     // 判断是哪种列表，通过路由name来对应加载不同的数据
    switch(this.$route.name) {
      case 'history':
      this.postUrl = 'app/auction/getMoreHisAuction'    //历史拍卖
      break;
      case 'dailyHistory':
      // 缺少接口，暂时用了历史拍品的接口替代测试
      this.postUrl = 'app/auction/getMoreHisAuction'   //每日一拍历史拍卖
      break;
      case 'pick':
      this.postUrl = 'app/homepage/getChoiceAndCollection' //饮用精选
      break;
      default:
      this.$router.push({name:'error'})
    }
    this.$nextTick(function(){
        this.loadListDown()
    })
   this.$store.dispatch('getServerTime')
  },
  watch: {
    $route() {
       
    }
  },
  beforeRouteLeave (to, from, next) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    this.$store.commit('elist',scrollTop)
    next()
  },
}
</script>

<style scoped>
 
</style>
