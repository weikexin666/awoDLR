<template>
  <div class="box">
    <div class="top">
      <p>请绑定持卡人本人的银行卡</p>
    </div>
    <div class="input-box">
      <mt-field  placeholder="开户行名称" v-model="bankName" class="input"></mt-field>
      <!--<PopupPicker defaultType="开户行名称" style="font-size: 16px;text-align: left;padding-left: 1rem;line-height: 50px;border-bottom: 1px solid #ccc;"></PopupPicker>-->
      <mt-field  placeholder="银行卡号" type="tel" v-model="accNo" class="input"></mt-field>
      <!--<CityPicker @change="CityId" text="开户行省市" :defaultid="defaultid" style="font-size: 16px;text-align: left;padding-left: 1rem;line-height: 50px;border-bottom: 1px solid #ccc;"></CityPicker> -->
      <mt-field  placeholder="开户行省名"  v-model="proName" class="input"></mt-field>
      <mt-field  placeholder="开户行市名"  v-model="cityName" class="input"></mt-field>
      <mt-field  placeholder="开户行机构名"  v-model="accDept" class="input"></mt-field>
    </div>
    <div class="btn" @click="submit()">提交</div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';

  export default {
    name: 'AddCard2',
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
      openWin(url){
        this.jump('/'+ url +'');
      },
      submit(){
        var vm = this;
        if(!vm.bankName){
          Toast({
            message:'请输入开户行名' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(!vm.proName){
          Toast({
            message:'请输开户行省名' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(!vm.cityName){
          Toast({
            message:'请输入开户行市名' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(!vm.accDept){
          Toast({
            message:'请输入开户机构名' ,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        this.$store.dispatch("addbank",{ //绑定银行卡
          bankName:vm.bankName,//称名行户开
          accPhone:vm.accPhone,//话电留预行户开
          accName:vm.accName,//名姓人户开
          accNo:vm.accNo,//号卡行银
          proName:vm.proName,//名省行户开
          cityName:vm.cityName,//名市行户开
          accDept:vm.accDept,//名构机行户开
          cardId:vm.cardId,//号证份身人户开
          code:vm.code,//码证验
        }).then(res=>{
          Toast({
            message:'绑定成功' ,
            position: 'bottom',
            duration: 2000
          });
          vm.openWin('home')
        }).catch(err=>{
            Toast({
              message:err.errMsg?err.errMsg:err.msg ,
              position: 'bottom',
              duration: 2000
            });
          }
        );
      },


    },
    mounted(){
      this.code = this.$route.query.value.code; //上一页带过来的
      this.accPhone = this.$route.query.value.accPhone;
      this.accName = this.$route.query.value.accName;
      this.cardId = this.$route.query.value.cardId;
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
