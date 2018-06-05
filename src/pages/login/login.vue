<template>
  <div class="bgwhite">
    <div class="logoImg">
        <img src="@/assets/logo-3.png" style="margin-top:1rem;">
    </div>
    <div class="cellForm">
      <yd-cell-group>
          <yd-cell-item>
              <span slot="left">手机：</span>
              <yd-input slot="right" v-model="customerLogin" data-vv-name="手机号码" v-validate="'required|mobile'" placeholder="输入手机号码"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">密码：</span>
              <yd-input slot="right" type="password" data-vv-name="登录密码" v-validate="'required'" v-model="customerPwd" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
      </yd-cell-group>
      <yd-button-group>
        <yd-button size="large" @click.native="validateBeforeSubmit" type="danger">登录</yd-button>
      </yd-button-group>
      <div class="other clearfix">
        <router-link class="pull-left" :to="{ name: 'replace'}">忘记密码？</router-link>
        <router-link class="pull-right" :to="{ name: 'register'}">注册</router-link>
      </div>
      <div class="goBack">
        <i class="iconfont icon-Slice3" @click="$router.push({name:'home'})"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {
         
    },
  data () {
    return {
      customerLogin: '',
      customerPwd: ''
    }
  },
  computed: {
      
  },
  methods: {
    login(){
        fly.post('app/person/login',{'customerLogin':this.customerLogin,'customerPwd':md5(this.customerPwd)})
        .then(res => {
          if(res.state) {
             Cookie.set('token',res.data.etoken,{expires:10});     //把token存到cookie
             Cookie.set('userSeq',res.data.customerSeq,{expires:10});     //把用户seq存到cookie
             let path = this.$route.query.redirect ? this.$route.query.redirect : '/home'
             this.$router.replace(path)  //登录成功后跳转到登录前的页面
             this.$dialog.toast({ mes:'登录成功'});
          }else {
            this.$dialog.toast({ mes:res.message });
          }
        })
    },
    validateBeforeSubmit() {
      validForm(this,this.login)
    }
    
  },
  mounted() {

  },
  watch: {
    $route() {
       
    }
  }
}
</script>
 
<style scoped lang="less">
.goBack {
    position:absolute;
    bottom: 1rem;
    left: 50%;
    margin-left: -0.4rem;
  i {
    font-size: .8rem;
    color:#847F7F;
  }
}
</style>
