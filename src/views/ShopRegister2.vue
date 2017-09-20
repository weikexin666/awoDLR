<template>
  <div class="wrap">
    <div class="container-fluid">
      <logo title="门店注册申请"></logo>
    </div>
    <div class="container-fluid input-box">
      <mt-field  placeholder="门店名称"  v-model="shopName"  class="input"></mt-field>
      <mt-field  placeholder="联系人"  v-model="contactName"  class="input"></mt-field>
      <!--<mt-field  placeholder="门店地址" v-model="areaIds"  class="input"></mt-field>-->
      <div style="width: 100%;height: 50px;line-height: 50px">
        <CityPicker @change="cityID" style="border-bottom: 1px solid #E2E3E2!important;padding-left: 10px;font-size: 16px"></CityPicker>
      </div>

      <mt-field  placeholder="详细地址" v-model="shopAddress"  class="input"></mt-field>
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
    name: 'ShopRegister2',
    data () {
      return {
        Psaaword:'',
        enPassword:'',
        contactTel:'',
        code:'',
        shopName:'',
        contactName:'',
        areaIds:'',
        shopAddress:'',
        parentSn:''
      }
    },
    methods:{
      openWin(url,val){
        this.jump('/'+ url +'',val);
      },
      submit(){//提交  下一步
        var vm = this;
        if(!vm.shopName){
          Toast({
            message:'请输入门店名称',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.contactName){
          Toast({
            message:'请输入联系人姓名',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.areaIds){
          Toast({
            message:'请选择门店地址',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.shopAddress){
          Toast({
            message:'请填写详细地址',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        vm.openWin('ShopRegister3',{contactTel:vm.contactTel,code:vm.code,pwd:vm.enPassword,shopName:vm.shopName,contactName:vm.contactName,areaIds:vm.areaIds,shopAddress:vm.shopAddress,parentSn:vm.parentSn})
      },
      cityID(id,ids){ //地址选择器选中的ID  id:第三级ID ids:省市区三级ID
        this.areaIds = ids.provinceId +' '+ids.cityId+' '+ids.areaId;
      }
    },
    mounted(){
      var vm = this;
      vm.enPassword = this.$route.query.value.pwd;   //上一页带过来的
      vm.contactTel = this.$route.query.value.contactTel;
      vm.code = this.$route.query.value.code;
      vm.parentSn = this.$route.query.value.parentSn;
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
  @media (max-height: 380px) {
    .input-box{
      margin-top: 0px;
    }
  }
</style>
