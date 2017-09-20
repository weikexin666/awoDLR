<template>
  <div class="BankPricker-box " >
    <input type="text" readonly class="BankPricke-input" @click="show()"  v-model="text">
    <div class="shadow" @click="hide()" ></div>
    <div class="BankPricker-main">
      <div class="BankPricker-top">
        <p class="BankPricker-title">选择银行卡</p>
      </div>
      <div class="BankPricker-list">
        <ul class="BankPricker-ul">
          <div class="null" v-if="dataList.length <=0" >
            <i class="iconfont icon-empty" style="color: #ccc;font-size: 10rem;text-align: center;"></i>
            <p>您还没有绑定银行卡哦～</p>
            <p @click="openWin('AddCard')">点击立即绑定</p>
          </div>
          <li class="BankPricker-li" :class="{'BankPricker-checked':item.accNo == checkedId}" v-for="(item,index) in dataList" @click="checked(index)" >
            {{item.bankName}}（{{getLastCardBun(item.accNo)}}）
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    name: 'BankPicker',
    props:{
      text:{
        type:String,
        default:'请选择银行卡'
      }

    },
    data() {
      return {
        dataList:[],
        checkedId:''
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
      },
      show() {
        document.querySelector('.BankPricker-main').style.height = '300px';
        document.querySelector('.shadow').style.height = '100%';
      },
      hide() {
        document.querySelector('.BankPricker-main').style.height = '0px';
        document.querySelector('.shadow').style.height = '0%';
      },
      checked(index) {
        var vm = this;
        this.text = this.dataList[index].bankName + '(' + vm.getLastCardBun(vm.dataList[index].accNo) + ')';
        this.hide();
        this.$emit('change', this.dataList[index].accNo,this.dataList[index].bankName );
        this.checkedId = this.dataList[index].accNo;
      },
      getLastCardBun(val){ //截取银行卡号后4位
        return val.substring(val.length, val.length - 4)
      },
    },
    mounted(){
      var vm = this;
      this.$store.dispatch("banks",{ // 查询银行卡
      }).then(res=>{
        console.log(res.agentBankInfo)
        vm.dataList = res.agentBankInfo;
        if(res.agentBankInfo.length>0){
          vm.checked(0)//默认选中
        }
      }).catch(err=>{
        Toast({
          message:JSON.stringify(err.errMsg?err.errMsg:err.msg) ,
          position: 'bottom',
          duration: 2000
        });
      })
    }
  }
</script>

<style scoped>
  .BankPricker-box{
    width: 100%;
    height: 100%;
    display: block;
    color: #000!important;
  }
  .none{
    display: none;
  }
  .shadow{
    width: 100%;
    height: 0%;
    background: rgba(0, 0, 0, 0.31);
    display: block;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
  }
  .BankPricker-main{
    width: 100%;
    height: 0px;
    background: #fff;
    position: fixed;
    bottom: 0px;
    transition: all .3s;
    display: block;
    z-index: 999999999;
    left: 0px;
  }
  .BankPricker-top{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E50081;
    text-align: center;
    line-height: 50px;
  }
  .BankPricker-list{
    width: 100%;
    height: 250px;
    overflow: scroll;
  }
  .BankPricker-ul{
    width: 100%;
    height: 100%;
  }
  .BankPricker-li{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cccccc;
    line-height: 60px;
    padding-left: 20px;
  }
  .null{
    text-align: center;
    margin-top: 5rem;
  }
  .BankPricker-checked{
    color: #e50081;
  }
</style>
