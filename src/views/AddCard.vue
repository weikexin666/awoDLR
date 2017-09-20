<template>
  <div class="box">
    <div class="top">
      <p>请绑定持卡人本人的银行卡</p>
    </div>
    <div class="input-box">
      <!--<PopupPicker defaultType="开户行名称" style="font-size: 16px;text-align: left;padding-left: 1rem;line-height: 50px;border-bottom: 1px solid #ccc;"></PopupPicker>-->
      <mt-field  placeholder="开户人姓名" v-model="accName" class="input"></mt-field>
      <mt-field :attr="{ maxlength: 18 }" placeholder="开户人身份证号" type="tel" v-model="cardId" class="input"></mt-field>
      <mt-field :attr="{ maxlength: 11 }" placeholder="开户行预留电话" type="tel" v-model="accPhone" class="input"></mt-field>
      <mt-field :attr="{ maxlength: 4 }" placeholder="请输入验证码" type="tel" max-length="11" v-model="code" class="input verificationCode"></mt-field>
      <div class="sendVerificationCode"  id="sendCode" @click="sendVerificationCode()">发送验证码</div>

    </div>
    <div class="btn" @click="submit()">下一步</div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'AddCard',
    data () {
      return {
        bankName:'',//称名行户开
        accPhone:'',//话电留预行户开
        accName:'',//名姓人户开
        accNo:'',//号卡行银
        proName:'',//名省行户开
        cityName:'',//名市行户开
        accDept:'',//名构机行户开
        cardId:'',//号证份身人户开
        code:'',//码证验
        defaultid:''//地区选择器默认ID
      }
    },
    methods:{
      openWin(url,val){
        this.jump('/'+ url +'',val);
      },
      submit(){
        var vm = this;

        if(!vm.accPhone){
          Toast({
            message:'请输入开户行预留电话' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(!vm.accName){
          Toast({
            message:'请输入开户人姓名' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(!vm.code){
          Toast({
            message:'请输入验证码' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }

        this.$store.dispatch("check_code",{ //校验验证码
          codeType:'BIND_AGENT_BANKCARD',
          phone:vm.accPhone,
          code:vm.code
        }).then(res=>{
          vm.openWin('AddCard2',{accPhone:vm.accPhone,code:vm.code,accName:vm.accName,cardId:vm.cardId})
        }).catch(err=>{
            Toast({
              message:JSON.stringify(err.errMsg?err.errMsg:err.msg) ,
              position: 'bottom',
              duration: 2000
            });
          }
        )

      },
      sendVerificationCode(){  //发送验证码
        var vm = this;
        var testPhone=/^(1[345678][0-9]{1})[0-9]{8}$/;
        if(!testPhone.test(vm.accPhone)){
          Toast({
            message:'请输入正确的手机号' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        this.$store.dispatch("send_code",{ //发送验证码
          codeType:'BIND_AGENT_BANKCARD',
          phone:vm.accPhone
        }).then(res=>{
          if(res.data.code==20000){
            Toast({
              message:'发送成功' ,
              position: 'bottom',
              duration: 2000
            });
            vm.countDown('sendCode');
          }else {
          }
        }).catch(err=>{
            Toast({
              message: err.errMsg?err.errMsg:err.msg ,
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
          if(!document.getElementById(objId)){
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
      },

    }
  }


</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin: 0 auto;
  }
  p{
    margin: 0px;
    padding: 0px;
  }
  .top{
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #ccc;
    line-height: 40px;
    overflow: hidden;
  }
  .input-box{
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0px;
  }
  .input{
    border-bottom: 1px solid #ccc;
  }
  .btn{
    width: 100%;
    height: 50px;
    background: #E64692;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
  }
  .sendVerificationCode{
    width: 39%;
    height: 100%;
    padding: 10px;
    text-align: center ;
    float: right;
    color: #E74793;
    border:1px solid #E74793;
    margin-top: 10px;
  }
  .verificationCode{
    width: 58%;
    float: left;
  }
</style>
