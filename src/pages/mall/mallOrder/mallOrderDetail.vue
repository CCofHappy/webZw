
<template>
	<div>
		<yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" bgcolor="#F7F7F7" color="#282828" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
      	</yd-navbar>
      	<div class="content">
			<order-detail-title :titleContent="{isMoreTitle:true, mainTitle:'待付款', isCountDown: true, remainTime:10}"></order-detail-title>
			<receive-good-info></receive-good-info>
            <div class="segmentation"></div>
			<order-title :status="4" :content="{isFw: true, titleText: '商品信息'}"></order-title>
			<order-info></order-info>
			<order-info></order-info>
			<order-title :status="5"></order-title>
			<order-title :status="6"></order-title>
            <div class="segmentation"></div>
			<order-title :status="7"></order-title>
            <div class="segmentation"></div>
			<order-title :status="8"></order-title>
      	</div>
		<order-bottom-btn></order-bottom-btn>
	</div>
</template>

<script>
	import orderDetailTitle from "../mallPublic/orderDetailTitle"
	import receiveGoodInfo from "../mallPublic/receiveGoodInfo"
  	import orderTitle from "../mallPublic/orderTitle"
  	import orderInfo from "../mallPublic/orderInfo"
  	import orderBottomBtn from "../mallPublic/orderBottomBtn"
	export default {
		name: "mallOrderDetail",
		data() {
			return {

			}
		},
		components: {
			orderDetailTitle,
			receiveGoodInfo,
			orderTitle,
			orderInfo,
			orderBottomBtn
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding-top: 1rem;
	}
</style>













