<template>
  <div class="box">
    <div class="top">
      <div class="left">
        <div class="Headportrait">
          <img src="/static/images/Headportrait.png" alt="" width="100%">
        </div>
        <div class="centent">
          <p>唐高宗李世民的店铺</p>
          <p>账号：12345678910</p>
        </div>
      </div>
      <div class="right">
        <p class="pink">收益 +10290</p>
        <p>2017-09-01</p>
      </div>
    </div>
    <div class="list">
      <ul>
        <li>
          <div class="li-left">
            <p>至尊豪华套餐</p>
            <p>¥19689</p>
          </div>
          <div class="li-right">
            <p class="pink">+1200</p>
            <p>2017-08-26</p>
          </div>
        </li>
        <li>
          <div class="li-left">
            <p>至尊豪华套餐</p>
            <p>¥19689</p>
          </div>
          <div class="li-right">
            <p class="pink">+1200</p>
            <p>2017-08-26</p>
          </div>
        </li>
        <li>
          <div class="li-left">
            <p>至尊豪华套餐</p>
            <p>¥19689</p>
          </div>
          <div class="li-right">
            <p class="pink">+1200</p>
            <p>2017-08-26</p>
          </div>
        </li>
        <li>
          <div class="li-left">
            <p>至尊豪华套餐</p>
            <p>¥19689</p>
          </div>
          <div class="li-right">
            <p class="pink">+1200</p>
            <p>2017-08-26</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'Shop',
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
    width: 95%;;
    height: auto;
    margin: 0 auto;
    font-size: 14px;
  }
  .top{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    margin-top: 20px;
  }
  .top .left{
    float: left;
    overflow: hidden;
    text-align: left;
  }
  .left .Headportrait{
    width: 80px;
    height: 80px;
    height: auto;
    float: left;
  }
  .left .centent{
    float: left;
    line-height: 16px;
    padding-left: 20px;
  }
  .top .right{
    line-height: 16px;
    float: right;
  }
  .top p{
    line-height: 40px;
  }
  .pink{
    color: #E64692;
  }
  .list{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .list ul{
    width: 100%;
    height: auto;
    padding: 0px;
    margin: 0px;
  }
  .list ul li {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
    list-style: none;
    overflow: hidden;
  }
  .list ul li p{
    line-height: 35px;
  }
  .li-left{
    width: 60%;
    float: left;
    line-height: 16px;
    text-align: left;
  }
  .li-right{
    width: 40%;
    float: right;
    line-height: 16px;
    text-align: right;
  }

</style>
