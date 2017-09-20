<template>
  <div class="InputPassword-box">
    <p @click="Show()" style="line-height: 50px;color: #fff">提现</p>
    <div class="InputPassword-shadow" @click="Hide()"></div>
    <div class="InputPassword-prop-box">
      <div class="InputPassword-top">
        <p>请输入密码</p>
        <span class="InputPassword-close" @click="Hide()">X</span>
      </div>
      <div class="InputPassword-main">
        <p class="InputPassword-money">¥ {{inputMoney}}</p>
        <span class="InputPassword-Bank">到账银行卡</span>
        <span class="InputPassword-Cards">{{Cards}}</span>
      </div>
      <div class="InputPassword-btm">
        <div class="InputPassword-input">
          <input type="password" id="InputPassword-input" maxlength="6" @keyup="GetLength()" >
          <div class="InputPassword-line"></div>
          <div class="InputPassword-line"></div>
          <div class="InputPassword-line"></div>
          <div class="InputPassword-line"></div>
          <div class="InputPassword-line"></div>
          <div class="InputPassword-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default {
    name: 'InputPassword',
    props: {
      allMoney: {
        type: String,
        default: '0'
      },
      Cards: {
        type: String,
        default: '请选择银行卡'
      },
      inputMoney: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: {
    },
    methods: {
      Show: function () {
        if(parseFloat(this.inputMoney) > parseFloat(this.allMoney) ){
          Toast({
            message: '您最多只能提现'+ this.allMoney +'元',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(this.inputMoney<=0){
          Toast({
            message: '提现金额需大于0',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(this.Cards == '请选择银行卡' || this.Cards == '' ){
          Toast({
            message: '请选择到账银行卡',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        document.getElementById("InputPassword-input").focus();
        document.getElementsByClassName('InputPassword-prop-box')[0].style.cssText = 'width:95%;height:230px';
        document.getElementsByClassName('InputPassword-shadow')[0].style.height = '100%';
      },
      Hide: function () {
        document.getElementsByClassName('InputPassword-prop-box')[0].style.cssText = 'width:0%;height:0px';
        document.getElementsByClassName('InputPassword-shadow')[0].style.height = '0px';
      },
      GetLength(){
        var vm  = this;
        var value = document.getElementById('InputPassword-input').value;
        if(value.length == 6){
          document.getElementById('InputPassword-input').blur()
          Indicator.open('加载中...');
          setTimeout(function () {
            Indicator.close();
            vm.$emit('change',value);
          },1000)
        }
      }
    }
  }
</script>

<style scoped>

  .InputPassword-box{
    width:auto ;
    height: auto;
    margin: 0 auto;
    background: rgba(0,0,0,.2);
    color: #000;
  }
  .InputPassword-shadow{
    width: 100%;
    height: 0%;
    background: rgba(0,0,0,.3);
    display: block;
    position: fixed;
    top:0px;
    left: 0px;
    /*z-index: 99;*/
  }
  .InputPassword-prop-box{
    /*width: 95%;*/
    /*height: 230px;*/
    width: 0%;
    height: 0px;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
    /*transition: all .1s;*/
    position: fixed;
    top: 20px;
    left: 50%;
    margin-left: -47.5%;
    /*z-index: 999;*/
  }
  .InputPassword-top{
    width: 100%;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #E64692 ;
  }
  .InputPassword-top p {
    float: left;
    margin-left: 35%;
  }
  .InputPassword-close{
    float: right;
    padding-right: 20px;
  }
  .InputPassword-main {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    margin-top: 30px;
    font-size: 12px;
    line-height: 40px;
  }
  .InputPassword-main p{
    font-size: 24px;
    font-weight: 800;
  }
  .InputPassword-main Bank{
    color: #ccc;
  }
  .InputPassword-main .Cards{
    color: #183462;
    display: inline-block;
  }
  .InputPassword-btm{
    width: 300px;
    height: 30px;
    margin: 0 auto;
    margin-top: 30px;
  }
  .InputPassword-btm .input{
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
  }
  #InputPassword-input{
    width: 100%;
    height: 100%;
    letter-spacing:43px;
    text-indent: 27px;
    outline: none;
    font-size: 20px;
    border: 0px;
    margin: 0 auto;
  }
  .InputPassword-line{
    width: 13%;
    height: 1px ;
    background: #000;
    float: left;
    margin-left: 3.6%;
  }

</style>
