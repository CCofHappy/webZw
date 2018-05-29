<template>
  <div class="bggray">
       <titleHead :bg="'#F7F7F7'" :fixed="true"></titleHead>
       <yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
            <yd-infinitescroll :callback="loadListDown" ref="ls">
                <yd-list theme="4" slot="list">
                  <div class="list-child" v-for="item,key in list" :key="key">
                     <bannerd :bannerData="item" :serverTime="serverTime"></bannerd>
                  </div>  
                </yd-list>
                <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
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
import bannerd from '@/components/banner/banner-d.vue'
import scrolLoading from '@/components/common/scrolLoading'
export default {
  components: {
        titleHead,
        bannerd,
        scrolLoading
    },
  data () {
    return {
        list: [],
        postData:{
          page: 1,
          rows: 10,
          state:[]
        }
    }
  },
  // 计算属性   serverTime服务器时间
  computed: {
      serverTime () {
        return this.$store.state.server.serverTime
      }
  },
  methods: {
  	 // 下载刷新，重新获取新数据
        loadListUp() {
            this.ajaxPost(this.postUrl,this.postData,(res) => {
                this.$store.dispatch('getServerTime');
                const _list = res.data.dataList;
                this.list = _list;
                this.$dialog.toast({
                    mes:'更新成功'
                });
                this.postData.page = 1;
                // return false;
                this.$refs.prdemo.$emit('ydui.pullrefresh.finishLoad');
            })
        },
        // 滚动加载
        loadListDown() {
          this.ajaxPost(this.postUrl,this.postData,(res) => {
              this.$store.dispatch('getServerTime');
              const _list = res.data.dataList;
              this.list = [...this.list, ..._list];
              // 当最后一页的数据少于一页的数据或者页数等于后台返回的总页数时，就是全部加载完毕
              if (_list.length < this.postData.rows || this.postData.page >= res.data.pageCount) {
                  // 所有数据加载完毕
                  this.$refs.ls.$emit('ydui.infinitescroll.loadedDone');
                  return;
              }
              // 单次请求数据完毕
              this.$refs.ls.$emit('ydui.infinitescroll.finishLoad');
              this.postData.page++;
          })
        },
  },
  mounted() {
     switch(this.$route.name) {
        case 'previewSession':
        this.postUrl = 'app/auction/sessionInfoPage' //预展
        this.postData.state = [2];
        break;
        case 'dailySession':
        // 缺少接口，暂时用了历史拍品的接口替代测试
        this.postUrl = 'app/auction/getMoreHisAuction'   //每日一拍历史拍卖场
        break;
        case 'hotSession':
        this.postUrl = 'app/auction/sessionInfoPage' //正在热拍拍场
        this.postData.state = [3];
        break;
        case 'historySession':
        this.postUrl = 'app/auction/sessionInfoPage'    //历史拍卖场
        this.postData.state = [4];
        break;
        default:
        this.$router.push({name:'error'})
     }

    this.$nextTick(function(){
        this.loadListDown()
    })


  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped>
 
</style>
