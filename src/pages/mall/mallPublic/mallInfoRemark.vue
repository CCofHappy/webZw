
<template>
	<div class="mallInfo" :class="{backgroundColor: isBack, bottomLastMallInfo: isLast}">
		<span class="leftSpan">{{infoRemark.leftTitle}}<span>{{infoRemark.leftContent}}</span></span>
		<span class="rightSpan">{{infoRemark.rightTitle}}<span>{{infoRemark.rightContent}}</span></span>
	</div>
</template>

<script>
	export default {
		name: "mallInfoRemark",
		props: ['infoRemark','isBack','isLast'],
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.mallInfo { margin-left: 0; }
	.bottomLastMallInfo {
		margin-bottom: 1.72rem;
	}
</style>

