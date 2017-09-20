<template>
  <div class="box">
    <div class="input-box">
      <ul>
        <li>
          <span>门店名称</span>
          <mt-field  placeholder="请输入门店名称" v-model="name" ></mt-field>
        </li>
        <li>
          <span>联系人</span>
          <mt-field  placeholder="请输入联系人"  v-model="Proportion"></mt-field>
        </li>
        <li>
          <span>联系电话</span>
          <mt-field  placeholder="请输入联系电话" type="tel" v-model="phone"></mt-field>
        </li>
      </ul>
    </div>
    <div class="btn" @click="submit()">确认修改</div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';

  export default {
    name: 'EditInformation',
    data() {
      return {
        name: '',
        Proportion: '',
        phone:'',
        id:''
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
      },
      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      },
      submit(){
        var vm = this;
        if(!vm.name){
          Toast({
            message: '请输入名称',
            position: 'bottom',
            duration: 2000
          });
          return;
        }

        if(!vm.phone){
          Toast({
            message: '请输入电话',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        if(!vm.Proportion){
          Toast({
            message: '请设置提成比例',
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        this.$store.dispatch("updateSelf",{
          name:vm.name,
          phone:vm.phone,
          contact:vm.Proportion,
          id:vm.id
        }).then(res=>{
          Toast({
            message: '修改成功',
            position: 'bottom',
            duration: 2000
          });
          vm.openWin('home');
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
        })
      },
    },
    mounted(){
      this.id = this.$store.state.user.id
    }

  }
</script>

<style scoped>
  .box{
    width: 95%;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
  }

  .input-box{
    width: 100%;
    height: auto;
  }
  .input-box ul {
    width: 100%;
    height: auto;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  .input-box ul li{
    width: 100%;
    /*height: auto;*/
    border-bottom: 1px solid #ccc;
    line-height: 55px;
    overflow: hidden;
    padding: 10px 0px 10px 0px ;
  }
  .input-box ul li span{
    width: 25%;
    display: inline-block;
    float: left;
    font-size: 16px;
    color: #747574;
  }
  /*.input-box ul li input{*/
    /*width: 60%;*/
    /*height: 40px;*/
    /*outline: none;*/
    /*float: left;*/
    /*border: 0px;*/
  /*}*/
  .btn{
    width: 95%;
    height: 50px;
    background: #E64692;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    position: fixed;
    bottom: 90px;
    left: 50%;
    margin-left: -47.5%;
    text-align: center;
  }
  .btn2{
    width: 95%;
    height: 50px;
    border: 1px solid #E64692;
    color: #E64692;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -47.5%;
    text-align: center;
    background: #ffffff;
  }
  @media (max-height: 400px) {
    .btn {
      display: none;
    }
    .btn2 {
      display: none;
    }
  }
</style>
