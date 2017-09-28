<template>
  <div class="wrap">
    <div class="container-fluid">
      <logo title="门店注册申请"></logo>
    </div>
    <div class="container-fluid input-box">
      <mt-field :attr="{ maxlength: 11 }" placeholder="请输入绑定手机号码" type="tel" v-model="contactTel"  class="input"></mt-field>
      <mt-field  placeholder="请输入登录密码" type="password" v-model="enPassword"  class="input"></mt-field>
      <mt-field  placeholder="请确定登录密码" type="password" v-model="Psaaword"  class="input"></mt-field>
      <mt-field :attr="{ maxlength: 4 }" placeholder="请输入验证码" type="tel" max-length="11" v-model="code" class="input verificationCode"></mt-field>
      <div class="sendVerificationCode"  id="sendCode" @click="sendVerificationCode()">发送验证码</div>
    </div>
    <div class="container-fluid footer pa">
      <btn text="下一步" id="btn"  @click.native="submit()"></btn>
      <!--<btn text="下一步" id="btn"  @click.native="openWin('SubmittedReview',{phone:1111,code:2222})"></btn>-->
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';

  export default {
    name: 'ShopRegister1',
    data () {
      return {
        Psaaword:'',
        enPassword:'',
        contactTel:'',
        code:'',
        parentSn:''
      }
    },
    methods:{
      openWin(url,val){
        this.jump('/'+ url +'',val);
      },
      sendVerificationCode(){  //发送验证码
        var vm = this;
        var testPhone=/^(1[345678][0-9]{1})[0-9]{8}$/;
        if(!testPhone.test(vm.contactTel)){
          Toast({
            message:'请输入正确的手机号',
            position: 'bottom',
            duration: 2000
          });
          return;
        }

        this.$store.dispatch("send_code",{
          codeType:'BIND_SHOP_PHONE',
          phone:vm.contactTel
        }).then(res=>{
          Toast({
            message:'发送成功',
            position: 'bottom',
            duration: 2000
          });
          vm.countDown('sendCode');
        }).catch(err=>{
            Toast({
              message:err.errMsg?err.errMsg:err.msg,
              position: 'bottom',
              duration: 2000
            });
          }
        )
      },
      submit(){//提交  下一步
        var vm = this;
        var testPhone=/^(1[345678][0-9]{1})[0-9]{8}$/;
        if(!testPhone.test(this.contactTel)){
          Toast({
            message:'请输入正确的手机号',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!this.code){
          Toast({
            message:'请输入验证码',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(this.enPassword!=this.Psaaword){
          Toast({
            message:'两次输入密码不同',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        this.$store.dispatch("check_code",{ //校验验证码
          codeType:'BIND_AGENT_PHONE',
          phone:vm.contactTel,
          code:vm.code
        }).then(res=>{
          vm.openWin('ShopRegister2',{contactTel:vm.contactTel,code:vm.code,pwd:vm.enPassword,parentSn:vm.parentSn})
        }).catch(err=>{
            Toast({
              message:err.errMsg?err.errMsg:err.msg,
              position: 'bottom',
              duration: 2000
            });
          }
        )
      },
      countDown(objId){ //倒计时
        var vm = this;
        var fun = this.sendVerificationCode;
        vm.sendVerificationCode = false;
        var i = 60;
        var timer = setInterval(function () {
          if(! document.getElementById(objId)){
            clearInterval(timer)
          }
          if(i ==0){
            clearInterval(timer);
            setTimeout(function () {
              document.getElementById(objId).innerHTML = '重新发送';
            },500)
            vm.sendVerificationCode = fun;
          }
          document.getElementById(objId).innerHTML = i;
          i--;
        },1200)
      }

    },
    mounted(){
      var vm = this;
      vm.parentSn =this.$route.query.agentSn
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/css/variables.less";
  .wrap{
    height: 100%;
  }
  .container-fluid{
    padding: 0px;
  }
  .box{
    width: 100%;
  }
  .footer{
    bottom: 20px;
  }
  .input-box{
    width: 70%;
    height: auto;
    margin-top: 30px;
  }
  .input{
    border-bottom: 1px solid #E2E3E2;
    margin-top: 10px;
  }
  .verificationCode{
    width: 58%;
    float: left;
  }
  .sendVerificationCode{
    width: 39%;
    height: 100%;
    padding: 10px;
    text-align: center ;
    float: right;
    color: @primaryColor;
    border:1px solid @primaryColor;
    margin-top:  20px;
  }
  @media (max-height: 400px) {
    #btn {
      display: none;
    }
  }
  @media (max-height: 600px) {
    .input-box{
      margin-top: 0px;
    }
  }
</style>
