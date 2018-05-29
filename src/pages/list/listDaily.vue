<template>
  <div class="bggray">
      <yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
      </yd-navbar>
      <yd-tab class="dayTab" v-model="tab">
          <div class="tabHeader flex">
            <span class="left flex-1" @click="tab = 0">距结束<yd-countdown class="margin-left-xs" :time="36666" format="{%h}时{%m}分{%s}秒" timetype="second"></yd-countdown></span>
            <!-- 当小于一天时就是明日开拍，大于一天就显示日期，没有数据的时候直接不显示 -->
            <span class="right flex-1" @click="tab = 1">明日开拍</span>
          </div>
          <yd-tab-panel :label="tabLabel[0]">
            <div class="scroll-a">
              <yd-infinitescroll :callback="loadListDown" class="scroll scroll-a" ref="ls">
                  <yd-list theme="4" slot="list">
                     <itemscroll v-for="(item,key) in list" :key="key" class="list-child padding-bottom-md" :item="item" :serverTime="serverTime"></itemscroll>
                  </yd-list>
                  <span slot="doneTip">没有内容了~~</span>
                   <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                  <div slot="loadingTip">
                    <scrolLoading></scrolLoading>
                  </div>
              </yd-infinitescroll>
           </div>
          </yd-tab-panel>
          <yd-tab-panel :label="tabLabel[1]">
            <div class="scroll-a">
              <yd-infinitescroll :callback="loadListDown" ref="ls">
                  <yd-list theme="4" slot="list">
                     <itemscroll v-for="(item,key) in list" :key="key" class="list-child padding-bottom-md" :item="item" :serverTime="serverTime"></itemscroll>
                  </yd-list>
                  <span slot="doneTip">没有内容了~~</span>
                   <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                  <div slot="loadingTip">
                    <scrolLoading></scrolLoading>
                  </div>
              </yd-infinitescroll>
           </div>
          </yd-tab-panel>
           
      </yd-tab>
  
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
      tab:0,    //选项卡当前索引
      tabLabel:['拍卖中','14:00'],     //选项卡标题    tabLabel[1]，有数据的时候显示预览的时间，没有数据的时候显示敬请期待
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
            fly.post('app/auction/getMoreHisAuction',this.postData)
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

<style lang="less">
 .dayTab {
  position: relative;
  margin-top: 1rem;
  .yd-tab-nav{
    position: fixed;
    top: 1rem;
    z-index: 9;
    width: 100% !important;
  }
  .yd-tab-panel {
    margin-top: 1.22rem;
  }
  .yd-tab-nav .yd-tab-active:before{
    background: none;
  }
  .yd-tab-nav:after,.yd-tab-nav-item:not(:last-child):after{
    border:none;
  }
  .yd-tab-nav-item {
    color: #FFFFFF;
    background: #272727;
    transition: all .2s cubic-bezier(.55, 0, .1, 1);
  }
  .yd-tab-nav-item.yd-tab-active {
    background: #CC723C;
    /*transition: all .2s cubic-bezier(.55, 0, .1, 1);*/
  }
  .yd-tab-nav-item>a{
    position: relative;
    height: 1rem;
    line-height: 0.7rem;
    font-size: 0.36rem;
    /*font-weight: 600;*/
  }
  .yd-tab-nav-item.yd-tab-active a:after{
    position: absolute;
    bottom: -6px;
    content: " ";
    /*朝下的三角形*/  
    width:0;  
    height:0;
    left: 50%;  
    margin-left: -3px;
    overflow:hidden; 
    border-left:6px solid transparent;  
    border-right:6px solid transparent;  
    border-top:6px solid #CB713C;  
  }

  .tabHeader{
    position: fixed;
    top: 1.6rem;
    z-index: 9;
    width: 100%;
    color: #FFFFFF;
    text-align: center;
    font-size: 0.24rem;
  }
 }
</style>
