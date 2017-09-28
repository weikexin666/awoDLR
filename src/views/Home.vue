<template>
  <div class="box">
    <div class="bg">
    </div>
    <div class="top" id="top">
      <div class="top-content">
        <div class="Headportrait">
          <img src="/static/images/Headportrait.png" :src="dataList.headUrl" alt="" width="100%" height="100%">
        </div>
        <div class="Information">
          <span class="userName" @click="GetUserName()">{{dataList.name}}</span>
          <i class="iconfont icon-bianji2" style="padding-left: 10px" @click="openWin('EditInformation')"></i>
          <p class="storeName">{{dataList.contact}}</p>
          <p class="phone">{{dataList.phone}}</p>
        </div>
        <div class="optionss">
          <div class="options" @click="openWin('QRcode')">
            <div class="icon">
              <i class="iconfont icon-erweima"></i>
              <span>推荐</span>
            </div>
          </div>
          <div class="options" @click="openWin('ManagementBankCard',{type:'home'})">
            <div class="icon">
              <i class="iconfont icon-attachment"></i>
              <span>管理</span>
            </div>
          </div>
          <div class="options" @click="openWin('Wallet1')">
            <div class="icon">
              <i class="iconfont icon-qianbao"></i>
              <span>钱包</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="StatisticsS" id="StatisticsS">
      <div class="Statistics">
        <p class="pink">{{dataList.rate}}%</p>
        <span>提成比例</span>
      </div>
      <div class="Statistics">
        <p class="pink">5790.02</p>
        <span>总收益</span>
      </div>
      <div class="Statistics">
        <p class="pink">{{agentChildren.length}}</p>
        <span>门店总数</span>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <p class="left" style="font-size: 14px">我的门店</p>
        <p class="right">共{{agentChildren.length}}家</p>
      </div>
      <div class="null" v-if="agentChildren.length <= 0">
        <i class="iconfont icon-empty" style="color: #ccc;font-size: 10rem;text-align: center"></i>
        <p>您还没有门店～</p>
        <p>可让旗下门店扫描您的推荐二维码注册哦～</p>
      </div>
      <div class="list" id="list">
        <mt-loadmore :top-method="getData" ref="loadmore">
          <ul id="ul">
            <li v-for="item in agentChildren"  class="li" @click="openWin('MyStore',item.id)">
              <div class="img"  style="background: #f5f5f5">
                <img v-lazy="item.head" :style="style()">
              </div>
              <div class="Storeinformation">
                <span class="StoreName">{{item.name}}</span>
                <span class="Profit">提成<i class="pink">{{item.rate}}%</i></span>
                <span class="num">{{item.phone}}</span>
                <span class="date">门店 <span class="pink">17</span></span>
              </div>
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import jQuery from './jquery.min'
  //查询余额和账单接口
  //查询代理银行卡操作接口
  //解绑银行卡接口
  //绑定银行卡接口
  //代理人提现申请接口
  //查看提现记录接口
  //设置/修改提现密码接口
  //代理人基本信息展示接口
  //代理人基本信息修改
  //代理人查看银行卡接口
  //代理商基本信息接口
  //查看代理人接口


  export default {
    name: 'Home',
    data () {
      return {
        user:{
          userName:'',
          phone:'',
          sex:''
        },
        phoneNum:'',
        dataList:{
          name:'加载中...',
          contact:'加载中...',
          phone:'加载中...',
          num:'0',

        },
        agentChildren:[]//代理人信息
      }
    },
    methods:{
      openWin(url,id){
        this.jump('/'+ url +'',id);
      },
      GetUserName(){
//        this.$store.commit('setUserName',{ssss:'ssssa',bbbb:'ss'})
//        console.log(this.$store.commit)
      },
      style(){
        return 'height:'+ document.getElementById('ul').offsetWidth * 0.45 +'px;width:'+ document.getElementById('ul').offsetWidth * 0.45  +'px';
      },
      getData(){//获取数据
        var vm = this;
        this.user = this.$store.state.user;
        this.$store.dispatch("agents",{ //查询代理商信息
        }).then(res=>{
          if(res.code == 80027){
            vm.openWin('SubmittedReview',res)
          }
          vm.dataList = res.agent;
          vm.$store.state.user.qrCode = res.agent.qrCode; //代理人二维码
          vm.$store.state.user.balance = res.agent.balance; //代理人余额
          vm.$store.state.user.cashPwd = res.agent.cashPwd; //代理人提现密码
          vm.$store.state.user.name = res.agent.name; //代理人店名
          vm.$store.state.user.contact = res.agent.contact; //代理人人名
//          vm.$store.state.user.address = res.agent.address; //代理人地址
          vm.$store.state.user.headUrl = res.agent.headUrl; //代理人头像
          vm.$store.state.user.phone = res.agent.phone; //代理人电话
          vm.$store.state.user.id = res.agent.id; //代理人ID
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
          if(err.code == 80027){
            vm.openWin('SubmittedReview',err)
          }
          }
        );
        this.$store.dispatch("children",{ //查询代理人信息
        }).then(res=>{
          vm.agentChildren = res.children;
          setTimeout(function () {
            vm.$refs.loadmore.onTopLoaded();
          },500)
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
          }
        )
      }
    },
    created(){
      this.getData();//获取数据
      this.$parent.getWxShare()//app.vue 微信分享
    },
    mounted() {
//      alert(this.$route.query.code)

    //  this.$store.state.aaaa = 'bbbbb'
    //      this.$store.commit('SET_save','ssss')
    //      console.log(this.$store.state.aaaa);
//      this.$store.commit("set_users",{
//        'nickName':"蓝波",
//        'score':88,
//        'phone':13636574272,
//        'todos':12
//      });
//      console.log(this.$store.state.users);
//      this.$store.commit("set_users_name",{
//        'nickName':"尼禄",
//      })
//      console.log(this.$store.state.users);
      setTimeout(function () {
        document.getElementById('list').style.height = document.body.clientHeight - 280 +'px'
      },500)
    },
  }
