<template>
	
	<div style="position: static;">
		<!-- <yd-search :result="result" v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search> -->
        <!-- <yd-search :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search> -->
		<!-- <yd-search v-model="value2" :on-submit="submitHandler" style="background-color: #F8F8F8;"></yd-search> -->
		<!-- <yd-button style="position: absolute;right: 8px;top: 13px; font-size: 14px; background-color: #F8F8F8;color: black;">取消</yd-button> -->
        <yd-navbar bgcolor="#F8F8F8">

            <!-- <yd-search v-model="value2" :on-submit="submitHandler" style="background-color: #F8F8F8;"></yd-search> -->
            <div slot="center" class="search"><i class="iconfont icon-sousuo"></i> 快速搜索</div>
            <router-link :to="{name:'mall'}" slot="right">
                <span>取消</span>
            </router-link>
        </yd-navbar>
        <div style="position: static; margin-top: 0.8rem;">
            <span style="font-size: .32rem; margin-left: 0.24rem;font-weight: 500;">大家都在搜</span>
            <yd-button type="primary" class="iconfont icon-Slicex10" style="position: absolute;right: .16rem;"></yd-button>
        </div>
		<div style="margin-top: .4rem; margin-left: .24rem; margin-right: .24rem;">
			<yd-button type="warning" v-for="item,key in publicSearch" :key="key" @click.native="clickSearchResult(item)">{{ item }}</yd-button>
		</div>
		<div style="position: static; margin-top: .8rem;">
            <span style="font-size: .32rem; margin-left: .24rem;font-weight: 500;">历史搜索</span>
            <yd-button type="primary" class="iconfont" style="position: absolute;right: .16rem;">&#xe65a;</yd-button>
        </div>
		<div style="margin-top: .4rem; margin-left: .24rem; margin-right: .24rem;">
			<yd-button type="warning" v-for="item,key in publicSearch" :key="key">{{ item }}</yd-button>
		</div>

	</div>


</template>


<script>
    export default {
        data() {
            return {
                value2: '',
                result: [],
                publicSearch:['响','山峰','罗斯班克','波特艾伦','山峰','罗斯班克','波特艾伦'],
                historySearch:['麦卡伦','阿贝'],
                input1: ''
            }
        },
        methods: {
            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            itemClickHandler(item) {
                this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            },
            clickSearchResult(clickContent) {
                this.$router.push({ name: 'searchResult', params:{ searchContent: clickContent } });
            }
        },
        watch: {
            value2(val) {
                this.result = this.getResult(val);
            }
        }
    }
</script>

<style scoped>
	
	.yd-btn-warning{
		background-color: #F2F2F2;
    	color: #000;
    	margin-right: 0.4rem;
    	font-size: 0.28rem;
    	margin-bottom: 0.24rem;
	}
	.yd-search-input { background-color: #F8F8F8; }

    .yd-btn-primary {
        background-color: white;
        color: #000;
    }
    .navbar-bottom-line-color:after {
      border-color: #F8F8F8 !important;
    }

    .search {
      font-size: 0.28rem;
      background-color: #FFF;
      width: 100%;
      padding: .1rem;
      color: #D3D3D3;
      border-radius: 2px;
    }

</style>


