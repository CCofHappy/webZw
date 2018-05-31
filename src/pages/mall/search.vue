<template>
	
	<div style="position: static;">
		<!-- <yd-search :result="result" v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search> -->
		<yd-search v-model="value2" :on-submit="submitHandler" style="background-color: #F8F8F8;"></yd-search>
		<!-- <yd-button style="position: absolute;right: 8px;top: 13px; font-size: 14px; background-color: #F8F8F8;color: black;">取消</yd-button> -->
        <div style="position: static; margin-top: 40px;">
            <span style="font-size: 16px; margin-left: 12px;font-weight: 500;">大家都在搜</span>
            <yd-button type="primary" style="position: absolute;right: 8px;">刷新</yd-button>
        </div>
		<div style="margin-top: 20px; margin-left: 12px; margin-right: 12px;">
			<yd-button type="warning" v-for="item,key in publicSearch" :key="key">{{ item }}</yd-button>
		</div>
		<div style="position: static; margin-top: 40px;">
            <span style="font-size: 16px; margin-left: 12px;font-weight: 500;">历史搜索</span>
            <yd-button type="primary" style="position: absolute;right: 8px;">删除</yd-button>
        </div>
		<div style="margin-top: 20px; margin-left: 12px; margin-right: 12px;">
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
                historySearch:['麦卡伦','阿贝']
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
    	margin-right: 20px;
    	font-size: 14px;
    	margin-bottom: 12px;
	}
	.yd-search-input { background-color: #F8F8F8; }

</style>


