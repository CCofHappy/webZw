<template>
	
	<div>
		<div class="searchNav">
			<yd-input class="searchInput" v-model="input1" placeholder="请输入关键字"></yd-input>
			<yd-button type="hollow" class="iconfont navCancleBtn" @click.native="goBackSearch">取消</yd-button>
			<div style="margin-top: 1rem;width: 100%; background-color: #F8F8F8; display: flex;flex-direction: row;">
				<div class="flex-1 leftBtn">
					<yd-button type="hollow" class="iconfont" :style="sortType==0?{color: '#CD733B'}:{color:'#282828'}" @click.native="clickSore(0)">默认排序</yd-button>
				</div>
				<div class="flex-1 text-center centerBtn">
					<yd-button type="hollow" class="iconfont" @click.native="clickSore(1)">价格</yd-button>
 					<div style="display:inline-block; position: relative;">
						<i class="iconfont icon-paixujiantoushang-copy" :style="sortType==1?{color: '#CD733B'}:{color:'#282828'}"></i>
						<i class="iconfont icon-paixujiantouxia-copy rightIcon" :style="sortType==2?{color: '#CD733B'}:{color:'#282828'}"></i>
					</div>
				</div>
				<div class="flex-1 text-right padding-right-sm rightBtn">
					<yd-button type="hollow" class="iconfont" @click.native="clickFiltrate">筛选</yd-button>
					<i class="iconfont icon-iconfontzhizuobiaozhun023125"></i>
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
            <filtrate @callBack="filtrateCallBack" v-show="!isMore"></filtrate>
            <div class="indexList" v-show="isMore">
            	<yd-navbar title="品牌" bgcolor="#F8F8F8" color="#282828" :fixed="true">
			        <router-link :to="{name: 'flashSale'}" slot="left">
			            <i class="iconfont icon-Slicex9"></i>
			        </router-link>
			        <span slot="right">重置</span>
			    </yd-navbar>
            	<mt-index-list :show-indicator="false">
				  <mt-index-section index="A">
				    <mt-cell title="Aaron">
				    	<span class="iconfont icon-Slicex19 fs10 rightSelectIcon"></span>
				    </mt-cell>
				    <mt-cell title="Alden"></mt-cell>
				    <mt-cell title="Austin"></mt-cell>
				    <mt-cell title="Alden"></mt-cell>
				    <mt-cell title="Austin"></mt-cell>
				    <mt-cell title="Alden"></mt-cell>
				    <mt-cell title="Austin"></mt-cell>
				  </mt-index-section>
				  <mt-index-section index="B">
				    <mt-cell title="Baldwin"></mt-cell>
				    <mt-cell title="Braden"></mt-cell>
				    <mt-cell title="Baldwin"></mt-cell>
				    <mt-cell title="Braden"></mt-cell>
				    <mt-cell title="Baldwin"></mt-cell>
				    <mt-cell title="Braden"></mt-cell>
				    <mt-cell title="Baldwin"></mt-cell>
				    <mt-cell title="Braden"></mt-cell>
				  </mt-index-section>
				  <mt-index-section index="Z">
				    <mt-cell title="Zack"></mt-cell>
				    <mt-cell title="Zane"></mt-cell>
				    <mt-cell title="Zack"></mt-cell>
				    <mt-cell title="Zane"></mt-cell>
				    <mt-cell title="Zack"></mt-cell>
				    <mt-cell title="Zane"></mt-cell>
				  </mt-index-section>
				</mt-index-list>
            </div>
            
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
				isMore: false,
				sortType: 0, // 排序类型，0代表默认排序，1价格升序，2是价格降序
				screenCondition: {},
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
			},
			clickSore(sortType) {
				if (sortType == 0) {
					this.sortType = 0;
				} else {
					if (this.sortType == 0) {
						this.sortType = 1;
					} else if (this.sortType == 1) {
						this.sortType = 2;
					} else {
						this.sortType = 1;
					}
				}
			},
			filtrateCallBack(status) {
				this.isMore = true;
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

	.leftBtn {
		button {
			color: #CD733B;
		}
	}
	.rightSelectIcon {
		 margin-right: .4rem; color: #CD733B;
	}
	
</style>

<style lang="less">
	.rightBtn {
		.yd-btn {
			padding: 0;
		}
		i {
			font-size: .2rem;
			padding-right: .2rem;
		}
	}
	.centerBtn {
		.yd-btn {
			padding: 0;
		}
		i {
			font-size: .2rem;
		}
		.rightIcon {
			position: absolute;
			left: 0rem;
			// color: #CD733B;
			top: 4px;
		}
	}
	.indexList {
		.mint-cell-wrapper {
			background-image: linear-gradient(180deg, #fafafa, #fafafa 50%, transparent 50%);
		}
		.mint-indexlist-nav {
			border-left: none;
			background-color: transparent;
		}
		.mint-cell:last-child {
			background-image: linear-gradient(0deg, #FFFFFF, #FFFFFF 50%, transparent 50%);
		}
		.mint-indexlist {
			margin-top: 1rem;
		}
		.mint-indexsection-index {
			background-color: #F2F2F2;
		}
		.mint-cell-text {
			color: #282828; // 字体颜色
		}
	}
</style>

