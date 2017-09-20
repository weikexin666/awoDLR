<template>
  <div class="box">
    <logo title="代理人注册申请"></logo>
    <div class="content" v-if="type == 0">
      <p>抱歉，您当前不具备代理人资格 </p>
      <p> 请扫描代理商的二维码后</p>
      <p>进行注册申请</p>
    </div>
    <div class="content" style="margin-top: 40px" v-if="type == 1">
      <img src="http://www.awo123.cn/resources/mall/img/loadqr_2.png" alt="" width="50%">
      <span>恭喜您已注册成功，扫码关注微信公众号</span>
      <span>点击代理人菜单，即可查看个人信息</span>
    </div>
    <div class="content" style="margin-top: 40px" v-if="type == 2">
      <img src="http://www.awo123.cn/resources/mall/img/loadqr_2.png" alt="" width="50%">
      <span>您的账号已被关闭</span>
      <span>请等待代理商开启</span>
    </div>
    <div class="content" style="margin-top: 40px;color: #555555!important;" v-if="type == 3">
      <p>待审核通过后</p>
      <p>请登录PC收银系统网址：www.shop.awo123</p>
      <p>体验可视化触摸购物</p>
      <p>快捷的会员等级体质</p>
      <p>安全多样化的充值方式</p>
      <p>方便的5送1搭赠选择</p>
      <p>赠品智能化分配</p>
      <p>合理的积分体质</p>
      <p>便捷的寄存管理等服务</p>
      <span style="position: absolute;bottom: 90px;text-align: center;width: 100%">您的账号审核已提交，静待账号审核通过</span>
      <div class="btn" @click="submit()">审核中</div>

    </div>
    <div class="footer" v-if="type != 3">
      <p>阿喔优品&nbsp;&nbsp;&nbsp;祝您生活愉快</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                phoneNum: '',
                type:0
            }
        },
        methods: {
            openWin(url) {
                this.jump('/' + url + '');
            }
        },
      mounted(){
          var vm = this;
          if(vm.$route.query.value){
            vm.type = vm.$route.query.value.type;
          }
      }
    }
</script>

<style scoped>
  .content {
    margin-top: 120px;
    text-align: center;
  }
  .content p{
    text-align: center;
    color: #999999;
    font-size: 16px;
  }
  .content span{
    text-align: center;
    color: #999999;
    font-size: 12px;
    display: block;
  }
  .footer{
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 20px;
    text-align: center;
    font-size: 16px;
  }

  .btn{
    width: 95%;
    height: 50px;
    background: #D6D7D6!important;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -47.5%;
    text-align: center;
  }
</style>
