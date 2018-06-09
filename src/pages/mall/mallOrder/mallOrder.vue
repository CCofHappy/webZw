<template>
  <div class="mallOrder">
      <yd-navbar :title="$route.meta.title" fontsize="0.36rem" :fixed="true" bgcolor="#F7F7F7" color="#282828" >
          <a href="javascript:void(0)" slot="left">
            <yd-navbar-back-icon @click.native="$router.go(-1)"></yd-navbar-back-icon>
          </a>
          <router-link :to="{name:'afterSaleServe'}" slot="right">
         			 售后服务
          </router-link>
      </yd-navbar>
      <yd-tab class="orderMenus" v-model="tab" active-color="#CC733D">
        <yd-tab-panel label="待付款">
          <div>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '待付款'}"></order-title>
            <router-link :to="{name:'mallOrderDetail'}" slot="right">
               <order-info></order-info>
            </router-link>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'payMoney', leftBtnText: '取消订单', rightBtnText: '去付款'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '待付款'}"></order-title>
            <order-info></order-info>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'payMoney', leftBtnText: '取消订单', rightBtnText: '去付款'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="待发货">
          <div>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '待发货'}"></order-title>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'sendGood', otherBtnText: '提醒发货'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '待发货'}"></order-title>
            <order-info></order-info>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'sendGood', otherBtnText: '提醒发货'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="待收货">
          <div>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '待收货'}"></order-title>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'receiveGood', leftBtnText: '查看物流', otherBtnText: '确认收货'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '待收货'}"></order-title>
            <order-info></order-info>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'receiveGood', leftBtnText: '查看物流', otherBtnText: '确认收货'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="已完成">
          <div>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '已完成'}"></order-title>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'finish', leftBtnText: '查看物流'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '已完成'}"></order-title>
            <order-info></order-info>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'finish', leftBtnText: '查看物流'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
          </div>
        </yd-tab-panel>
        <yd-tab-panel label="已取消">
          <div>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '已取消'}"></order-title>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'cancle', leftBtnText: '删除订单', otherBtnText: '加入购物车'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
            <order-title :status="1" :content="{orderNumber: '12332113211', orderStatus: '已取消'}"></order-title>
            <order-info></order-info>
            <order-info></order-info>
            <order-title :status="2"></order-title>
            <order-title :status="3" :content="{type: 'cancle', leftBtnText: '删除订单', otherBtnText: '加入购物车'}" @callBack="clickBtn"></order-title>
            <div class="segmentation"></div>
          </div>
        </yd-tab-panel>
    </yd-tab>
    <yd-popup v-model="remindSendGood" position="center" width="75%">
        <div class="tooltip">
            <p class="firstLine fblack">
                <!-- 已收到您的提醒，我们将尽快安排发货。 -->
                确定收到商品后再确认收货哦
            </p>
            <div class="btnDiv">
              <yd-button style="width: 90%;" @click.native="remindSendGood = false">确认</yd-button>
            </div>
        </div>
        <i class="iconfont icon-cuowu closeIcon" @click="remindSendGood = false"></i>
    </yd-popup>
  </div>
</template>

<script>
  import orderTitle from "../mallPublic/orderTitle"
  import orderInfo from "../mallPublic/orderInfo"
  export default {
    name: "mallOrder",
    data() {
      return {
        tab:0,
        remindSendGood: false
      }
    },
    components: {
      orderTitle,
      orderInfo
    },
    methods: {
      /* 点击取消订单，去付款，提醒发货，确认收货，查看物流，删除订单，加入购物车等按钮的回调方法
       status： remindSendGood      提醒发货
                cancleOrder         取消订单
                lookLogistics       查看物流
                deleteOrder         删除订单
                goToPay             去付款
                confirmReceiveGood  确认收货
                addShoppingCar      加入购物车
      */
      clickBtn(status) {
        if (status == "remindSendGood") {
          this.remindSendGood = true;
        } else if (status == "cancleOrder") {
          this.$dialog.toast({ mes:'点击了取消订单'});
        } else if (status == "lookLogistics") {
          this.$dialog.toast({ mes:'点击了查看物流'});
        } else if (status == "deleteOrder") {
          this.$dialog.toast({ mes:'点击了删除订单'});
        } else if (status == "goToPay") {
          this.$dialog.toast({ mes:'点击了去付款'});
        } else if (status == "confirmReceiveGood") {
          this.$dialog.toast({ mes:'点击了确认收货'});
        } else if (status == "addShoppingCar") {
          this.$dialog.toast({ mes:'点击了加入购物车'});
        }
      }
    }
  }
</script>

<style lang="less">
  .mallOrder {
    .navbar-bottom-line-color:after {
      border-color: transparent !important;
    }
  }
  .orderMenus {
    .yd-tab-nav {
      position: fixed;
      top: 1rem;
      width: 100% !important;
      z-index: 99;
    }
    .yd-tab-nav-item:not(:last-child):after {
      border:none;
    }
    .yd-tab-panel {
      margin-top: 1.9rem;
      background: none;
    }
    .yd-tab-nav .yd-tab-active:before{
        width: 20%;
        margin-left: -10%;
    }
    .yd-tab-nav:after {
      border-bottom: none;
    }
  }
  .tooltip {
    background-color: #FFFFFF;
    .firstLine {
      padding-top: 1rem; padding-left: .7rem; margin-right: .7rem;
    }
    .btnDiv {
      text-align: center; margin-top: 1rem; padding-bottom: .4rem; padding-left: .4rem; padding-right: .4rem;
      button {
        background-color: #282828;
        color: #CD733B;
      }
    }
    p { color: #282828; }
  }
</style>



