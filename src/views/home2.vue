<template>
  <div class="box">
    <div class="bg">
    </div>
    <div class="top">
      <div class="top-content">
        <div class="Headportrait">
          <img src="/static/images/Headportrait.png" alt="" width="100%">
        </div>
        <div class="Information">
          <p class="userName">李小白</p>
          <p class="phone">139 9966 1236</p>
        </div>
        <div class="optionss">
          <div class="options" @click="openWin('QRcode')">
            <div class="icon">
              <img src="/static/images/icon2.jpg" alt="" width="100%">
              <span>推荐</span>
            </div>
          </div>
          <div class="options" @click="openWin('ManagementBankCard')">
            <div class="icon">
              <img src="/static/images/icon3.jpg" alt="" width="90%">
              <span>管理</span>
            </div>
          </div>
          <div class="options" @click="openWin('Wallet1')">
            <div class="icon">
              <img src="/static/images/icon4.jpg" alt="" width="103%">
              <span>钱包</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="StatisticsS">
      <div class="Statistics">
        <p class="pink">30%</p>
        <span>提成比例</span>
      </div>
      <div class="Statistics">
        <p class="pink">5790.02</p>
        <span>总收益</span>
      </div>
      <div class="Statistics">
        <p class="pink">37</p>
        <span>门店总数</span>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <p class="left">我的门店</p>
        <p class="right">共17家</p>
      </div>
      <div class="list">
        <ul id="ul">
          <li @click="openWin('MyAgent')">
            <div class="img">
              <img src="/static/images/girl1.png" alt="" width="100%">
            </div>
            <div class="Storeinformation">
              <span class="StoreName">一号门店</span>
              <span class="Profit">收益<i class="pink">3966</i></span>
              <span class="num">5584526</span>
              <span class="date">2017/09/09</span>
            </div>
          </li>
          <li @click="openWin('MyAgent')">
            <div class="img">
              <img src="/static/images/girl1.png" alt="" width="100%">
            </div>
            <div class="Storeinformation">
              <span class="StoreName">一号门店</span>
              <span class="Profit">收益<i class="pink">3966</i></span>
              <span class="num">5584526</span>
              <span class="date">2017/09/09</span>
            </div>
          </li>
          <li @click="openWin('MyAgent')">
            <div class="img">
              <img src="/static/images/girl1.png" alt="" width="100%">
            </div>
            <div class="Storeinformation">
              <span class="StoreName">一号门店</span>
              <span class="Profit">收益<i class="pink">3966</i></span>
              <span class="num">5584526</span>
              <span class="date">2017/09/09</span>
            </div>
          </li>
          <li @click="openWin('MyAgent')">
            <div class="img">
              <img src="/static/images/girl1.png" alt="" width="100%">
            </div>
            <div class="Storeinformation">
              <span class="StoreName">一号门店</span>
              <span class="Profit">收益<i class="pink">3966</i></span>
              <span class="num">5584526</span>
              <span class="date">2017/09/09</span>
            </div>
          </li>
          <li @click="openWin('MyAgent')">
            <div class="img">
              <img src="/static/images/girl1.png" alt="" width="100%">
            </div>
            <div class="Storeinformation">
              <span class="StoreName">一号门店</span>
              <span class="Profit">收益<i class="pink">3966</i></span>
              <span class="num">5584526</span>
              <span class="date">2017/09/09</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'Home',
    data () {
      return {
        phoneNum:'',
      }
    },
    methods:{
      openWin(url){
        this.jump('/'+ url +'');
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
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
    color: #E50587;
  }
  .bg{
    width: 100%;
    height: 180px;
    background-image: url(/static/images/bg.png);
    background-size: cover;
  }
  .top{
    width: 90%;
    height: 180px;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 100px;
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
    width: 100px;
    height: 100px;
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
    font-size: 20px;
    line-height: 50px;
  }
  .Information .phone{
    font-size: 18px;
    line-height: 25px;
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
    width: 33%;
    margin: 0 auto;
  }
  .optionss .options{
    width: 33%;
    float: left;
    text-align: center;
    margin-top: 25px;
    text-align: center;
    font-size: 14px;
  }
  .StatisticsS{
    width: 85%;
    height: 100px;
    margin: 0 auto;
    margin-top: 100px;
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
    margin-top: 40px;
    line-height: 20px;
  }
  .content{
    width: 85%;
    height: auto;
    margin: 0 auto;
  }
  .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .title .left{
    float: left;
  }
  .title .right{
    float: right;
  }
  .list{
    width: 100%;
    height: auto;
  }
  .content ul{
    width: 100%;
    height: auto;
    list-style: none;
    overflow: scroll;
  }
  .content ul li {
    width: 45%;
    height: auto;
    overflow: hidden;
    float: left;
    margin-top: 10px;
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
</style>
