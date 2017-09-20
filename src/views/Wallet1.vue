<template>
  <div class="box">
    <div class="top">
      <p class="money pink">{{balance}}</p>
      <span class="Title">总金额（元）</span>
    </div>
    <div class="tabs">
      <div class="tab"  :class="{'checked':listParams.orderStatus == '0'}"  @click="Switch('0')">金额明细</div>
      <div class="tab"  :class="{'checked':listParams.orderStatus == '1'}"  @click="Switch('1')">提成明细</div>
      <div class="tab"  :class="{'checked':listParams.orderStatus == '2'}"  @click="Switch('2')">银行卡</div>
    </div>
    <div class="list" id="list">
      <div class="null" v-if="listData.length <=0" >
        <i class="iconfont icon-empty" style="color: #ccc;font-size: 10rem;text-align: center"></i>
        <p>暂时还没有记录哦～</p>
      </div>
      <mt-loadmore :top-method="Switch" ref="loadmore">
        <ul>
          <li v-for="item in listData" style="position:relative;">
            <!--<p class="title" v-if="item.reason">{{item.reason}}</p>-->
            <!--<p class="title" v-if="item.shop_name">{{item.shop_name}}</p>-->
            <!--<p class="title" v-if="item.bankName">{{item.bankName}}</p>-->
            <!--<span class="date" v-if="item.createDate" >{{item.createDate | time}}</span>-->
            <!--<span class="date" v-if="item.create_date">{{item.create_date | time}}</span>-->
            <!--<p class="plus" v-if="item.amount&&item.reason">{{item.type == 0?'+':'-'}}{{item.amount}}</p>-->
            <!--<p class="plus" v-if="item.commission">+{{item.commission}}</p>-->
            <!--<p class="plus" v-if="item.totalAmount">+{{item.totalAmount}}</p>-->

            <p class="title" v-if="item.years">
              <span v-if="item.type == 1">{{item.years}}年{{item.months}}月的</span>
              <!--<span v-if="item.type == 2">{{getUserName()}}的</span>-->
              {{item.type == 1?'提成':'提现'}}
              <span  v-if="item.type == 2">（{{status(item.status)}}）</span>
            </p>
            <p class="title" v-if="item.bankName">{{item.bankName}}({{getLastCardBun(item.accNo)}})</p>
            <!--<p style="position: absolute;top: 22px;left: 45%" v-if="item.type == 2">提现状态 <br><span style="color:rgba(230,70,146,0.59);"></span></p>-->
            <span class="date"  v-if="item.years">{{timestampToDate(item.modify_date)}}</span>
            <span class="date" v-if="item.bankName" >{{timestampToDate(item.createDate,false)}} (绑定日期)</span>
            <p class="plus"  v-if="item.years">{{item.type == 1?'+':'-'}}{{item.total}}</p>
            <p class="plus" v-if="item.bankName">+{{item.totalAmount}}</p>
          </li>
        </ul>
      </mt-loadmore>
    </div>
    <btn text="提现" @click.native="openWin('Withdrawals')"></btn>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default {
    name: 'Wallet1',
    data () {
      return {
        listParams: {pageNumber:1,pageSize:10,orderStatus:'0'},
        listData:[],
        commissionRecord:[],//提成 数据
        balance:'0',
        type:0 // 显示的类型  0:提成 1:提现
      }
    },
    methods:{
      openWin(url) {
        this.jump('/' + url + '');
      },
      getUserName(){
        return this.$store.state.user.contact;
      },
      timestampToDate(D,isHours = true){
        var date = new Date(D);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hours = date.getHours();
        var min = date.getMinutes();
//        return '${year}-${month}-${day} ${hours}:${min}';
        if(isHours){
          return year+'/'+month+'/'+day+' '+hours+':'+min ;
        }else {
          return year+'/'+month+'/'+day;
        }
      },
      status(type){ // 判断提现状态
        if(type == 0){
          return '处理中'
        }
        if(type == 1){
          return '处理中'
        }
        if(type == 2){
          return '审核被拒'
        }
        if(type == 3){
          return '提现成功'
        }
        if(type == 4){
          return '提现失败'
        }
      },
      getData(){ //查询金额明细
        var vm = this;
        this.$store.dispatch("balance",{ //查看余额和账单接口
        }).then(res=>{
          vm.balance = res.balance;
          vm.listData = res.agentBill;
          setTimeout(function () {
            vm.$refs.loadmore.onTopLoaded();
            Indicator.close();//closeLodaing...
          },500)
        }).catch(err=>{
          Toast({
            message:JSON.stringify(err.errMsg?err.errMsg:err.msg) ,
            position: 'bottom',
            duration: 2000
          });
        });
      },
      getWithdrawals(){//提成查询
        var vm = this;
        this.$store.dispatch("commission",{ //
        }).then(res=>{
          vm.balance = res.agentCommission;
          vm.listData = res.commissionRecord;
          vm.commissionRecord = res.commissionRecord;
          setTimeout(function () {
            vm.$refs.loadmore.onTopLoaded();
            Indicator.close();//closeLodaing...
          },500)
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
        });
      },
      getLastCardBun(val){ //截取银行卡号后4位
        return val.substring(val.length, val.length - 4)
      },
      getBanks(){
        var vm = this;
        this.$store.dispatch("banks",{ //
        }).then(res=>{
          if(res.agentBankInfo.length >0){
            vm.balance = res.agentBankInfo[0].bankName + '('+ vm.getLastCardBun(res.agentBankInfo[0].accNo) +')';
          }
          vm.listData = res.agentBankInfo;
          setTimeout(function () {
            vm.$refs.loadmore.onTopLoaded();
            Indicator.close();//closeLodaing...
          },500)
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg ,
            position: 'bottom',
            duration: 2000
          });
        });
      },
      Switch(type){ //切换
        var vm = this;
        if(type == this.listParams.orderStatus){
          return
        }
        if(!type){
          type = vm.listParams.orderStatus
        }
        if(type == 0){
          vm.getData();//获取余额
        }
        if(type == 1){
          vm.getWithdrawals() //提现记录查询
        }
        if(type == 2){
          vm.getBanks() //银行卡记录查询
        }

        Indicator.open( {spinnerType: 'fading-circle'});//lodaing...
        this.listParams.orderStatus = type;
        this.type = type; //显示的类型
        var Title = ["总金额（元）","总提成（元）","默认银行卡"]
        document.getElementsByClassName('Title')[0].innerHTML = Title[type]
      }
    },
    mounted() {
      this.getData();//获取数据
      setTimeout(function () {
        document.getElementById('list').style.height = document.body.clientHeight - 130 - 40 -80 +'px';  //调整list高度
      },500)
    },
    filters:{
      time(val){ //格式化时间戳
        return new Date(val).toLocaleString().replace(/:\d{1,2}$/,' ');
      }
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
  .null{
    text-align: center;
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
    font-size: 40px;
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
    height: 100%;
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
