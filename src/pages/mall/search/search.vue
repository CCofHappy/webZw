<template>
	
	<div>
        <yd-navbar bgcolor="#F8F8F8" class="searchNav">
            <div slot="center" class="search">
                <yd-input slot="right" v-model="searchContent" max="20" placeholder="快速搜索"></yd-input>
            </div>
            <router-link :to="{name:'mall'}" slot="right">
                <span style=" color: #282828;">取消</span>
            </router-link>
        </yd-navbar>
        <div class="bigTitle">
            <span class="fs16 fw500 margin-left-12">大家都在搜</span>
            <yd-button type="primary" class="iconfont icon-msnui-refresh-line rightIcon"></yd-button>
        </div>
		<div class="keyBtn">
			<yd-button type="warning" v-for="item,key in publicSearch" :key="key" @click.native="clickSearchResult(item)">{{ item }}</yd-button>
		</div>
		<div class="bigTitle">
            <span class="fs16 fw500 margin-left-12">历史搜索</span>
            <yd-button type="primary" class="iconfont icon-Slicex14 rightIcon"></yd-button>
        </div>
		<div class="keyBtn">
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
                input1: '',
                searchContent: ''
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

<style lang="less" scoped>
	
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

<style lang="less">
    .searchNav {
        .yd-navbar-item {
            flex: none;
        }
        .yd-navbar-center-box {
            width: 100%;
        }
    }
</style>

