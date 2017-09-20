<template>
  <div class="box">
    <div class="top">
      <div class="Information">
        <div class="Headportrait">
          <img src="/static/images/Headportrait.png" alt="" width="100%">
        </div>
        <div class="info">
          <p class="name">唐高宗李世民的店铺</p>
          <p class="Account">账号：1234546578899</p>
          <span class="Profit right pink2">收益+9999</span>
          <span class="date">2017-08-19</span>
        </div>
      </div>
    </div>

    <div class="list" id="list">
      <mt-loadmore :top-method="a" :bottom-method="b" :bottom-all-loaded="c" ref="loadmore">
        <ul id="ul">
          <li v-for="item in 10">
            <div class="li-top">
              <p class="storeName left">至尊豪华礼套餐</p>
              <span class="Profit right pink2">收益+9999</span>
            </div>
            <div class="li-btm">
              <span class="Account left">¥ 199237</span>
              <span class="date right">2017-09-03</span>
            </div>
          </li>
        </ul>
      </mt-loadmore>

    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: '',
    data() {
      return {
        phoneNum: '',
        verificationCode: ''
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
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
    }, mounted() {
      setTimeout(function () {
        document.getElementById('list').style.height = window.screen.availHeight - 140+'px'
      },500)
    },

  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: auto;
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
    height: 140px;
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
  }+
  .name{
    font-size: 18px;
    font-weight: 700;
  }
  .list {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  .list ul li {
    width: 100%;
    border-top: 1px solid #F6F7F6;
    overflow: hidden;
    margin: 0px;
    padding: 10px 0px 10px 0px ;
    overflow: scroll;
  }
  .li-top,.li-btm{
    height: 30px;
    width: 95%;
    margin: 0px auto;
    line-height: 30px;
  }
  .storeName{

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
