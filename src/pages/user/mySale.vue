<!-- 我的竞拍 -->
<template>
	<div>
		<titleHead :fixed="true" :bg="'#F7F7F7'"></titleHead>
		<div class="my-sale-box" :class="Number(this.local.get('client')) ? '' : 'top0'">
			<div class="sequence" v-if="!searchShow">
				<div>
					<span @click="show = true">{{condition}} <i class="iconfont icon-xiangxia"></i></span>
					<span @click="searchShow = true" class="pull-right">
						<i class="iconfont icon--search fs16"></i>
					</span>
				</div>
			</div>
			<div class="sequence" v-if="searchShow">
				<yd-search class="sky-search" style="margin-top: -.1rem;" v-model="searchValue" placeholder="输入拍品编码或者名称搜索" :on-submit="submitHandler" cancel-text=" "></yd-search>
				<span class="pull-right" @click="searchShow = false">取消</span>
			</div>
			<yd-tab v-model="tab">
				<yd-tab-panel label="正在竞拍">
					<yd-infinitescroll :callback="loadListDown" class="scroll scroll-a" ref="ls0">
						<yd-list theme="4" slot="list">
							<itemscroll v-for="(item,key) in postArray[0].list" :key="key" class="list-child" :item="item" :serverTime="serverTime"></itemscroll>
						</yd-list>
						<span slot="doneTip">没有更多内容~~</span>
						<!-- 加载中提示，不指定，将显示默认加载中图标 -->
					</yd-infinitescroll>
				</yd-tab-panel>
				<yd-tab-panel label="历史竞拍">
					<yd-infinitescroll :callback="loadListDown" class="scroll scroll-a" ref="ls1">
						<yd-list theme="4" slot="list">
							<itemscroll v-for="(item,key) in postArray[1].list" :key="key" class="list-child" :item="item" :serverTime="serverTime"></itemscroll>
						</yd-list>
						<span slot="doneTip">没有更多内容~~</span>
						<!-- 加载中提示，不指定，将显示默认加载中图标 -->
					</yd-infinitescroll>
				</yd-tab-panel>
			</yd-tab>
		</div>
		<yd-actionsheet :items="myItems" v-model="show"></yd-actionsheet>
	</div>
</template>

<script>
	import titleHead from '@/components/common/Title/Thead.vue'
	import itemscroll from '@/components/lists/Itemscroll.vue'
	export default {
		name: 'user',
		components: {
			titleHead,
			itemscroll
		},
		data() {
			return {
				tab: 0,
				show: false,
				searchShow: false,
				condition: '排序',
				myItems: [{
						label: '默认排序',
						value: '',
						callback: (e) => {
							this.condition = e.label;
							this.submitCondition(e.value)
						},
					},
					{
						label: '按当前价格降序排序',
						value: 1,
						callback: (e) => {
							this.condition = e.label;
							this.submitCondition(e.value)
						},
					},
					{
						label: '按当前价格升序排序',
						value: 2,
						callback: (e) => {
							this.condition = e.label;
							this.submitCondition(e.value)
						},
					},
					{
						label: '已出局优先排序',
						value: 3,
						callback: (e) => {
							this.condition = e.label;
							this.submitCondition(e.value)
						}
					},
					{
						label: '未出局优先排序',
						value: 4,
						callback: (e) => {
							this.condition = e.label;
							this.submitCondition(e.value)
						}
					}
				],
				searchValue: '',
				postArray: [{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							states: "2,3",
							condition: '',
							searchTrim: ''
						},
						list: []
					},
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							states: '4,5',
							condition: '',
							searchTrim: ''
						},
						list: []
					},
				],
			}
		},
		computed: {
			serverTime() {
				return this.$store.state.server.serverTime
			},
		},
		methods: {
			choosed() {
				alert()
			},
			submitCondition(val){
				 this.postArray[this.tab].post.page = 1;
				 this.postArray[this.tab].list = [];
				 this.postArray[this.tab].post.condition = val;
				 this.loadListDown(this.tab)
			},
			submitHandler() {
				 this.postArray[this.tab].post.page = 1;
				 this.postArray[this.tab].list = [];
				 this.postArray[this.tab].post.searchTrim = this.searchValue;
				 this.loadListDown(this.tab)
			},
			// 滚动加载
			loadListDown(tindex) {
				var tabIndex = tindex ? tindex : this.tab;
				this.api.auctionRecord(this.postArray[tabIndex].post)
					.then((res) => {
						if(res.state == 1) {
							this.$store.dispatch('getServerTime')
							const _list = res.data.dataList ? res.data.dataList : [];
							this.postArray[tabIndex].list = [...this.postArray[tabIndex].list, ..._list];

							// 当最后一页的数据少于一页的数据或者页数等于后台返回的总页数时，就是全部加载完毕
							if(_list.length < this.postArray[tabIndex].post.rows || this.postArray[tabIndex].post.page >= res.data.pageCount) {
								// 所有数据加载完毕
								if(tabIndex == 0) {
									this.$refs.ls0.$emit('ydui.infinitescroll.loadedDone');
								}
								if(tabIndex == 1) {
									this.$refs.ls1.$emit('ydui.infinitescroll.loadedDone');
								}
								return;
							}
							if(tabIndex == 0) {
								this.$refs.ls0.$emit('ydui.infinitescroll.finishLoad');
							}
							if(tabIndex == 1) {
								this.$refs.ls1.$emit('ydui.infinitescroll.finishLoad');
							}
							this.postArray[tabIndex].post.page++;
						}
					})

			},

		},
		mounted() {
			this.$nextTick(function() {
				this.loadListDown(0);
				this.loadListDown(1);
			})
		},
		watch: {
			// 如有必要再加路由监听
			selected(val) {
				console.log(val)
			}
		}
	}
</script>

<style lang="less">
 
	
</style>