
<!-- 
	titleContent {
		isMoreTitle : true or false 控制单行还是多行
		mainTitle : 大标题的文字
		subTitle : 小标题的文字 (如果是单行小标题不会显示)
	}
-->

<template>
	<div :class="{detailConetnt: titleContent.isMoreTitle, singleTitle: !titleContent.isMoreTitle}">
		<p class="fs16 fw500">{{titleContent.mainTitle}}</p>
		<p v-if="titleContent.isMoreTitle">{{subTitle}}</p>
	</div>
</template>

<script>
	export default {
		name: "orderDetailTitle",
		props: ["titleContent"],
		data() {
			return {
				subTitle: "",
				timer: null
			}
		},
		methods: {
			countDown() {
				this.titleContent.remainTime--;
				if (this.titleContent.remainTime < 3600) {
					this.subTitle = "剩余 " + parseInt(this.titleContent.remainTime/60) + "分 " + this.titleContent.remainTime%60 + "秒";
				}
				if (this.titleContent.remainTime == 0) {
					clearInterval(this.timer);
					this.$dialog.toast({ mes:'时间到'});
				}
			}
		},
		mounted: function() {
			if (!this.titleContent) {
				this.titleContent = {
					isMoreTitle: false,
					mainTitle: "未传值"
				}
			} else {
				let self = this;
				if (this.titleContent.isMoreTitle) {
					if (this.titleContent.isCountDown && this.titleContent.remainTime) {
						this.subTitle = "剩余 " + parseInt(this.titleContent.remainTime/60) + "分 " + this.titleContent.remainTime%60 + "秒";
						this.timer = setInterval(function () {
							self.countDown();
						},1000);
					} else {
						this.subTitle = this.titleContent.subTitle;
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.detailConetnt {
		background-color: #CD733B;
		height: 1.54rem;
		padding: .3rem .24rem;
		p { color: #FFFFFF; }
	}
	.singleTitle {
		background-color: #CD733B;
		height: 1.54rem;
		padding: .56rem .24rem;
		p { color: #FFFFFF; }
	}
</style>



