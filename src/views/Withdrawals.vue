<template>
  <div class="box">
      <div class="top">
        <div class="money pink">{{allMoney}}</div>
        <span>可提现（元）</span>
      </div>
      <div class="main">
        <div class="input">
          <i class="icon">¥</i>
          <input type="tel" id="money" v-model="inputMoney">
          <span @click="WithdrawalsAll()">全部提现</span>
        </div>
        <div class="BankCards">
          <span>到账银行卡</span>
          <span class="Cards" > <BankPicker @change="checked"></BankPicker></span>
        </div>
        <InputPassword class="btn" :Cards="bankName" :allMoney="allMoney" :inputMoney="inputMoney" @change="getValue"></InputPassword>
      </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'Withdrawals',
    data () {
      return {
        phoneNum:'',
        allMoney:'',
        inputMoney:'',
        bankId:'',
        bankName:''
      }
    },
    methods:{
      openWin(url){
        this.jump('/'+ url +'');
      },
      WithdrawalsAll(){//全部提现
        $('#money').val($('.money').text());
        this.inputMoney = this.allMoney;
      },
      checked(val,name){//选中的银行
        this.bankId = val;
        this.bankName = name+'('+this.getLastCardBun(val)+')';
      },
      getLastCardBun(val){ //截取银行卡号后4位
        return val.substring(val.length, val.length - 4)
      },
      getValue(val){  //提现方法
        //val 输入的密码
        var vm = this;
        this.$store.dispatch("withdraw",{
          accNo:vm.bankId,//银行卡号
          amount:vm.inputMoney,//提现金额
          cashPwd:val//提现密码
        }).then(res=>{
          Toast({
            message: '提现成功',
            position: 'bottom',
            duration: 2000
          });
          vm.openWin('Wallet1');
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
        })
      }
    },
    created(){
//      alert( this.$store.state.user.balance)
      this.allMoney = this.$store.state.user.balance

    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
  }
  .top{
    width: 100%;
    height: 130px;
    background: #fff;
    text-align: center;
  }
  .pink{
    color: #E64692;
  }
  .money{
    font-size: 40px;
    font-weight: 900;
    line-height: 50px;
    margin-top: 40px;
  }
  .top span{
    font-size: 16px;
  }
  .main{
    width: 95%;
    height: 50px;
    margin: 0 auto;
  }
  .main .input {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
  }
  .icon{
    font-size: 26px;
    float: left;
    line-height: 50px;
  }
  .input input{
    width: 60%;
    height: 100%;
    float: left;
    outline: none;
    margin-left: 20px;
    font-size: 34px;
  }
  .input span{
    float: right;
    line-height: 50px;
  }
  .BankCards{
    width: 100%;
    height: 40px;
  }
  .Cards{
    color:#00295c!important;
  }
  .BankCards span{
    float: left;
    display: inline-block;
    line-height: 40px;
  }
  .BankCards .Cards{
    color: #183462;
    padding-left: 20px;
    line-height: 40px;
  }
  .btn{
    width: 95%;
    height: 50px;
    background: #E64692!important;
    color: #fff;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 30px!important;
    text-align: center;
  }

</style>
