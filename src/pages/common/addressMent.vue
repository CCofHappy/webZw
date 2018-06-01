<template>
  <div class="bggray">
  	<titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead> 
  	<!--没有收货地址的时候-->
		<div class="noMessage text-center margin-top-lg padding-top-lg" v-if="!data.length">
			<img class="imgSize160" src="../../assets/no/noMessage.png" />
			<p class="margin-top-md gray fs16">暂无信息</p>
			<p class="ffgray fs14 margin-top-sm">赶紧添加收货人信息吧</p>
		</div>
    <div class="padding-sm margin-bottom-lg">
			<div  v-for="item,key in data" class="addressCell">
				<p><span class="name">{{item.consignee}}</span> <span class="phone">{{item.phone | phoneText}}</span></p>
				<p class="margin-top-sm dgray">{{item.province + item.addr | replaceSG}}</p>
				<div class="edit">
					<el-radio class="radio" v-model="radioval" :label="key">设为默认地址</el-radio>
					<p class="editBtn">
						<span  @click="editfun(item.deliveryAddrSeq)" class="margin-right-sm"><i class="iconfont icon--write gray"></i> 编辑</span>
						<span  @click="deletefun(item.deliveryAddrSeq)"><i class="iconfont icon-Slicex14 gray fs18"></i> 删除</span>
					</p>
				</div>
			</div>

		</div>
		<div>
		</div>
		<footer class="footerFixed">
      <yd-button class="sky-btn-orange fs16" @click.native="add" size="large" type="primary">添加新地址</yd-button>
    </footer>
  </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
export default {
 
  components: {
      titleHead,
    },
  data () {
    return {
      data: [],
      radioval: 0,
    	postData: {
    		customerSeq:Cookie.get('userSeq'),
    		 flag:1,
    		 deliveryAddrSeq:null
    	}
    }
  },
  computed: {
      
  },
  methods: {
  	add(){
  		this.$router.push({
  			name:'addressAdd'
  		})
  	},
  	editfun(deliveryAddrSeq) {
  		this.$router.push({
  			name:'addressEdit',
  			params:{seq:deliveryAddrSeq}
  		})
  	},
  	//初始化数据
  	datafun(){
  		 this.api.customerSeqADD(Cookie.get('userSeq'))
				.then((res) => {
					this.data = res.data
				})
  	},
  	//删除地址
  	deletefun(deliveryAddrSeq){
  		this.$dialog.confirm({
            mes: '确定删除该收货地址吗？',
            opts: () => {
                this.api.delDeliveryAddr(this.postData.customerSeq,deliveryAddrSeq)
					  		.then((res) => {
					  			if(res.state){
					  				 this.$dialog.toast({mes: '删除成功', timeout: 1000});
					  				this.datafun()
					  			}
					  		})
            }
        });
  		
  	}
  },
  mounted() {
    this.datafun()
  },
  watch: {
    $route() {
       
    },
    radioval(val) {
    	this.postData.deliveryAddrSeq = this.data[val].deliveryAddrSeq
    	this.api.editDeliveryAddr(this.postData)
    	.then((res) => {
    		if(res.state){
    			this.$dialog.toast({mes: '设置成功', timeout: 1000});
    		}
    	})
    }
  }
}
</script>

<style scoped lang="less">

 	.addressCell {
 		margin-top: .2rem;
		position: relative;
		padding: .4rem .2rem;
		background: #FFFFFF;
		border-radius: 5px;
		.name {
			display: inline-block;
			width: 1.4rem;
			font-weight: 600;
		}
		.phone {
			font-weight: 600;
		}
		.edit {
			margin-top: .4rem;
			border-top: 1px solid #F2F2F2;
			height: .6rem;
			.radio {
				float: left;
				margin-top: .3rem;
			}
			.editBtn {
				float: right;
				margin-top: .32rem;
				padding-right: .2rem;
			}
		}
	}
	
	.addressCell.active {
		&:after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 0.1rem;
			background: url(../../assets/border/borderBlack.png);
			background-size: 100%;
		}
		.icon-Group {
			display: inline-block;
		}
	}
</style>
