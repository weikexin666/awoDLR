<template>
  <div class="box">
    <div class="logo">
      <img src="http://wechat.awo123.cn/agent/lib/images/logo.png" alt="" width="40%">
    </div>
    <div class="title">
      <p>{{title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'logo',
  props: {
    title: {
      type: String,
      default: '啊喔优品'
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    text-align: center;
  }
  .logo{
    width: 100%;
    height: auto;
    margin-top: 20px;

  }
  .title{
    width: 95%;
    height: auto;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
  }
  .title p{
    margin: 0px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 100;

  }
</style>
