<template>
  <div class="box">
    <div class="top">
      <p class="money pink">建设银行(9412)</p>
      <span>默认银行卡</span>
    </div>
    <div class="tabs">
      <div class="tab" @click="openWin('Wallet1')">金额明细</div>
      <div class="tab" @click="openWin('Wallet2')">提现记录</div>
      <div class="tab checked" @click="openWin('Wallet3')">银行卡</div>
    </div>
    <div class="list" id="list">
      <mt-loadmore :top-method="a" :bottom-method="b" :bottom-all-loaded="c" ref="loadmore">
        <ul>
          <li v-for="item in 10">
            <p class="title">建设银行储蓄卡(9966)</p>
            <span class="date">2017-08-17 18:11:36</span>
            <p class="plus">+9757</p>
          </li>
        </ul>
      </mt-loadmore>
    </div>
    <btn text="提现" @click.native="openWin('Withdrawals')"></btn>
  </div>
</template>

<script>
  export default {
    name: 'Wallet3',
    data () {
      return {
        phoneNum:'',
      }
    },
    methods:{
      openWin(url){
        this.jump('/'+ url +'');
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
        document.getElementById('list').style.height = document.body.clientHeight - 130 - 40 -80 +'px';
      },500)

    },
    beforeCreate(){
    }
  }
</script>

<style scoped>
  html,body{
    background: #F7F8F7;
  }
  .box{
    width: 100%;
    height: 100%;
    background: #F7F8F7;
    overflow: hidden;
  }
  .top{
    width: 100%;
    height: 130px;
    background: #fff;
    text-align: center;
    overflow: hidden;
  }
  .tab{
    color: #000;
  }
  .pink{
    color: #E64692;
  }
  .money{
    font-size: 30px;
    font-weight: 900;
    line-height: 50px;
    margin-top: 40px;
  }
  .top span{
    font-size: 16px;
  }
  .tabs{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .tabs .tab{
    width: 33%;
    height: 100%;
    float: left;
    text-align: center;
  }
  .checked{
    border-bottom: 2px solid #E64692;
  }
  .list{
    width: 95%;
    height: auto;
    margin: 0 auto;
    overflow: scroll;
  }
  .list ul{
    width: 100%;
    height: auto;
    list-style: none;
    text-align: left;
  }
  .list ul li{
    width: 100%;
    height: 80px;
    overflow: hidden;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }
  .list ul li .plus{
    float: right;
    margin-top: -10px;
    font-size: 22px;
  }
  .list ul .title{
    line-height: 40px;
  }
  .list ul .date{
    line-height: 40px;
  }
</style>
