
<template>
    <div>
        <div class="flex mallOrderInfo" :style="{paddingTop: topBottomDistance, paddingBottom: topBottomDistance}">
            <div class="secondLine">
                <img src="//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg">
            </div>
            <div class="thirdLine">
                <p class="title">波特艾伦25年 1976-2001 道格拉斯·兰恩</p>
                <p class="detail fs12"><span>净含量：</span><span>700ml</span><span class="rightSpan">酒精度：<span></span>45%vol</span></p>
                <p class="lastP"><span class="priceSpan fblack fw600">¥ 33000</span><span class="rightSpan fs12 fblack">x 1</span></p>
            </div>
        </div>
        <div v-if="bottomLine" class="serveType">
            <p><span class="red fs20">*</span><span class="fw600">服务类型</span></p>
        </div>
        <div class="segmentation1"></div>
    </div>
	
</template>

<script>
	export default {
		name: "orderInfo",
        props: ["itemData","bottomLine"],
		data() {
			return {
                topBottomDistance: '.4rem'
			}
		},
        mounted() {
            if (this.bottomLine) {
                this.topBottomDistance = '.3rem';
            }
        }
	}
</script>

<style lang="less" scoped>
    .mallOrderInfo {
        background-color: white;
        .secondLine {
            margin-left: .24rem;
            height: 1.6rem;
            width: 1.6rem;
            img {
                width: 1.6rem;
                height: 1.6rem;
            }
        }
        .thirdLine {
            position: relative;
            margin-left: .2rem;
            .title {
                color: #282828;
                padding-right: .24rem;
            }
            .detail {
                color: #979797;
                padding-top: .1rem;
                .rightSpan {
                    position: absolute;
                    right: .36rem;
                }
            }
            .lastP {
                position: absolute;
                bottom: 0rem;
                width: 100%;
                .rightSpan {
                    position: absolute;
                    right: 0rem;
                }
            }
        }
    }
    .serveType {
        margin-left: .24rem;
        margin-bottom: .3rem;
    }
</style>









