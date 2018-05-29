<template>
  <div class="bggray">
    <titleHead :bg="'#F7F7F7'" :fixed="true"></titleHead>
      <yd-infinitescroll :callback="loadListDown" ref="ls">
          <div slot="list">
            <div v-for="item,key in list" :key="key" class="margin-bottom-sm bgwhite">
              <div class="cl-box cl-box-bottom">
                 <div class="cl-row">
                  <div class="cl-td">
                    <p class="fw600">{{formtDate(item.lists[0].createTime,4)}}</p>
                  </div>
                  <div class="cl-td text-right">
                    
                </div>
                </div>
              </div>
              <itemOrder :item="item" :tab="3"></itemOrder>
              <div class="cl-box cl-box-padding">
                 <div class="cl-row">
                  <div class="cl-td padding-sm">
                    <div v-if="item.lists[0].ifExplainOutTime == 1" class="gray">
                          <i class="iconfont icon-jinzhi fs14 margin-right-sm"></i>申诉期已过，已无法申诉
                    </div>
                    <div  v-else class="text-right">
                      <yd-button v-if="item.lists[0].ifExplain>0" class="sky-btn sky-btn-orange" type="hollow">已申诉</yd-button>
                      <yd-button v-else class="sky-btn sky-btn-fred" style="width: 1.6rem;" type="hollow" @click.native="appeal(item.auctionSessionSeq)" >申诉</yd-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <!-- 数据全部加载完毕显示 -->
          <span  slot="doneTip">没有内容了~~</span>
          <!-- 加载中提示，不指定，将显示默认加载中图标 -->
          <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
      </yd-infinitescroll>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import itemOrder from './common/item'
export default {
  components: {
         titleHead,
         itemOrder
    },
  data () {
    return {
      postData:{
        customerSeq:Cookie.get('userSeq'),
        page:1,
        rows:10,
      },
      list:[]
    }
  },
  computed: {
      
  },
  methods: {
  	  // 滚动加载
      loadListDown() {
          this.api.getTreaty(this.postData)
           .then((res) => {
            if(res.state == 1){
              this.$store.dispatch('getServerTime')
              const _list = res.data.dataList ? res.data.dataList : [];
              this.list = [...this.list, ..._list];
              this.$nextTick(function () {
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
      // 申诉
      appeal(sseq){
        this.api.insertOrderExplain({auctionSessionSeq:sseq,customerSeq:Cookie.get('userSeq')})
        .then((res) => {
          if(res.state){
            this.postData = {
              customerSeq:Cookie.get('userSeq'),
              page:1,
              rows:10,
            }
            this.$dialog.toast({
                mes: '操作成功',
                timeout: 1500,
                icon: 'success'
            });
            setTimeout(()=>{window.location.reload();},1500)
          }
        })
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

<style lang="less">
 .goods {
    width: 28%;
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
  .text {
    width: 72%;
  }
 
</style>
