<template>
  <div class="bggray">
      <titleHead :bg="'#F7F7F7'" :fixed="true"></titleHead>
      <yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
        <yd-infinitescroll :callback="loadListDown" ref="ls">
            <yd-list theme="4" slot="list">
              <itemscroll v-for="(item,key) in list" :key="key" class="list-child" :item="item" :serverTime="serverTime"></itemscroll>
            </yd-list>
            <span slot="doneTip">没有更多内容~~</span>
             <!-- 加载中提示，不指定，将显示默认加载中图标 -->
            <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
        </yd-infinitescroll>
        <yd-backtop></yd-backtop>
    </yd-pullrefresh>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import itemscroll from '@/components/lists/Itemscroll.vue'
import scrolLoading from '@/components/common/scrolLoading'
export default {
  components: {
      titleHead,
      itemscroll,
      scrolLoading,
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
 			//记录上次这个页面滚动的高度和加载到第几页的数据
      scrollList(){
        return this.$store.state.position.scrollList;
      },
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
        //初始化页面(无限加载的场景)（如果页数不多的场景，可以直接只存高度，然后进行滚动触发）
        getData(){
         	if(this.scrollList.scrollTop) {
         			this.postData.rows = this.scrollList.page*10;
         	}
         	 fly.post(this.postUrl,this.postData)
     		  .then((res) => {
     		  	this.list = res.data.dataList;
     		  	this.$nextTick(()=>{
     		  		window.scroll(0,this.scrollList.scrollTop);
     		  		//滚动到指定高度后，要还原请求参数
     		  		this.postData.page = this.scrollList.page + 1;
     		  		this.postData.rows = 10;
     		  		//加载完后要初始化vuex的数据
 		  		  	this.$store.commit('initScrollList');
     		  	})
     		  })
        }
        
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
    this.getData()
    this.$store.dispatch('getServerTime')
  },
  watch: {
    $route() {
       
    }
  },
  beforeRouteLeave (to, from, next) {
  	//离开页面之前记录好滚动到第几页和滚动高度
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    var scroll = {
    	page:this.postData.page,
    	scrollTop:scrollTop
    }
    this.$store.commit('setScrollList',scroll);
    next()
  },
}
</script>

<style scoped>
 
</style>
