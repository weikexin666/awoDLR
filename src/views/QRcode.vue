<template>
  <div class="box">
    <div class="top">
      <div class="Headportrait">
        <img :src="headUrl" alt="" width="100%" height="100%">
      </div>
      <div class="Information">
        <p>{{name}}</p>
        <span>{{fullName}}{{address}}</span>
        <br>
        <span>{{contact}} {{phone}}</span>
      </div>
    </div>
    <div class="content">
      <div class="codeImg">
        <img :src="qrCode" alt="" width="100%">
      </div>

    </div>
    <div class="footer">
      <div class="text">
        此二维码用于您旗下门店注册。步骤：门店微信扫描此二维码进入注册页面，完成注册后，即成为您的门店。您可在首页-我的门店中查看和设置门店信息。
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QRcode',
    data () {
      return {
        qrCode:'http://www.awo123.cn/resources/mall/img/loadqr_2.png',
        name:'',
        contact:'',
        address:'',
        headUrl:'',
        phone:'',
        fullName:''


      }
    },
    methods:{
      openWin(url){
        this.jump('/'+ url +'');
      }
    },
    mounted(){
      var vm = this;
      var Expression= /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
      if(Expression.test(this.$store.state.user.qrCode)){
        vm.qrCode = vm.$store.state.user.qrCode
      }
      vm.name = vm.$store.state.user.name  //代理商店名
      vm.contact = vm.$store.state.user.contact //代理商人名
      vm.address = vm.$store.state.user.address  //代理商地址
      vm.headUrl = vm.$store.state.user.headUrl  //代理商头像
      vm.phone = vm.$store.state.user.phone  //代理商电话
      vm.fullName = vm.$store.state.user.fullName  //代理商省市

    }
  }
</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin: 0px auto;
    padding: 0px;
    overflow-x: hidden;
  }
  .top{
    width: 100%;
    height: 100px;
    overflow: hidden;
    margin-top: 20px;

  }
  .Headportrait{
    width: 80px;
    height: 80px;
    float: left;
    overflow: hidden;
  }
  .Information{
    overflow: hidden;
    padding-left: 20px;
  }
  .Information p{
    font-size: 16px;
    color: #555;
    line-height: 30px;
    margin: 0px;
  }
  .Information span{
    font-size: 14px;
    color: #999;
    line-height: 15px;
    display: inline-block;
  }
  .content{
    width: 95%;
    height: auto;
    margin: 0 auto;
    margin-top: 30px;
  }
  .content .codeImg{
    width: 100%;
  }
  .footer{
    width: 75%;
    margin: 0 auto;
    margin-top: 20px;
  }
  .text{
    color: #333333;
  }
  @media (max-width: 360px) {
    .content{
      margin-top: 0px;
    }
  }
</style>
