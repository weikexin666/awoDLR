<template>
  <div class="box">
    <div class="SubmitShadow"></div>
    <logo title="代理人注册申请"></logo>
    <div class="input-box">
      <mt-field  placeholder="代理人名称"  v-model="name"  class="input"></mt-field>
      <mt-field  placeholder="联系人"  v-model="contact"  class="input"></mt-field>
      <!--<mt-field  placeholder="门店地址" v-model="areaId"  class="input"></mt-field>-->
      <!--<CityPicker @change="checkedId" id="picker" style="width: 100%;height: 50px;line-height: 50px;padding-left: 1rem;font-size: 16px"></CityPicker>-->
      <!--<mt-field  placeholder="详细地址" v-model="address" style="border-top: 1px solid #E2E3E2"  class="input"></mt-field>-->
      <mt-field :attr="{ maxlength: 11 }" placeholder="联系电话" type="tel" v-model="phone" readonly="readonly"  class="input"></mt-field>
      <!--<mt-field  placeholder="请输入验证码" type="tel" max-length="11" v-model="verificationCode" class="input verificationCode"></mt-field>-->
      <!--<div class="sendVerificationCode"  id="sendCode" @click="sendVerificationCode()">发送验证码</div>-->
    </div>
    <btn text="提交审核" id="btn" @click.native="submit()"></btn>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'SubmittedReview',
    data () {
      return {
        name:'',
        contact:'',
        areaId:'',
        address:'',
        verificationCode:'',
        phone:'',
        code:'',
        openId:'',
        parentSn:'',
        type:1
      }
    },
    methods:{
      handleClick(){
        this.jump('/SubmittedReview');
      },
      openWin(url,val){
        this.jump('/'+ url +'',val);
      },
      sendVerificationCode(){  //发送验证码
        var vm = this;
        var testPhone=/^(1[345678][0-9]{1})[0-9]{8}$/;
        if(!testPhone.test(vm.phoneNum)){
          Toast({
            message:'请输入正确的手机号',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        this.$store.dispatch("send_code",{
          codeType:'BIND_AGENT_PHONE',
          phone:vm.phoneNum
        }).then(res=>{
          if(res.data.code==20000){
            Toast({
              message:'发送成功',
              position: 'bottom',
              duration: 2000
            });
            vm.countDown('sendCode');
          }else {
          }
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
        if(!vm.name){
          Toast({
            message:'请输入代理人名称',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(!vm.contact){
          Toast({
            message:'请输入联系人',
            position: 'bottom',
            duration: 2000
          });
          return;
        }

//        if(!vm.areaId){
//          alert('请选择地区');
//          return;
//        }
//        if(!vm.address){
//          Toast({
//            message:'请输填写详细地址',
//            position: 'bottom',
//            duration: 2000
//          });
//          return;
//        }
        this.$store.dispatch("register",{
          name:vm.name,
          contact:vm.contact,
          phone:vm.phone,
          areaId :vm.areaId,
          address:vm.address,
          openId:vm.openId,
          code:vm.code,
          type:1,
          parentSn:vm.parentSn

        }).then(res=>{
          Toast({
            message:'注册成功',
            position: 'bottom',
            duration: 2000
          });
          vm.openWin('Prompt',{type:1});
//          this.readonly();
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
        })
      },
      checkedId(id){ // 选中省市ID
        this.areaId = id

      },
    },
    mounted(){
      this.code = this.$route.query.value.code;
      this.phone = this.$route.query.value.phone;
      this.openId = this.$route.query.value.openId;
      this.parentSn = sessionStorage.getItem('parentSn');
    }
  }




</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .box{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .SubmitShadow{
    width: 100%;
    /*height: 100%;*/
    height: 10%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 9999;
  }
  .input-box{
    width: 70%;
    margin: 0 auto;
    height: auto;
    margin-top: 5px;
  }
  .input{
    border-bottom: 1px solid #E2E3E2;
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


  @media (max-height: 400px) {
    #btn {
      display: none;
    }
  }
</style>
