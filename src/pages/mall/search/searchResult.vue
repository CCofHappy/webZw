<template>
	
	<div>
		<div class="searchNav">
			<yd-input class="searchInput" v-model="input1" placeholder="请输入关键字"></yd-input>
			<yd-button type="hollow" class="iconfont navCancleBtn" @click.native="goBackSearch">取消</yd-button>
			<div style="margin-top: 1rem;width: 100%; background-color: #F8F8F8; display: flex;flex-direction: row;">
				<div class="flex-1">
					<yd-button type="hollow" class="iconfont">默认排序</yd-button>
				</div>
				<div class="flex-1 text-center">
					<yd-button type="hollow" class="iconfont">价格</yd-button>
					<i class="iconfont icon-Slicex10"></i>
				</div>
				<div class="flex-1 text-right padding-right-sm">
					<yd-button type="hollow" class="iconfont" @click.native="clickFiltrate">筛选</yd-button>
					<i class="iconfont">&#xe65a;</i>
				</div>
			</div>
			
		</div>
		<div style="margin-top: .88rem;width: 100%; background-color: #F8F8F8;">
			
		</div>
		<div style="margin-top: 1.88rem;">
			<yd-list theme="3">
				<commodity-list v-for="item,key in list" :itemData="item" :key="key"></commodity-list>
			</yd-list>
		</div>

		<yd-popup v-model="show4" position="right" width="85%">
            <filtrate></filtrate>
        </yd-popup>
	</div>

</template>


<script>
	import commodityList from "@/components/lists/commodityList"
	import filtrate from "./filtrate"
	export default {
		data () {
			return {
				input1: this.$route.params.searchContent,
				show4: false,
				list: [
					{img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, subtitle: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, subtitle: 89.36}
				]
			}
		},
		components: {
			commodityList,
			filtrate
		},
		methods: {
			clickFiltrate() {
				this.show4 = true;
			},
			goBackSearch() {
				this.$router.push({name: "search"});
			}
		},
		mounted: function () {
			console.log(this.$route.params.searchContent);
		}
	}

</script>


<style scoped lang="less">
	.searchNav {
		position: absolute;
		background-color: #F8F8F8;
		left: 0px;
		top: 0px;
		height: 1.88rem;
		width: 100%;
		font-size: 14px;
	}
	.searchInput {
		position: absolute;
		left: .24rem;
		background-color: white;
		top: .1rem;
		height: .68rem;
		right: 1.04rem;
		input {padding-left: 10px;}
	}

	.yd-input {
		width: auto;
	}
	.yd-btn-hollow {
		background-color: transparent;
		border: 0px;
	}
	.navCancleBtn {
		position: absolute;
		right: .16rem;
		top: .16rem;
		font-size: .28rem;
	}
	
</style>

