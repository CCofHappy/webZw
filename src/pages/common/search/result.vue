<template>
	<div>
		<header class="header-search headerFixed">
			<i @click="$router.go(-1)" class="iconfont icon-Slicex9 margin-right-xs"></i>
			<yd-search class="sky-header-search" style="width: 92%;" v-model="searchVal" :on-submit="submitHandler"></yd-search>
		</header>
		<div style="height: 1rem;"></div>
		<!--帖子搜索-->
		<div v-if="$route.name == 'communitySeachResult'">
			<!--有搜索结果的时候-->
			<yd-tab class="sky-none-tab sky-nav-16" v-model="tab" active-color="#CC733D">
				<yd-tab-panel label="全部">
					 
				</yd-tab-panel>
				<yd-tab-panel label="交流贴">
					 
				</yd-tab-panel>
				<yd-tab-panel label="酒评贴">
					 
				</yd-tab-panel>
				<yd-tab-panel label="分享吧">
					 
				</yd-tab-panel>
			</yd-tab>
			<!--全部没有搜索结果的时候-->
			<div v-if="false" class="text-center padding-top-lg">
				<i class="iconfont icon-Slicex21" style="font-size: 3.2rem;"></i>
				<p class="fs16 grayd margin-top-md">暂无结果</p>
				<p class="ffgray margin-top-sm">换个关键词试试看</p>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				tab: 0,
				searchVal: this.$route.query.searchVal,
				postArray: [{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 1,
							sort: 1
						},
						list: [],
					},
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 1,
							sort: 1
						},
						list: [],
					},
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 5,
							sort: 1,
							newOrOld: 1,
							state: 1,
							//							isTop:1
						},
						list: [],
					},
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 2,
							sort: 1,
							newOrOld: 2,
							state: 1,
						},
						list: [],
					},
				]
			}
		},
		computed: {

		},
		methods: {
			submitHandler() {

			}
		},
		mounted() {

		},
		watch: {
			$route() {

			}
		}
	}
</script>

<style scoped lang="less">
 
</style>