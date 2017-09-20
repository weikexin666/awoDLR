<template>
  <div class="box">
    <div class="input-box">
      <mt-field  type="tel"  :attr="{ maxlength: 11 }" placeholder="输入手机号码" v-model="phoneNum" autofocus="autofocus" class="input"></mt-field>
      <mt-field  type="tel"  :attr="{ maxlength: 6 }" placeholder="请输入新的提现密码" v-model="phoneNum" autofocus="autofocus" class="input"></mt-field>
      <mt-field  type="tel"  :attr="{ maxlength: 6 }" placeholder="确认新的提现密码" v-model="phoneNum" autofocus="autofocus" class="input"></mt-field>
    </div>
    <btn text="完成"  @click.native="openWin('home')"   style="position: absolute;top: 250px;" ></btn>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'ChangePayPassword2',
    data() {
      return {
        phoneNum: '',
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
      }
    },

  }
</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin:  0 auto;
  }
  .input-box{
    width: 100%;
    height: auto;
    margin-top: 20px;
  }
  .input{
    border-bottom: 1px solid #E2E3E2;
  }
</style>
