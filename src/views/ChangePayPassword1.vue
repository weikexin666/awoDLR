<template>
  <div class="box">
    <div class="input-box">
      <mt-field  type="password" :attr="{ maxlength: 6 }"  placeholder="请输入提现密码" v-model="cashPwdNew" autofocus="autofocus" class="input"></mt-field>
      <mt-field  type="password" :attr="{ maxlength: 6 }" placeholder="确认提现密码" v-model="confirmPassword" autofocus="autofocus" class="input"></mt-field>
      <mt-field  type="tel" :attr="{ maxlength: 11 }" placeholder="请输入绑定的手机号" max-length="11" v-model="phone" autofocus="autofocus" class="input"></mt-field>
      <mt-field :attr="{ maxlength: 4 }" placeholder="请输入验证码" type="tel" v-model="code" class="input verificationCode"></mt-field>
      <div class="sendVerificationCode"  id="sendCode" @click="sendVerificationCode()">发送验证码</div>
    </div>
    <!--<btn text="下一步" style="position: absolute;top: 250px;" @click.native="openWin('ChangePayPassword2')"></btn>-->
    <btn text="修改" id="btn" style="position: absolute;top: 250px;" @click.native="submit()"></btn>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'ChangePayPassword1',
    data() {
      return {
        cashPwdNew:'',
        confirmPassword:'',
        phone:'',
        code:''
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
      },
      sendVerificationCode(){  //发送验证码
        var vm = this;
        var testPhone=/^(1[345678][0-9]{1})[0-9]{8}$/;
        if(!testPhone.test(vm.phone)){
          Toast({
            message:'请输入正确的手机号',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        this.$store.dispatch("send_code",{
          codeType:'UPDATE_AGENT_CASHPWD',
          phone:vm.phone
        }).then(res=>{
          if(res.data.code==20000){
            vm.countDown('sendCode');
            Toast({
              message:'发送成功',
              position: 'bottom',
              duration: 2000
            });
          }else {
          }
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
            return false;
          }
        )
      },
      countDown(objId){ //倒计时
        var vm = this;
        var fun = this.sendVerificationCode;
        vm.sendVerificationCode = false;
        var i = 60;
        var timer = setInterval(function () {
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
      },
      submit(){
        var vm = this;

        if(!vm.cashPwdNew){
          Toast({
            message: '请输入新密码',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(vm.confirmPassword!=vm.cashPwdNew){
          Toast({
            message: '两次密码不同',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        this.$store.dispatch("updateCashPwd",{
//          cashPwdOld:vm.cashPwdOld,
          cashPwd:vm.cashPwdNew,
          code:vm.code
        }).then(res=>{
          Toast({
            message: '修改成功',
            position: 'bottom',
            duration: 2000
          });
          vm.openWin('home');
        }).catch(err=>{
          Toast({
            message: err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
        })
      }
    },
    mounted(){
      var vm = this;
      if(!vm.$store.state.user.cashPwd ){
        document.getElementById('btn').innerHTML = '确定';
      }
    }

  }
</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin:  0 auto;
  }
  .input-box{
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
  .input{
    border-bottom: 1px solid #E2E3E2 ;
  }
  .ForgotPassword{
    color: #999;
    float: right;
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
    color: #e74793;
    border:1px solid #e74793;
    margin-top:  10px;
  }
</style>
