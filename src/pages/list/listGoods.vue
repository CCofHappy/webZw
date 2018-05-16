<template>
  <div>
      <titleHead :bg="'#F7F7F7'" :fixed="true"></titleHead>
      <!-- 拍品列表  listType  列表的类型  -->
      <goodslist></goodslist>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import goodslist from '@/components/lists/scrolGoodslList.vue'
export default {
  components: {
      titleHead,
      goodslist
    },
  data () {
    return {
      postUrl: '',
      // postData,作为请求的入参和无限加载的固定字段，不能随意修改
      postData:{
        page:1,
        rows:10,
      },
    }
  },
  computed: {
      
  },
  methods: {
    // 列表页初始化数据
  	updata(callback){
        fly.post(this.postUrl,this.postData)
       .then((res) => {
        if(res.state == 1){
          this.showAuction = res.data;
          if( typeof callback == 'function'){
            callback(this.showAuction);
          }
        }
       })
    }
  },
  mounted() {
     // 判断是哪种列表，通过路由name来对应加载不同的数据
    switch(this.$route.name) {
      case 'history':
      this.postUrl = '/auction/getMoreHisAuction'    //历史拍卖
      break;
      case 'daily':
      // 缺少接口，暂时用了历史拍品的接口替代测试
      this.postUrl = '/auction/getMoreHisAuction'   //每日一拍历史拍卖
      break;
      case 'pick':
      this.postUrl = '/homepage/getChoiceAndCollection' //饮用精选
      break;
      default:
      this.$router.push({name:'error'})
    }
 
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped>
 
</style>
