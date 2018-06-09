
<template>
	
	<div class="sortComboBox flex">
		<div class="flex-1 leftBtn">
			<yd-button type="hollow" class="iconfont" :style="sortType==0?{color: '#CD733B'}:{color:'#282828'}" @click.native="clickSore(0)">默认排序</yd-button>
		</div>
		<div class="flex-1 text-center centerBtn">
			<yd-button type="hollow" class="iconfont" @click.native="clickSore(1)">价格</yd-button>
				<div style="display:inline-block; position: relative;">
				<i class="iconfont icon-paixujiantoushang" :style="sortType==1?{color: '#CD733B'}:{color:'#282828'}"></i>
				<i class="iconfont icon-paixujiantouxia rightIcon" :style="sortType==2?{color: '#CD733B'}:{color:'#282828'}"></i>
			</div>
		</div>
		<div class="flex-1 text-right padding-right-sm rightBtn">
			<yd-button type="hollow" class="iconfont" @click.native="clickFiltrate">筛选</yd-button>
			<i class="iconfont icon-iconfontzhizuobiaozhun023125"></i>
		</div>
	</div>

</template>

<script>
	export default {
		name: "sortComboBox",
		data() {
			return {
				sortType: 0
			}
		},
		methods: {
			clickFiltrate() {
				this.$emit('callBack','clickFiltrate');
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
			}
		}
	}
</script>

<style lang="less">
	.sortComboBox {
		.yd-btn-hollow {
			background-color: transparent;
			border: 0px;
		}
		.leftBtn {
			margin-left: .2rem;
			button {
				color: #CD733B;
			}
		}
		.centerBtn {
			.yd-btn {
				padding: 0;
			}
			i {
				font-size: .24rem;
			}
			.rightIcon {
				position: absolute;
				left: 0rem;
				// color: #CD733B;
				top: 4px;
			}
		}
		.rightBtn {
			.yd-btn {
				padding: 0;
			}
			i {
				font-size: .2rem;
				padding-right: .2rem;
			}
		}
	}
	
</style>






