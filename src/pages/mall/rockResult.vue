
<template>
	<div>
		<yd-navbar title="摇号结果" bgcolor="#F8F8F8" color="#282828" :fixed="true">
	        <router-link :to="{name: 'mallDetails'}" slot="left">
	            <i class="iconfont icon-Slicex9"></i>
	        </router-link>
	        <router-link to="#" slot="right">
	            <i class="iconfont icon--me-7"></i>
	        </router-link>
	    </yd-navbar>
		<img class="mallImage" src="//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg">
		<p class="littleTitle text-center">KARUIZAWA</p>
		<p class="title text-center fs20 fw500">轻井泽·璀璨50年摇号限购</p>
		<div class="flex">
			<div class="personInfo" v-for="item,key in persons">
				<img :src="item.image">
				<p class="name">{{item.name}}</p>
				<p class="number fs10">{{item.number}}</p>
			</div>
		</div>
		<div class="resultRemark">
			<div>
				<p class="firstP">恭喜以上8位获得“轻井泽 璀璨50年”购买资格</p>
				<p>每人限购一件</p>
				<p>请于4月21日 24 ：00点前购买</p>
				<p class="lastP">逾期无效</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "rockResult",
		data() {
			return {
				persons: [
					{
						image: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
						name: "李富贵",
						number: "HM78998"
					},
					{
						image: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
						name: "李富贵李",
						number: "HM78998"
					},
					{
						image: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
						name: "李富贵",
						number: "HM78998"
					},
					{
						image: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
						name: "李富贵",
						number: "HM78998"
					},
					{
						image: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
						name: "李富贵",
						number: "HM78998"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.mallImage {
		width: 100%;
		margin-top: 1rem;
	}
	.littleTitle {
		margin-top: 1rem;
		color: #CD733B;
		margin-bottom: .1rem;
	}
	.title {
		color: #282828;
	}
	.flex {
		margin-top: .2rem;
		flex-wrap: wrap;
		.personInfo {
			margin-left: .7rem;
			margin-top: .6rem;
			img {
				border-radius: 100%;
				width: 1rem; 
				height: 1rem;
			}
			p { white-space:nowrap; text-overflow:ellipsis; overflow:hidden; }
			.name {
				margin-top: .1rem;
				color: #282828;
				max-width: 1rem;
			}
			.number {
				color: #979797;
			}
		}
	}
	.resultRemark {
		height: 2.8rem; 
		margin-left: .44rem; 
		margin-top: .8rem; 
		border: 0.5px solid #979797; 
		margin-right: .56rem;
		div {
			height: 2.8rem; 
			margin-left: .12rem; 
			margin-top: .12rem; 
			border: 0.5px solid #979797; 
			margin-right: -.12rem; 
			margin-bottom: 1rem;
		}
		p {
			text-align: center;
			color: #282828;
		}
		.firstP {
			margin-top: .5rem;
		}
		// .lastP {
		// 	margin-bottom: .4rem;
		// }
	}
</style>










