<template>
	<div>
		<header>
	     	<div class="title">
	     		<span class="span" style="font-size: 0.54rem;">社区</span>
	     		<router-link  to="/" class="padding-top-sm margin-left-sm span">规则</router-link >
	     		<p class="pull-right padding-top-xs">
	     			<router-link to="/" class="fs20 margin-right-md">
	     				<i class="iconfont icon--search"></i>
	     			</router-link>
	     			<router-link to="/" class="fs20">
	     				<i class="iconfont icon--write"></i>
	     			</router-link>
	     		</p>
	     	</div>
	     	<img class="headerImg" src="@/assets/share-entrance.jpg" />
	     </header>
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
			<yd-tab v-model="tab" class="communityTab padding-bottom-lg" active-color="#CD733B">
				<yd-tab-panel label="交流吧">
					<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
						<yd-infinitescroll :callback="loadListDown" ref="ls0">
							<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[0].list" :key="key" :item="item" :type="3"></comItemr>
							<span slot="doneTip">没有更多内容~~</span>
							<!-- 加载中提示，不指定，将显示默认加载中图标 -->
							<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
						</yd-infinitescroll>

					</yd-pullrefresh>
				</yd-tab-panel>
				<yd-tab-panel label="酒评贴">
						<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
							<yd-infinitescroll :callback="loadListDown" ref="ls1">
								<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[1].list" :key="key" :item="item" :type="2"></comItemr>
								<span slot="doneTip">没有更多内容~~</span>
								<!-- 加载中提示，不指定，将显示默认加载中图标 -->
								<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
							</yd-infinitescroll>
	
						</yd-pullrefresh>
				</yd-tab-panel>
				<yd-tab-panel label="正在分享">
					<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
							<yd-infinitescroll :callback="loadListDown" ref="ls2">
								<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[2].list" :key="key" :item="item" :type="1"></comItemr>
								<span slot="doneTip">没有更多内容~~</span>
								<!-- 加载中提示，不指定，将显示默认加载中图标 -->
								<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
							</yd-infinitescroll>
						</yd-pullrefresh>
				</yd-tab-panel>
				<yd-tab-panel label="历史分享">
					<yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
							<yd-infinitescroll :callback="loadListDown" ref="ls3">
								<comItemr @getData="updata" class="list-child" slot="list" v-for="item,key in postArray[3].list" :key="key" :item="item" :type="1"></comItemr>
								<span slot="doneTip">没有更多内容~~</span>
								<!-- 加载中提示，不指定，将显示默认加载中图标 -->
								<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
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
				tab: 0,
				icon: 'icon-paixujiantouxia',
				postArray: [
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 1,
							sort: 1
						},
						list: []
					},
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 1,
							sort: 1
						},
						list: []
					},
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 1,
							sort: 1
						},
						list: []
					},
					{
						post: {
							customerSeq: Cookie.get('userSeq'),
							page: 1,
							rows: 10,
							orderBy: 1,
							sort: 1
						},
						list: []
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
					default:
						break;
				}
				if(_res.state) {
					_list = _res.data.dataList;
				}
				this.postArray[tabIndex].list = [...this.postArray[tabIndex].list, ..._list];
				if(_list.length < this.postArray[tabIndex].post.rows || this.postArray[tabIndex].post.page >= _res.data.pageCount) {
					// 所有数据加载完毕
					 if(tabIndex == 0){
	                    this.$refs.ls0.$emit('ydui.infinitescroll.loadedDone');
	                  }
	                  if(tabIndex == 1){
	                    this.$refs.ls1.$emit('ydui.infinitescroll.loadedDone');
	                  }
	                  if(tabIndex == 2){
	                    this.$refs.ls2.$emit('ydui.infinitescroll.loadedDone');
	                  }
	                  if(tabIndex == 3){
	                    this.$refs.ls3.$emit('ydui.infinitescroll.loadedDone');
	                  }
					return;
				}
				if(tabIndex == 0){
                	this.$refs.ls0.$emit('ydui.infinitescroll.finishLoad');
                  }
                  if(tabIndex == 1){
                	this.$refs.ls1.$emit('ydui.infinitescroll.finishLoad');
                  }
                  if(tabIndex == 2){
                	this.$refs.ls2.$emit('ydui.infinitescroll.finishLoad');
                  }
                  if(tabIndex == 3){
                	this.$refs.ls3.$emit('ydui.infinitescroll.finishLoad');
                  }
				  this.postArray[tabIndex].post.page++;

			},
			loadListUp() {

			},
			//子组件请求刷新数据
			async updata(tindex){
				//待增加加载动画
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop   //记录高度
				var tabIndex = tindex ? tindex : this.tab;
				this.postArray[tabIndex].post.rows = this.postArray[tabIndex].list.length;
				this.postArray[tabIndex].post.page = 1;
				this.postArray[tabIndex].list = [];
				let _res = await this.api.queryInterflowList(this.postArray[tabIndex].post);
				this.postArray[tabIndex].list = _res.data.dataList;
				this.$nextTick(()=>{
     		  		window.scroll(0,scrollTop);
     		  		//滚动到指定高度后，要还原请求参数
					this.postArray[tabIndex].post.page = this.postArray[tabIndex].post.rows/10 + 1;
					this.postArray[tabIndex].post.rows = 10
					//待增加关闭加载动画
     		  	})
				
			}
		},
		mounted() {
			this.loadListDown(this.tab)
		},
		watch: {
			$route() {

			},
			tab(val) {
				if(this.postArray[val].list.length == 0){
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
.headerImg {
 	width: 100%;
 	height: 1.6rem;
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
</style>