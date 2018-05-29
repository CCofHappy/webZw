<!-- 拍品详情 -->
<template>
  <div>
    <titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead>
    <div class="recordChild" v-for="item,key in record">
      <span>{{postData.customerSeq==item.customerSeq ? `我${item.signNo}` : item.signNo}}</span>
      <span class="margin-left-lg padding-right-md margin-right-md">04-12 12:23:50</span>
      <span>
        <span v-if="key==0&&item.offerState==1" class="bgred white fs10 padding-xxs">领先</span>
        <span v-if="key!=0&&item.offerState==1" class="bgdgray white fs10 padding-xxs">出局</span>
        <span v-if="item.offerState==0" class="bgdgray white fs10 padding-xxs">无效</span>
      </span>
      <span class="red pull-right">￥{{item.price}}</span>
    </div>
<!--     <div class="recordChild">
      <span>P6789</span>
      <span class="margin-left-lg padding-right-md margin-right-md">04-12 12:23:50</span>
      <span class="bgdgray white fs10 padding-xxs">出局</span>
      <span class="red pull-right">￥13000</span>
    </div>
    <div class="recordChild">
      <span>P6789</span>
      <span class="margin-left-lg padding-right-md margin-right-md">04-12 12:23:50</span>
      <span class="bgdgray white fs10 padding-xxs">无效</span>
      <span class="red pull-right">￥13000</span>
    </div> -->
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
 
import { mapState, mapMutations} from 'vuex'
export default {
  components: {
      titleHead,
    },
  data () {
    return {
      postData: {
        auctionGoodsSeq:this.$route.params.Gseq,
        customerSeq:Cookie.get('userSeq')
      },
      record:[],
    }
  },
  computed: {
      ...mapState({
    
    })
  },
  methods: {
      
  },
  mounted() {
    this.api.auctionRecordDetail(this.postData)
    .then((res) => {
      this.record = res.data.Record;
    })
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped lang="less">
 .recordChild {
  padding: .4rem .2rem;
  border-bottom: 1px solid #F8F8F8;
 }
</style>
