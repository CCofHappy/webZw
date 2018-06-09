<template>
	
	<div>
		<div class="searchNav">
			<yd-input class="searchInput" v-model="input1" placeholder="请输入关键字"></yd-input>
			<yd-button type="hollow" class="iconfont navCancleBtn" @click.native="goBackSearch">取消</yd-button>
			<div style="margin-top: 1rem;width: 100%; background-color: #F8F8F8;">
				<sort-combo-box @callBack="sortComboBoxEvent"></sort-combo-box>
			</div>
			
		</div>
		<div style="margin-top: 2.28rem;">
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
	import sortComboBox from "../mallPublic/sortComboBox"

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
			filtrate,
			sortComboBox
		},
		methods: {
			clickFiltrate() {
				this.show4 = true;
			},
			goBackSearch() {
				this.$router.push({name: "search"});
			},
			filtrateCallBack(status) {
				this.isMore = true;
			},
			sortComboBoxEvent(status) {
				if (status == "clickFiltrate") {
					this.show4 = true;
				}
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
		font-size: .28rem;
	}
	.searchInput {
		position: absolute;
		left: .24rem;
		background-color: white;
		top: .1rem;
		height: .68rem;
		right: 1.04rem;
		input {padding-left: .2rem;}
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