</script>

<style scoped>
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .box{
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: "PingFangSC-Light";
  }
  .icon i{
    color: #e74793;
    font-size: 26px;
  }
  .null{
    text-align: center;
  }
  p{
    margin: 0px;
    padding: 0px;
  }
  ul{
    margin: 0px;
    padding: 0px;
  }
  .pink{
    color: #e74793;
  }
  .bg{
    width: 100%;
    height: 150px;
    background-image: url(http://ag.awo123.cn/lib/images/bg.png);
    background-size: cover;
  }
  .top{
    width: 90%;
    height: 160px;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -45%;
    box-shadow: 0px 3px 50px 5px #e7e7e7;
  }
  .top-content{
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }
  .top .Headportrait{
    width: 80px;
    height: 80px;
    margin-top: -20px;
    border:1px solid #fff;
    float: left;
  }
  .top .Information{
    float: left;
    width: auto;
    height: auto;
    padding-left: 20px;
  }
  .Information .userName{
    font-size: 16px;
    line-height: 40px;
  }
  .Information .phone{
    font-size: 12px;
    line-height: 15px;
    color: #999;
  }

  .top .optionss{
    width: 90%;
    height: 100px;
    margin: 0 auto;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -45%;
  }
  .optionss a{
    color: #000;
    text-decoration: none;
  }
  .options .icon{
    width: 28%;
    margin: 0 auto;
    font-size: 12px;
  }
  .options .icon span{
    font-size: 14px;
  }
  @media screen and (min-width: 400px){
    .num{
      padding-right: 20px;
      display: block;
    }
  }
  .optionss .options{
    width: 33%;
    float: left;
    text-align: center;
    margin-top: 25px;
    text-align: center;
    font-size: 14px;
  }

  .storeName{
      font-size: 14px;
    color: #999;
    margin-top: -10px;
  }

  .content{
    width: 85%;
    height: auto;
    margin: 0 auto;
    margin-top: 100px;
  }
  .title{
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .title .left{
    float: left;
  }
  .title .right{
    float: right;
  }
  .list{
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 20px;
    -webkit-overflow-scrolling: touch;
  }
  .content ul{
    width: 100%;
    height: auto;
    list-style: none;
    overflow: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch
  }
  .content ul li {
    width: 45%;
    /*height: auto;*/
    overflow: hidden;
    float: left;
    margin-top: 10px;
    -webkit-overflow-scrolling: touch
  }
  .content ul li img{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }
  .content ul li:nth-child(odd){
    float: left;
  }
  .content ul li:nth-child(even){
    float: right;
  }
  .Storeinformation{
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }
  .Storeinformation .StoreName{
    font-size: 16px;
    font-weight: 700;
    float:left;
  }
  .Storeinformation .Profit{
    float: right;
  }
  .Storeinformation .Profit i{
    font-size: 16px;
    font-weight: 900;
  }
  .Storeinformation .num{
    float: left;
    font-size: 12px;
  }
  .Storeinformation .date{
    float: right;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    .options .icon{
      font-size: 10px;
    }
    .num{
      font-size: 10px;
    }
    .date{
      font-size: 10px;
    }
    .Storeinformation .StoreName{
      font-size: 14px;
      font-weight: 700;
      float:left;
    }
    .Storeinformation .Profit{
      float: right;
      font-size: 14px;
    }
    .Storeinformation .Profit i{
      font-size: 14px;
      font-weight: 700;
    }
  }
  .StatisticsS{
    width: 85%;
    height: 60px;
    margin: 0 auto;
    margin-top: 111px;
  }
  .StatisticsS .Statistics{
    width: 33%;;
    height: 100%;
    float: left;
    text-align: center;
    font-size: 22px;
    font-weight: 900;
  }
  .StatisticsS .Statistics span{
    font-size: 12px;
  }
  .StatisticsS .Statistics p{
    /*margin-top: 30px;*/
    line-height: 20px;
  }
  .content{
    width: 85%;
    height: auto;
    margin: 0 auto;
  }
  .title{
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .title .left{
    float: left;
  }
  .title .right{
    float: right;
  }
  @media screen and (max-width: 350px) {
    .options .icon {
      font-size: 10px;
    }
  }
</style>
