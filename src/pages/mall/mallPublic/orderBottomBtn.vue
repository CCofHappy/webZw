<template>
	<div class="bottomBtn">
		<button class="blackBtn">去付款</button>
	</div>
</template>

<script>
	export default {
		name: "orderBottomBtn",
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.bottomBtn {
		position: flex;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1rem;
		padding: .2rem .24rem;
		text-align: right;
		.blackBtn {
			background-color: #282828;
			color: #CD733B;
			border: none;
			// padding: .1rem .4rem;
			width: 1.6rem;
			height: .6rem;
		}
		.orangeBtn {
			border-color: #CD733B;
			color: #CD733B;
			// padding: .1rem .4rem;
			width: 1.6rem;
			height: .6rem;
		}
	}
</style>



