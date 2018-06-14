<template>
	<div :class="scrActive ? 'scrActive' : ''">
		<header class="top">
			<div class="title">
				<span class="span" style="font-size: 0.54rem;">社区</span>
				<router-link to="/" class="padding-top-sm margin-left-sm span">规则</router-link>
				<p class="pull-right padding-top-xs">
					<router-link :to="{name:'communitySeach'}" class="fs20 margin-right-md">
						<i class="iconfont icon--search"></i>
					</router-link>
					<router-link to="/" class="fs20">
						<i class="iconfont icon--write"></i>
					</router-link>
				</p>
			</div>
			<img class="headerImg" src="@/assets/share-entrance.jpg" />
		</header>
		<!--占位块-->
		<div class="gord"></div>
		<div class="page">
			<!--分享吧按钮-->
			<el-dropdown class="push" trigger="click" @command="handleCommand" @visible-change="change">
				<span class="el-dropdown-link fs16 fw600" :class="tab >=2 ? 'active' : ''">
			    分享吧 <i class="iconfont fs20" :class="icon"></i>
			  </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="a" :class="tab == 2 ? 'active' : ''">正在分享</el-dropdown-item>
					<el-dropdown-item command="b" :class="tab == 3 ? 'active' : ''">历史分享</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<yd-tab v-model="tab" class="communityTab" active-color="#CD733B">
				<yd-tab-panel label="交流吧">

					<el-dropdown class="tabPush" trigger="click" @command="sequence" @visible-change="changeSequence">
						<span class="el-dropdown-link">
					    {{postArray[tab].sequenceName}} <i class="iconfont" :class="iconSequence"></i>
					  </span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item :command="1">默认排序</el-dropdown-item>
							<el-dropdown-item :command="4">评论数最多</el-dropdown-item>
							<el-dropdown-item :command="2">精选</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>

					<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo0">
						<yd-infinitescroll :callback="loadListDown" ref="ls0">
							<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[tab].list" :key="key" :item="item" :tab="tab" :type="3"></comItemr>
							<span slot="doneTip">没有更多内容~~</span>
							<!-- 加载中提示，不指定，将显示默认加载中图标 -->
							<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
						</yd-infinitescroll>
					</yd-pullrefresh>
				</yd-tab-panel>
				<yd-tab-panel label="酒评贴">
					<el-dropdown class="tabPush" trigger="click" @command="sequence" @visible-change="changeSequence">
						<span class="el-dropdown-link">
					    {{postArray[tab].sequenceName}} <i class="iconfont" :class="iconSequence"></i>
					  </span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item :command="1">默认排序</el-dropdown-item>
							<el-dropdown-item :command="3">回复数排序</el-dropdown-item>
							<el-dropdown-item :command="2">精选</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>

					<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo1">
						<yd-infinitescroll :callback="loadListDown" ref="ls1">
							<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[tab].list" :key="key" :item="item" :tab="tab" :type="2"></comItemr>
							<span slot="doneTip">没有更多内容~~</span>
							<!-- 加载中提示，不指定，将显示默认加载中图标 -->
							<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
						</yd-infinitescroll>

					</yd-pullrefresh>
				</yd-tab-panel>
				<yd-tab-panel label="正在分享">
					<el-dropdown class="tabPush" trigger="click" @command="sequence" @visible-change="changeSequence">
						<span class="el-dropdown-link">
					    {{postArray[tab].sequenceName}} <i class="iconfont" :class="iconSequence"></i>
					  </span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item :command="1">价格排序</el-dropdown-item>
							<el-dropdown-item :command="2">回复时间排序</el-dropdown-item>
							<el-dropdown-item :command="3">发帖时间排序</el-dropdown-item>
							<el-dropdown-item :command="4">评论次数排序</el-dropdown-item>
							<el-dropdown-item :command="5">审核时间排序</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>

					<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo2">
						<yd-infinitescroll :callback="loadListDown" ref="ls2">
							<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[tab].list" :key="key" :item="item" :tab="tab" :type="1"></comItemr>
							<span slot="doneTip">没有更多内容~~</span>
							<!-- 加载中提示，不指定，将显示默认加载中图标 -->
							<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
						</yd-infinitescroll>
					</yd-pullrefresh>
				</yd-tab-panel>
				<yd-tab-panel label="历史分享">
					<el-dropdown class="tabPush" trigger="click" @command="sequence" @visible-change="changeSequence">
						<span class="el-dropdown-link">
					    {{postArray[tab].sequenceName}} <i class="iconfont" :class="iconSequence"></i>
					  </span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item :command="1">价格排序</el-dropdown-item>
							<el-dropdown-item :command="2">回复时间排序</el-dropdown-item>
							<el-dropdown-item :command="3">发帖时间排序</el-dropdown-item>
							<el-dropdown-item :command="4">评论次数排序</el-dropdown-item>
							<el-dropdown-item :command="5">审核时间排序</el-dropdown-item>
							<el-dropdown-item :command="6">结束时间排序</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>

					<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo3">
						<yd-infinitescroll :callback="loadListDown" ref="ls3">
							<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[tab].list" :key="key" :item="item" :tab="tab" :type="1"></comItemr>
							<span slot="doneTip">没有更多内容~~</span>
							<!-- 加载中提示，不指定，将显示默认加载中图标 -->
							<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
						</yd-infinitescroll>
					</yd-pullrefresh>
				</yd-tab-panel>
			</yd-tab>
		</div>
	</div>
