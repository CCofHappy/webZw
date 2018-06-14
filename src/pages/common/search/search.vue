<template>
	<div>
		<header class="header-search">
			<yd-search class="sky-header-search" v-model="searchVal" :on-submit="submitHandler"></yd-search>
			<span class="off">取消</span>
		</header>
		<div class="bigTitle">
			<span class="fs16 fw600 margin-left-12">历史搜索</span>
			<yd-button type="primary" class="iconfont icon-Slicex14 rightIcon" @click.native="remove"></yd-button>
		</div>
		<div class="keyBtn">
			<yd-button type="warning" v-for="item,key in arraySearch" :key="key">{{ item }}</yd-button>
		</div>
	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				searchVal: '',
				arraySearch: [],
			}
		},
		computed: {
				 
		},
		methods: {
			//用路由名称作为本地存储的键值名，方便该页面的复用
			submitHandler() {
				if(this.arraySearch.indexOf(this.searchVal) == -1){
					this.arraySearch.push(this.searchVal)
					this.local.set(this.$route.name,{arraySearch:this.arraySearch})
				}
				//搜索结果页的路由命名必须由当前页面的路由name+上Result
				this.$router.push({
					name:`${this.$route.name}Result`,
					query:{
						searchVal:this.searchVal
					}
				})
			},
			//清除历史记录
			remove(){
				this.arraySearch = [];
				this.local.remove(this.$route.name)
			}
		},
		mounted() {
			if(this.local.get(this.$route.name)){
				this.arraySearch = this.local.get(this.$route.name).arraySearch
			}
		},
		watch: {
			$route() {

			}
		}
	}
</script>

<style scoped lang="less">
	.yd-btn-warning {
		background-color: #F2F2F2;
		color: #000;
		margin-right: 0.4rem;
		font-size: 0.28rem;
		margin-bottom: 0.24rem;
	}
	
	.yd-search-input {
		background-color: #F8F8F8;
	}
	
	.yd-btn-primary {
		background-color: white;
		color: #000;
	}
	
	.bigTitle {
		position: relative;
		margin-top: .8rem;
		.rightIcon {
			position: absolute;
			right: .16rem;
			color: #979797;
		}
	}
	
	.keyBtn {
		margin-top: .4rem;
		margin-left: .24rem;
		margin-right: .24rem;
	}
</style>