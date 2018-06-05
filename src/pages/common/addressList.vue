<template>
	
	<div class="bggray">
		<yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" bgcolor="#F7F7F7" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
          <router-link :to="{name:'addressMent'}" slot="right">
         			管理
          </router-link>
      </yd-navbar>
		<!--没有收货地址的时候-->
		<div class="noMessage text-center margin-top-lg padding-top-lg" v-if="!data.length">
			<img class="imgSize160" src="../../assets/no/noMessage.png" />
			<p class="margin-top-md gray fs16">暂无信息</p>
			<p class="ffgray fs14 margin-top-sm">赶紧添加收货人信息吧</p>
			<yd-button class="addBtn" type="hollow" bgcolor="#F2F2F2" @click.native="add" ><i class="iconfont icon-plus-add"></i> 添加</yd-button>
		</div>
		<!--收货地址列表-->
		<div class="padding-sm margin-top-lg">
			<div  v-for="item,key in data" class="addressCell" :class="item.flag == 1 ? 'active' : ''" @click="chooseAdd(item.deliveryAddrSeq)">
				<p><span class="name">{{item.consignee}}</span> <span class="phone">{{item.phone | phoneText}}</span><i class="iconfont icon-Group forange margin-left-md" ></i></p>
				<p class="margin-top-sm dgray">{{item.province + item.addr}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				data: []
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
			  	//选择完地址后，往vuex存放选中的地址seq，然后返回选择地址之前的页面，前一个页面就取vuex中的地址seq去请求数据
			  	chooseAdd(deliveryAddrSeq){
			  		this.$store.commit('setDeliveryAddrSeq',deliveryAddrSeq);
			  		this.$router.go(-1)
			  	}
		},
		mounted() {
			this.api.customerSeqADD(Cookie.get('userSeq'))
				.then((res) => {
					console.log(res)
					this.data = res.data
				})
		},
		watch: {
			$route() {

			}
		}
	}
</script>

<style lang="less">
	.addBtn {
		width: 2rem;
		border: 1px solid;
		font-size: .32rem;
		color: #282828;
		margin-top: .4rem;
		padding: .05rem 0 .1rem 0;
	}
	
	.icon-plus-add {
		position: relative;
	}
	.icon-Group {
		display: none;
	}
	.addressCell {
		margin-top: .2rem;
		position: relative;
		padding: .4rem 1.4rem .4rem .2rem;
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
	}
	
	.addressCell.active {
		margin-bottom: .3rem;
		&:after {
			content: "";
			position: absolute;
			bottom: -.1rem;
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