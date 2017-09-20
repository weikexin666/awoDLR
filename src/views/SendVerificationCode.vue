<template>
  <div class="box">
    <div class="container-fluid input-box">
      <mt-field  placeholder="请输入验证码" :attr="{ maxlength: 4 }" type="tel" v-model="verificationCode" class="input verificationCode"></mt-field>
      <div class="sendVerificationCode">发送验证码</div>
    </div>
    <btn text="完成" id="btn" @click.native="openWin('home')" style="position: absolute;top: 150px;"></btn>
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
            }
        },

    }
</script>

<style scoped>
  .input-box{
    width: 80%;
    height: auto;
    margin-top: 30px;
  }
  .input{
    border-bottom: 1px solid #E2E3E2;
    margin-top: 10px;
  }
  .verificationCode{
    width: 58%;
    float: left;
  }
  .sendVerificationCode{
    width: 39%;
    height: 100%;
    padding: 10px;
    text-align: center ;
    float: right;
    color: #E64692;
    border:1px solid #E64692;
    margin-top:  20px;
  }
  @media (max-height: 400px) {
    #btn {
      display: none;
    }
  }
</style>
