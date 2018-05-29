<template>
    <div>
       <titleHead></titleHead>
      <div class="cellForm">
        <yd-cell-group>
            <yd-cell-item>
                <i slot="icon" class="iconfont icon-yonghu"></i>
                <yd-input slot="left" v-model="telephone" name="telephone" data-vv-name="手机号码" v-validate="'required|mobile'" placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>

            <yd-cell-item>
                <i slot="icon" class="iconfont icon-yanzhengma"></i>
                <yd-input slot="left" data-vv-name="验证码" v-validate="'required'" v-model="smsCode" placeholder="输入验证码"></yd-input>
                <yd-sendcode class="sendCode" slot="right" init-str="获取验证码" reset-str="重新发送" v-model="start" @click.native="sendCode" :type="isdis ? 'disabled' : 'hollow'"></yd-sendcode>
                <!-- <span class="nowrap gray" slot="right">获取验证码</span> -->
            </yd-cell-item>
            <yd-cell-item>
                <i slot="icon" class="iconfont icon-mima"></i>
                <yd-input slot="left" v-model="password" data-vv-name="密码" type="password" v-validate="'required'" placeholder="输入密码"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <i slot="icon" class="iconfont icon-mima"></i>
                <yd-input slot="left" v-model="passwordAgain" data-vv-name="密码" type="password" v-validate="'required'" placeholder="再次输入密码"></yd-input>
            </yd-cell-item>
        </yd-cell-group>
        <yd-button-group>
          <yd-button size="large" @click.native="validateBeforeSubmit()" type="danger">确认</yd-button>
        </yd-button-group>
      </div>
    </div>
</template>

<script>
import titleHead from '@/components/common/Title/Thead.vue'
export default {
  name: 'replace',
  components: {
      titleHead
    },
  data () {
    return {
       start: false,
       isdis:true,
       telephone:'',
       smsCode:'',
       password:'',
       passwordAgain:'',
    }
  },
  computed: {
      
  },
  methods: {
    sendCode() {
        if(!this.$validator.flags.手机号码.valid){
          this.$dialog.toast({
              mes: '请输入合法手机号码',
              timeout: 1500
          });
          return false;
        }
        this.$dialog.loading.open('发送中...');
        this.api.sendSMSCode({smsText: "smsCode",telephone:this.telephone,template:"updatePad"})
        .then(res =>{
          if(res.state ==1){
            this.start = true;
            this.$dialog.loading.close();
            this.$dialog.toast({
                mes: '已发送',
                timeout: 1500
            });
          }
        })
    },
    validateBeforeSubmit() {
      validForm(this,() => {
        let postData = {
          telephone:this.telephone,
          smsCode:this.smsCode,
          password:this.password,
          passwordAgain:this.passwordAgain
        }
        fly.post('app/person/forgetLoginPwd',postData)
        .then((res) => {
          if(res.state ==1){
            this.$dialog.toast({ mes: '修改成功，2秒后跳转到登录页面'});
            setTimeout(() =>{
              this.$router.push({name:'login'})
            },2000)
          }else {
            this.$dialog.toast({ mes: res.message});
          }
        })
      })
    }
  },
  mounted() {
      
  },
  watch: {
    $route() {
       
    },
    telephone: function (val) {
      this.telephone.length == 11 ?  this.isdis = false : this.isdis = true
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .cellForm i {
    font-size: 0.38rem;
    margin-right: 0.1rem;
 }
</style>
