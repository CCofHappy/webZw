 <!-- 无限加载拍品列表 -->
 <!-- 
    该组件的使用规则：
    1.无限加载的数据是从父组件传入的，并且父组件的初始化方法名必须和该组件的调用名一致，此组件现在用的方法名是updata()
    2.父组件的入参名一定要为postData,具体使用详细可以看listGoods.vue和session.vue的使用
  -->
<template>
    <yd-pullrefresh class="scroll scroll-a" :callback="loadListUp" ref="prdemo">
            <yd-infinitescroll :callback="loadListDown" ref="ls">
                <yd-list theme="4" slot="list">
                  <div class="list-child" v-for="item,key in list" :key="key">
                    <yd-list-item>
                        <img slot="img" :src="item.auctionGoodsIcon">
                        <span slot="title">
                            <b>EnglishName</b>
                        </span>
                        <div slot="other" class="goodsname">
                            <yd-list-other class="text-left fblack">
                                <span class="text2row fs14">{{item.auctionGoodsName}}</span>
                            </yd-list-other>
                            <!-- 拍品介绍，历史列表不渲染 -->
                            <div v-if="item.state <= 3 || $route.name == 'pick'">
                                 <yd-list-other class="text-left">
                                    <div class="flex fblack">
                                        <span class="flex-1"><i class="bhicon margin-right-xs"></i>{{item.auctionGoodsCode}}</span>
                                        <span class="flex-1"><i class="qpicon margin-right-xs"></i>￥{{item.qiPaiJia}}</span>
                                    </div>
                                </yd-list-other>
                                <yd-list-other class="text-left">
                                    <div class="flex fblack">
                                        <span class="flex-1"><i class="jjicon margin-right-xs"></i>￥{{item.jiaJiaStep}}</span>
                                        <span class="flex-1"><i class="ygicon margin-right-xs"></i>￥{{item.qiPaiJia}}</span>
                                    </div>
                                </yd-list-other>
                            </div>

                            <yd-list-other class="text-left fblack fs12 margin-top-xs">
                                <p v-if="item.state <= 2">
                                    <span>起拍价：</span> 
                                    <span class="priceNum">￥{{item.qiPaiJia}}</span>
                                </p>
                                <p v-if="item.state == 3">
                                    <span>当前价：</span> 
                                    <span class="priceNum">￥{{item.currPrice}}</span>
                                </p>
                                <p v-if="item.state == 4">
                                    <span>成交价：</span> 
                                    <span class="priceNum">￥{{item.currPrice}}</span>
                                    <!-- 含佣icon，只有历史拍卖列表才有 -->
                                 <!--    <i class="hyicon margin-left-sm text-top"></i> -->
                                </p>
                                <p v-if="item.state == 5"><span>成交价：</span> 流拍</p>
                            </yd-list-other>
                        </div>
                        <!-- 私洽按钮组（只有历史拍卖列表才有） -->
                        <yd-list-other v-if="item.state > 3" slot="other" class="text-left margin-top-xs">
                            <yd-button class="sky-btn sky-btn-orange" v-if="item.isNegotiate == 0" type="primary">私洽</yd-button>
                            <yd-button class="sky-btn" type="hollow" v-else bgcolor="#F1F1F1" >已私洽</yd-button>
                        </yd-list-other>
                    </yd-list-item>


                    <!-- item.state <= 3 && $route.name != 'pick' 历史拍品页和饮用精选是不需要显示以下模块的 -->
                     <div class="cl-box"  v-if="item.state <= 3 && $route.name != 'pick'">
                         <div class="cl-row">
                            <!-- 当前拍卖详情，只有正在拍卖中才显示 -->
                             <div class="cl-td text-left padding-left-sm fs12" v-if="item.state == 3">
                                  <p v-if="item.bondState == 1">
                                    <span>我的出价：￥{{item.myPrice ? item.myPrice : '--'}}</span>
                                    <span v-if="item.userHighestPrice" class="margin-left-lg">心理价：￥{{item.userHighestPrice}}</span>
                                 </p>
                                 <p class="margin-top-xs fred" v-if="item.delay == 1">
                                     延时5分钟
                                 </p>
                             </div>
                             <!-- 
                             出价按钮只有在正在热拍,并且交了保证金的情况下才会出现 
                             去交保证金按钮,只有在预展中或者热拍中并且没有没保证金的情况下才会出现  
                             state,拍品状态  bondState是否交过保证金（1，交 2.未交）
                             -->
                             <div class="cl-td text-right padding-right-sm">
                                 <yd-button v-if="item.state == 3 && item.bondState == 1" class="sky-btn sky-btn-orange" style="width:1.4rem;" type="primary">出价</yd-button>  
                                 <yd-button v-if="item.state == 2 && item.bondState == 1" class="sky-btn sky-btn-orange" type="primary">已交保证金</yd-button>  
                                 <yd-button v-if="item.state >= 3 && item.bondState == 0" class="sky-btn sky-btn-orange" type="primary" @click.native="goPay(item)">去交保证金：￥{{item.bond}}</yd-button>  
                            </div>
                         </div>
                     </div>
                  </div>  
                </yd-list>
                <span slot="doneTip">没有更多内容~~</span>
                 <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                <div slot="loadingTip">
                  <scrolLoading></scrolLoading>
                </div>
            </yd-infinitescroll>
            <yd-backtop></yd-backtop>
    </yd-pullrefresh>
</template>

<script>
    import scrolLoading from '@/components/common/scrolLoading'
    export default {
        components: {
            scrolLoading
        },
        props:[],
        data() {
            return {
                list: []
            }
        },
        methods: {
           
            // 下载刷新，重新获取新数据
            loadListUp() {
                this.$parent.postData.page = 1;
                this.$parent.updata((data)=> {
                     const _list = data.dataList;
                    // this.list = [..._list, ...this.list];
                    this.list = _list;
                    this.$dialog.toast({
                        // mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
                        mes:'更新成功'
                    });
                    this.$refs.prdemo.$emit('ydui.pullrefresh.finishLoad');
                })
               
      
            },
            // 滚动加载
            loadListDown() {
                // 调用父组件的updata方法
                this.$parent.updata((data) => {
                    const _list = data.dataList;
                    this.list = [...this.list, ..._list];
                    // 当最后一页的数据少于一页的数据或者页数等于后台返回的总页数时，就是全部加载完毕
                    if (_list.length < this.$parent.postData.rows || this.$parent.postData.page >= data.pageCount) {
                        // 所有数据加载完毕
                        this.$refs.ls.$emit('ydui.infinitescroll.loadedDone');
                        return;
                    }
                    // 单次请求数据完毕
                    this.$refs.ls.$emit('ydui.infinitescroll.finishLoad');
                    this.$parent.postData.page++;
                })
            },
            // 去交保证金
            goPay(item) {
                console.log(item)
                this.$router.push({
                    name:'boonPay',
                    query:{
                        sessionSeq:item.auctionGoodsSeq,
                        goodsSeq:item.auctionSessionSeq
                    }
                })
            }
        },
        mounted(){
            this.$nextTick(function(){
                this.loadListDown()
                 
            })
            
        }
    }
</script>
 
<style lang="css" scoped>
.goodsname {
    min-height: 1.4rem;
    vertical-align: top;
}
.cl-td {
    height: 1rem;
}
</style>