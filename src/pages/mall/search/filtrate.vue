<template>
	
	<div>
		<yd-navbar title="筛选" bgcolor="#F8F8F8">
	        <router-link to="#" slot="left">
	            <yd-navbar-back-icon></yd-navbar-back-icon>
	        </router-link>
	        <router-link to="#" slot="right">
	            重置
	        </router-link>
	    </yd-navbar>
    	<div style="padding-top: .8rem;">
    		<span style="padding-left: .24rem; font-size: .28rem;">价格</span>
	    	<div class="priceSection">
	    		<yd-input class="minimumPrice" v-model="input1" placeholder="最低价"></yd-input>
	    		<div class="smallBridge"></div>
	    		<yd-input class="maximumPrice" v-model="input1" placeholder="最高价"></yd-input>
	    	</div>
    	</div>
    	<div style="margin-top: .8rem;">
    		<span style="padding-left: .24rem; font-size: .28rem;">产地</span>
	    	<div class="addressDiv">
	    		<!-- <yd-button type="hollow" v-for="item,key in addresses" :key="key">{{ item }}</yd-button> -->
	    		<button class="addressBtn" v-for="item,key in addresses" :key="key">{{ item }}</button>
	    	</div>
    	</div>
    	<div style="margin-top: .8rem;">
    		<span style="padding-left: .24rem; font-size: .28rem;">品牌</span>
	    	<div class="addressDiv">
	    		<button class="addressBtn" v-for="item,key in brands" :key="key">{{ item.split(" ")[0] }}<br/>{{item.split(" ")[item.split(" ").length-1]}}</button>
	    		<!-- <yd-button type="hollow" v-for="item,key in addresses" :key="key">{{ item }}</yd-button> -->
	    		<button class="moreBrands" @click="clickMoreBrand">更多品牌<i class="iconfont icon-Slicex13"></i></button>
	    		
	    		<!-- <span class="moreBrands">更多品牌</span> -->
	    	</div>
    	</div>
    	<div>
    		<button class="confirmBtn">确定</button>
    	</div>
	</div>

</template>

<script>
	export default {
		name: 'filtrate',
		data() {
			return {
				input1: '',
				addresses: ['苏格兰','日本','台湾','独立装瓶厂'],
				brands: ['MACALLAM 麦卡伦','KARUIZAWA 轻井泽','BRORA 布朗拉','ROSEBAK 罗斯班克','ARDBEG 阿贝','BALVENIE 百富','DALMORE 大摩','HAKUSHU 白州']
			}
		},
		methods: {
			clickMoreBrand() {
				this.$emit('callBack','clickMore');
			}
		}
	}
</script>


<style scoped lang="less">

	.priceSection {
		margin-top: .4rem;
		margin-left: .24rem;
		display: flex;
	}
	.minimumPrice {
		height: .68rem;
		background-color: #F8F8F8;
		width: 2.24rem;
	}
	.maximumPrice {
		height: .68rem;
		background-color: #F8F8F8;
		width: 2.24rem;
	}
	.yd-input>input {
		text-align: center;
	}
	.addressDiv {
		margin-top: .4rem;
		margin-left: .24rem;
	}
	.addressBtn {
    	margin-right: 0.2rem;
    	font-size: 0.24rem;
    	margin-bottom: 0.24rem;
    	/*border: 0.5px solid #282828;*/
    	width: 1.8rem;
    	padding: .14rem 0px;
    	color: #282828;
    	font-weight: 300;
	}
	.moreBrands {
		position: relative;
		top: .2rem;
		margin-right: 0.2rem;
    	font-size: 0.24rem;
    	margin-bottom: 0.24rem;
    	border: 0px solid #282828;
    	/*height: .92rem;*/
    	width: 1.8rem;
    	/*padding: .14rem 0px;*/
    	color: #282828;
    	i {
    		font-size: .24rem; color: #CCCCCC; margin-left: .2rem;
    	}
	}
	.confirmBtn {
		position: fixed;
		bottom: .1rem;
		left: .2rem;
		right: .2rem;
		width: 90%;
		height: .8rem;
		background-color: #282828;
		color: #CD733B;
		border: none;
	}
	.smallBridge {
		height: 1px;
		width: .4rem; 
		background-color: #F2F2F2;
		margin-left: .2rem;
		margin-right: .2rem; 
		margin-top: .34rem;
	}
</style>

<style lang="less">
	.minimumPrice {
		input {
			text-align: center;
		}
	}
	.maximumPrice {
		input {
			text-align: center;
		}
	}
</style>

