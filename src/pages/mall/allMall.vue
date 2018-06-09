<template>
	
	<div>
		<yd-navbar title="全部商品" bgcolor="#F8F8F8" fontsize=".36rem" color="#282828" :fixed="true">
	        <router-link :to="{name:'mall'}" slot="left">
	            <!-- <yd-navbar-back-icon></yd-navbar-back-icon> -->
	            <span class="iconfont icon-Slicex9 fs20"></span>
	        </router-link>
	    </yd-navbar>
    	<div class="flex-align-center" style="width: 100%; height: .88rem; background-color: #F8F8F8; margin-top: .88rem;">
			<sort-combo-box @callBack="sortComboBoxEvent"></sort-combo-box>
		</div>
		<div style="margin-top: .24rem;">
			<yd-list theme="3">
				<commodity-list v-for="item,key in list" :itemData="item" :key="key"></commodity-list>
			</yd-list>
		</div>
	</div>

</template>

<script>
	import commodityList from "@/components/lists/commodityList"
	import sortComboBox from "./mallPublic/sortComboBox"
	export default {
		name: 'allMall',
		data() {
			return {
				input1: '',
				addresses: ['苏格兰','日本','台湾','独立装瓶厂'],
				brands: ['MACALLAM 麦卡伦','KARUIZAWA 轻井泽','BRORA 布朗拉','ROSEBAK 罗斯班克','ARDBEG 阿贝','BALVENIE 百富','DALMORE 大摩','HAKUSHU 白州'],
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
			sortComboBox
		},
		methods: {
			sortComboBoxEvent(status) {
				console.log(status);
			}
		}
	}
</script>


<style scoped>

	.yd-input {
		width: auto;
	}
	.yd-btn-hollow {
		background-color: transparent;
		border: 0px;
	}
	.navbar-bottom-line-color:after {
	    border-color: #F8F8F8;
	}
</style>


