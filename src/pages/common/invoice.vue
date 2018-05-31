<!-- 发票页面 -->
<template>
  <div class="bggray">
    <titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead> 
    <div class="sky-box-cell">
      <yd-radio-group v-model="data.invoiceHeadType" class="bgwhite padding-sm radius5" color="#272727">
        <div class="flex flex-border">
          <div class="flex-1 margin-right-md">
            <p class="fw600">发票类型</p>
          </div>
        </div>
        <div class="flex flex-border" >
          <div class="flex-1">
            <p>不开发票</p>
          </div>
          <div class="flex-1 text-right">
            <yd-radio val="0">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="flex flex-border" >
          <div class="flex-1">
            <p>个人</p>
          </div>
          <div class="flex-1 text-right">
            <yd-radio val="2">&nbsp;</yd-radio>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1">
            <p>公司</p>
          </div>
          <div class="flex-1 text-right">
            <yd-radio val="1">&nbsp;</yd-radio>
          </div>
        </div>
         <div class="flex" v-show="data.invoiceHeadType == 1">
          <div class="flex-1 padding-top-0">
            <input placeholder="请输入公司发票抬头" v-model="data.invoiceHeadContent" class="sky-inp-max sky-p-gray" type="text">
          </div>
        </div>
        <div class="flex"  v-show="data.invoiceHeadType == 1">
          <div class="flex-1 padding-top-0">
            <input placeholder="请输入纳税人识别号" v-model="data.identificationNumber" class="sky-inp-max sky-p-gray" type="number">
          </div>
        </div>
      </yd-radio-group>
    </div>
    <footer class="footerFixed">
      <yd-button class="sky-btn-orange fs16" @click.native="submit" size="large" type="primary">提交</yd-button>
    </footer>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
export default {
  components: {
        titleHead
    },
  data () {
    return {
      type:null,
      postData: {
        customerSeq:Cookie.get('userSeq'),
      },
      data: {
        email: '',
        identificationNumber:null,
        invoiceHeadContent:'',
        invoiceHeadType: 0
      }
    }
  },
  computed: {
      
  },
  methods: {
     
  	 submit(){
      let postData = Object.assign(this.postData,this.data)
      this.api.updateInvoice(postData)
      .then((res) => {
        if(res.state){
          this.$router.go(-1)
        }
      })
     }
  },
  mounted() {
     this.api.cusInvoice(this.postData)
     .then((res) => {
      this.data = res.data ? res.data : this.data
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
