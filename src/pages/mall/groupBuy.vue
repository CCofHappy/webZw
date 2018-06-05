
<template>
	<div>
		<yd-navbar title="拼团人数(7人)" bgcolor="#F8F8F8" color="#282828" :fixed="true">
	        <router-link :to="{name: 'flashSale'}" slot="left">
	            <i class="iconfont icon-Slicex9"></i>
	        </router-link>
	    </yd-navbar>
	    <div class="cellGroup margin-top-lg">
	    	<yd-cell-group>
	            <yd-cell-item v-for="item,key in peopleInfoList" :key="key">
	            	<img slot="left" class="headImage" src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg">
	                <span slot="left" class="leftSpan">左边内容一</span>
	                <span slot="right">右边内容一</span>
	            </yd-cell-item>
	        </yd-cell-group>
	    </div>
	</div>
</template>

<script>
	export default {
		name: "groupBuy",
		data () {
			return {
				peopleInfoList: [1,2,3,4,5]
			}
		}
	}
</script>

<style lang="less" scoped>
	.cellGroup {}
	.headImage {
		height: .6rem;
		width: .6rem;
		border-radius: 100%;
	}
	.leftSpan {
		margin-left: .3rem;
	}
</style>


