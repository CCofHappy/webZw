<template>
  <div class="bggray">
  	<titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead>
  	<div style="padding: .24rem;">
  		<yd-cell-group class="radius5 afterNone">
	        <yd-cell-item>
	            <span slot="left">收货人 </span>
	            <yd-input data-vv-name="收货人" v-validate="'required'" class="padding-left-sm" slot="right" v-model="postData.consignee" ></yd-input>
	        </yd-cell-item>
	
	        <yd-cell-item>
	            <span slot="left">手机号码 </span>
	            <yd-input data-vv-name="手机号码" v-validate="'required|mobile'" class="padding-left-sm" slot="right" v-model="postData.phone" type="number"></yd-input>
	        </yd-cell-item>
					<yd-cell-item arrow>
	            <span slot="left">所在地区：</span>
	            <input slot="right" data-vv-name="所在地区" v-validate="'required'" type="text" @click.stop="show = true" v-model="postData.province" readonly>
	        </yd-cell-item>
	        <yd-cell-item>
	            <span slot="left">详细地址 </span>
	            <yd-input data-vv-name="详细地址" v-validate="'required'" class="padding-left-sm" slot="right" v-model="postData.addr" ></yd-input>
	        </yd-cell-item>
	        <yd-cell-item>
	        		<yd-checkbox :true-value="1" :false-value="0"  color="#CD733B" slot="left" v-model="postData.flag" shape="circle">设置为默认地址</yd-checkbox>
	        </yd-cell-item>
	    </yd-cell-group>
  	</div>
	  
    <yd-cityselect v-model="show" :callback="result" :items="district"></yd-cityselect>
    <footer class="footerFixed">
      <yd-button class="sky-btn-orange fs16" @click.native="validateBeforeSubmit" size="large" type="primary">保存</yd-button>
    </footer>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
import District from '@/data/city.json';
export default {
  name: 'tpl',
  components: {
      titleHead
    },
  data () {
    return {
    	show: false,
    	checkboxAdd:false,
      postData: {
      	 province: '',
		      consignee:'',
		      phone:'',
		      addr:'',
		      customerSeq:Cookie.get('userSeq'),
		      flag:0,
		      pCode:'',
		      cCode:'',
		      dCode:'',
      },
      district: District
    }
  },
  computed: {
      
  },
  methods: {
  	//选择完后赋值
  	result(ret) {
        this.postData.province = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        this.pCode = ret.itemValue1;
        this.cCode = ret.itemValue2;
        this.dCode = ret.itemValue3;
   },
   add(){
   	 this.api.addDeliveryAddr(this.postData)
       .then((res)=> {
        	if(res.state){
        		this.$dialog.toast({mes:'保存成功'});
        		setTimeout(()=>{
        			this.$router.go(-1)
        		},1000)
        	}
   		})
   },
   edit(){
   	 this.api.editDeliveryAddr(this.postData)
       .then((res)=> {
        	if(res.state){
        		this.$dialog.toast({mes:'保存成功'});
        		setTimeout(()=>{
        			this.$router.go(-1)
        		},1000)
        	}
   		})
   },
   validateBeforeSubmit() {
      validForm(this,() => {
      		if(this.$route.params.seq){
			  		this.edit()
			  	}else {
			  		this.add()
			  	}
      })
    },
    //编辑页初始化数据
    info(){
    	this.api.findByDeliveryAddr(this.$route.params.seq)
    	.then((res) => {
    		this.postData = res.data;
    	})
    }
  },
  mounted() {
  	if(this.$route.params.seq){
  		this.info()
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
