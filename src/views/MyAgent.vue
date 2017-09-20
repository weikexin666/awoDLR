<template>
  <div class="box">
    <div class="top">
      <div class="Information">
        <div class="Headportrait">
          <img src="/static/images/Headportrait.png" alt="" width="100%">
        </div>
        <div class="info">
          <p class="name">小纷纷</p>
          <p class="phone">139 9999 1111</p>
          <i class="iconfont icon-bianji2" style="margin-right: -10px;float: right;margin-top: -60px" @click="openWin('EditInformation')"></i>
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
    </div>

    <div class="list" id="list">
      <mt-loadmore :top-method="a" :bottom-method="b" :bottom-all-loaded="c" ref="loadmore">
        <ul id="ul">
          <li v-for="item in 10" @click="openWin('MyStore')">
            <div class="li-top">
              <p class="storeName left">唐高宗李世民的店铺</p>
              <span class="Profit right pink2">收益+9999</span>
            </div>
            <div class="li-btm">
              <span class="Account left">账号:123455678997</span>
              <span class="date right">2017-09-03</span>
            </div>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<script src="https://cdn.bootcss.com/jquery/2.1.0/jquery.js"></script>
<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'MyAgent',
    data() {
      return {
        phoneNum: '',
        verificationCode: ''
      }
    },
    methods: {
      openWin(url) {
        var vm = this;
        this.jump('/' + url + '',vm.$route.query.value);
      },
      a(){
        var vm = this;
        setTimeout(function () {
          vm.$refs.loadmore.onTopLoaded();
        },1000)
      },
      b(){
      },
      c(){
      }
    },
    mounted() {
      setTimeout(function () {
        document.getElementById('list').style.height = window.screen.availHeight - 205 +'px'
      },500)
    },
    compiled: {

  }

  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  p{
    margin: 0px;
    padding: 0px;
  }
  .pink{
    color: #E50587;
  }
  .pink2{
    color: #EB73A9;
  }
  .top{
    width: 95%;
    height: 205px;
    margin: 0 auto;
  }
  .Information{
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .Headportrait{
    width: 80px;
    height: 80px;
    float: left;
  }
  .info{
    margin-top: 10px;
    padding-left: 20px;
    width: auto;
    height: auto;
    float: left;
    line-height: 30px;
  }
  .name{
    font-size: 22px;
    font-weight: 700;
  }
  .phone{
    font-weight: 500;
  }
  .StatisticsS{
    width:100%;
    height: 80px;
    margin: 0 auto;
  }
  .StatisticsS .Statistics{
    width: 33%;;
    height: 100%;
    float: left;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
  .StatisticsS .Statistics span{
    font-size: 1px;
  }
  .StatisticsS .Statistics p{
    margin-top: 20px;
    line-height: 20px;
  }
  .list {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  .list ul li {
    width: 100%;
    border-top: 5px solid #F6F7F6;
    overflow: hidden;
    margin: 0px;
    padding: 10px 0px 10px 0px ;
    list-style: none;
  }
  .li-top,.li-btm{
    height: 30px;
    width: 95%;
    margin: 0px auto;
    line-height: 30px;
  }
  .date{
    color: #6f6f6f;
  }
  .Account{
    color: #999;
  }
  .left{
    float: left;
  }
  .right{
    float:right;
  }
</style>
