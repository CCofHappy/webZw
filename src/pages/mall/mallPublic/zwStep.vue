<template>
	<div>
		<yd-step current="4" current-color="#589A0D" class="margin-top-md stepMarginBottom">
	        <yd-step-item>
	            <p slot="bottom" class="finishStep">提交申请</p>
	            <p slot="bottom" class="fs10 fblack margin-top-xs">2018-01-11</p>
	            <p slot="bottom" class="fs10 fblack">19:57:33</p>
	        </yd-step-item>
	        <yd-step-item>
	            <p slot="bottom" class="finishStep">审核</p>
	            <p slot="bottom" class="fs10 fblack margin-top-xs">2018-01-11</p>
	            <p slot="bottom" class="fs10 fblack">19:57:33</p>
	        </yd-step-item>
	        <yd-step-item>
	            <span slot="bottom">验收</span>
	        </yd-step-item>
	        <yd-step-item>
	            <span slot="bottom">退款</span>
	        </yd-step-item>
	        <yd-step-item>
	            <span slot="bottom">完成</span>
	        </yd-step-item>
	    </yd-step>
	</div>
</template>

<script>
	export default {
		name: "zwStep",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.stepMarginBottom {
		margin-bottom: .7rem;
		.finishStep {
			color: #589A0D;
		}
	}
</style>