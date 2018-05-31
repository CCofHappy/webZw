<template>
  <div class="bggray">
  	<titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead> 
		<el-radio-group v-model="radio" class="radio-box orange">
			<div  v-for="item,key in data" class="addressCell">
				<p><span class="name">{{item.consignee}}</span> <span class="phone">{{item.phone | phoneText}}</span></p>
				<p class="margin-top-sm dgray">{{item.province + item.addr}}</p>
				<div class="edit" ref="radio">
					<!--<yd-radio name="ad" class="radio" :val="key">设为默认地址</yd-radio>-->
					 <el-radio  class="radio" :label="item.flag">设为默认收货地址</el-radio>
					<p class="editBtn">
						<span class="margin-right-sm"><i class="iconfont icon--write gray"></i> 编辑</span>
						<span><i class="iconfont icon-Slicex14 gray fs18"></i> 删除</span>
					</p>
				</div>
			</div>
 		</el-radio-group>
		<footer class="footerFixed">
      <yd-button class="sky-btn-orange fs16" @click.native="submit" size="large" type="primary">添加新地址</yd-button>
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
      data: [],
      radioVal: 0,
      radio:1,
    }
  },
  computed: {
      
  },
  methods: {
  	
  },
  mounted() {
     this.api.customerSeqADD(Cookie.get('userSeq'))
				.then((res) => {
					console.log(res)
					this.data = res.data
				})
			this.$nextTick(function(){
				this.radioVal = 0;
			})
  },
  watch: {
    $route() {
       
    }
  }
}
</script>

<style scoped lang="less">
 	.addressCell {
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
	.radio-box {
		display: block;
    font-size: .28rem;
    padding: .2rem;
	}
</style>