</template>

<script>
	import comItemr from '@/pages/community/common/comitem.vue'
	export default {
		components: {
			comItemr
		},
		data() {
			return {
				scrActive: false, //控制头部是否固定，当滚动高度大于距离顶部的时候触发
				tab: 0,
				icon: 'icon-paixujiantouxia',
				iconSequence: ' icon-xiangxia',
				postArray: [{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 1,
							sort: 2
						},
						list: [],
						sequenceName: '排序'
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
						sequenceName: '排序'
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
						sequenceName: '排序'
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
						sequenceName: '排序'
					},
				]
			}
		},
		computed: {

		},
		methods: {
			handleCommand(command) {
				if(command == 'a') {
					this.tab = 2
				}
				if(command == 'b') {
					this.tab = 3
				}
			},
			change(e) {
				if(e) {
					this.icon = 'icon-paixujiantoushang'
				} else {
					this.icon = 'icon-paixujiantouxia'
				}
			},
			sequence(command, obj) {
				this.postArray[this.tab].post.orderBy = command;
				this.postArray[this.tab].post.page = 1;
				this.postArray[this.tab].list = [];
				this.loadListDown(this.tab)
				this.postArray[this.tab].sequenceName = obj.$el.innerText;
			},
			changeSequence(e) {
				if(e) {
					this.iconSequence = 'icon-xiangshang'
				} else {
					this.iconSequence = 'icon-xiangxia'
				}
			},
			// 滚动监听-倒计时吸顶
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(!this.offsetTop && document.querySelector('.yd-tab-nav-nomal')) {
					this.offsetTop = document.querySelector('.yd-tab-nav-nomal').offsetTop;
				}
				if(scrollTop >= this.offsetTop) {
					this.scrActive = true;
				} else {
					this.scrActive = false;
				}
			},
			//滚动加载
			async loadListDown(tindex) {
				var tabIndex = tindex ? tindex : this.tab;
				let _res;
				let _list;
				switch(tabIndex) {
					case 0:
						_res = await this.api.queryInterflowList(this.postArray[tabIndex].post);
						break;
					case 1:
						_res = await this.api.wrlist(this.postArray[tabIndex].post);
						break;
					case 2:
						_res = await this.api.sharelist(this.postArray[tabIndex].post);
						break;
					case 3:
						_res = await this.api.sharelist(this.postArray[tabIndex].post);
						break;
					default:
						break;
				}
				if(_res.state) {
					_list = _res.data.dataList;
				}
				this.postArray[tabIndex].list = [...this.postArray[tabIndex].list, ..._list];
				if(_list.length < this.postArray[tabIndex].post.rows || this.postArray[tabIndex].post.page >= _res.data.pageCount) {
					// 所有数据加载完毕
					if(tabIndex == 0) {
						this.$refs.ls0.$emit('ydui.infinitescroll.loadedDone');
					}
					if(tabIndex == 1) {
						this.$refs.ls1.$emit('ydui.infinitescroll.loadedDone');
					}
					if(tabIndex == 2) {
						this.$refs.ls2.$emit('ydui.infinitescroll.loadedDone');
					}
					if(tabIndex == 3) {
						this.$refs.ls3.$emit('ydui.infinitescroll.loadedDone');
					}
					return;
				}
				if(tabIndex == 0) {
					this.$refs.ls0.$emit('ydui.infinitescroll.finishLoad');
				}
				if(tabIndex == 1) {
					this.$refs.ls1.$emit('ydui.infinitescroll.finishLoad');
				}
				if(tabIndex == 2) {
					this.$refs.ls2.$emit('ydui.infinitescroll.finishLoad');
				}
				if(tabIndex == 3) {
					this.$refs.ls3.$emit('ydui.infinitescroll.finishLoad');
				}
				this.postArray[tabIndex].post.page++;

			},
			async loadListUp() {
				var tabIndex = this.tab;
				let _res;
				let _list;
				this.postArray[tabIndex].post.page = 1;
				switch(tabIndex) {
					case 0:
						_res = await this.api.queryInterflowList(this.postArray[tabIndex].post);
						break;
					case 1:
						_res = await this.api.wrlist(this.postArray[tabIndex].post);
						break;
					case 2:
						_res = await this.api.sharelist(this.postArray[tabIndex].post);
						break;
					case 3:
						_res = await this.api.sharelist(this.postArray[tabIndex].post);
						break;
					default:
						break;
				}
				if(_res.state) {
					_list = _res.data.dataList;
					this.postArray[tabIndex].list = _list;
					this.$dialog.toast({
						mes: '更新成功'
					});
					switch(tabIndex) {
						case 0:
							this.$refs.prdemo0.$emit('ydui.pullrefresh.finishLoad');
							break;
						case 1:
							this.$refs.prdemo1.$emit('ydui.pullrefresh.finishLoad');
							break;
						case 2:
							this.$refs.prdemo2.$emit('ydui.pullrefresh.finishLoad');
							break;
						case 3:
							this.$refs.prdemo3.$emit('ydui.pullrefresh.finishLoad');
							break;
						default:
							break;
					}

				}

			},
			//子组件关注之后的动作请求刷新数据
			async updata(item,tindex) {
				//待增加加载动画
				var tabIndex = tindex ? tindex : this.tab;
			 	this.postArray[tabIndex].list.forEach((e)=>{
	  	 			if(item.uid == e.uid) {
	  	 				e.isFollow = 1;
	  	 			}
	  	 		})
			 
			}
		},
		mounted() {
			this.loadListDown(this.tab)
			this.$nextTick(function() {
				window.addEventListener('scroll', this.handleScroll)
			})
			this.tab = parseInt(this.local.get('tab')) || 0
			this.local.remove('tab')
		},
		watch: {
			$route() {

			},
			tab(val) {
				//切换选项卡的时候选择加载
				if(this.postArray[val].list.length == 0) {
					this.loadListDown(val)
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.title {
		padding: .3rem .24rem 0 .24rem;
		.span {
			display: inline-block;
			height: 1rem;
			vertical-align: text-top;
		}
	}
	
	.page {
		position: relative;
		.push {
			position: absolute;
			left: 3.5rem;
			top: .14rem;
			z-index: 99;
		}
	}
	
	.active {
		color: #CD733B;
	}
	
	.el-dropdown-link.active {
		position: relative;
		&:after {
			content: "";
			width: 40%;
			height: 3px;
			position: absolute;
			left: 15%;
			bottom: -.2rem;
			z-index: 4;
			background-color: currentColor;
		}
	}
	
	.icon-paixujiantoushang {
		top: 0.1rem;
	}
	
	.icon-paixujiantouxia {
		top: -0.06rem;
	}
	
	.tabPush {
		position: absolute;
		top: -.64rem;
		z-index: 9999;
		right: .2rem;
		color: #656565;
	}
</style>