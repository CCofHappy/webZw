
<!-- 
	status: 1 地址信息（姓名、电话、地址）
			contentInfo: {
				leftTitle: 左侧的标题
				name: 姓名
				phoneNum: 电话
				address: 地址
			}
			2 物流信息（显示最新物流信息、时间）
			contentInfo: {
				newInfo: 最新的物流信息
				time: 时间
			}
-->

<template>
	<div>
		<div class="flex">
			<div class="leftDiv">
				<span class="fw600 fblack">{{contentInfo.leftTitle}}</span>
			</div>
			<div class="rightDiv" v-if="status==1">
				<p><span class="leftSpan fblack">{{contentInfo.name}}</span><span class="rightSpan fblack">{{contentInfo.phoneNum}}</span></p>
				<p class="fblack">{{contentInfo.address}}</p>
			</div>
			<div class="logisticsInfo" v-else>
				<p class="leftSpan green">{{contentInfo.newInfo}}</p>
				<p class="grayd fs12">{{contentInfo.time}}</p>
				<i class="iconfont icon-Slicex13 fs12 ffgray"></i>
			</div>
		</div>
		<div class="segmentation1"></div>
	</div>
</template>


<script>
	export default {
		name: "receiveGoodInfo",
		props: ["status","contentInfo"],
		data() {
			return {

			}
		},
		mounted() {
			if (!this.contentInfo) {
				this.contentInfo = {
					leftTitle: "物流信息",
					newInfo: "惠州市河南岸分据点",
					time: "2018.6.12 17:23"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.flex {
		 margin-top: .3rem; 
		 margin-bottom: .3rem;
		 .leftDiv {
			margin-left: .24rem;
			margin-right: .3rem;
			width: 1.5rem;
		}
		.rightDiv {
			margin-right: .24rem;
			.rightSpan {
				position: absolute;
				right: .24rem;
			}
		}
		.logisticsInfo {
			position: relative;
			margin-left: .1rem;
			width: 100%;
			.leftSpan {
				margin-bottom: 3px;
			}
			i {
				position: absolute;
				right: .24rem;
				top: .22rem;
			}
		}
	}
	
</style>











