<template>
  <div class="CityPicker-box">
    <input type="text" style="width: 100%;" readonly class="inputTitle" @click="show()"  v-model="text">
    <div class="shadow" @click="hide()"></div>
    <div class="cityBox">
      <div class="cityTop">
        <p class="cancel" tapmode @click="hide()">取消</p>
        <h2>所在地区</h2>
      </div>
      <div class="cityContent">
        <ul class="cityUl cityUl1">
          <li class="cityLi" v-for="item in dataList" @click="getData(item.id,item.name)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'CityPicker',
    props:{
      text:{
        type:String,
        default:'地址'
      }
    },
    data() {
      return {
        phoneNum: '',
        CityType:0,
        dataList:[],
        checkedId:'',
        checkedName:'',
        province:'',
        city:'',
        area:'',
        provinceId:'',
        cityId:'',
        areaId:''
      }
    },
    methods: {
      openWin(url) {
        this.jump('/' + url + '');
      },
      getData(id,name){
        var vm = this;
        switch (vm.CityType)
        {
          case 0:
            break;
          case 1:
            vm.province = name;
            vm.provinceId = id;
            break;
          case 2:
            vm.city = name;
            vm.cityId = id;
            break;
          case 3:
            vm.area = name;
            vm.areaId = id;
            break;
        }
        if(this.CityType >=3){
          vm.hide();
          vm.CityType = -1;
          vm.checkedId = id;
          vm.checkedName = name;
          this.$emit('change', this.checkedId,{provinceId:vm.provinceId,cityId:vm.cityId,areaId:vm.areaId});
          document.getElementsByClassName('inputTitle')[0].style.color = '#555'
          vm.text = vm.province+ ' '+ vm.city+ ' '+ vm.area;
        }
        var vm = this;
        this.$store.dispatch("areas",{
          parentId:id
        }).then(res=>{
          vm.dataList = res.areas;
        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
        });
        this.CityType++;
      },
      show(){
        document.getElementsByClassName('cityBox')[0].style.height = '30rem';
        document.getElementsByClassName('shadow')[0].style.height = '100%';
        this.dataList = [];
        this.getData(' ');
      },
      hide(){
        this.CityType = 0;
        document.getElementsByClassName('cityBox')[0].style.height = '0rem';
        document.getElementsByClassName('shadow')[0].style.height = '0%';
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>
  .cityBox{
    width: 100%;
    /*height: 24rem;*/
    height:0rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #f5f5f5;
    z-index: 99999;
    -webkit-transition: height 0.3s;
    -moz-transition: height 0.3s;
    -o-transition: height 0.3s;
    transition: height 0.3s;
  }
  .inputTitle{
    color: #A8A9A8;
  }
  .shadow{
    width: 100%;
    /*height: 100%;*/
    height: 0%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 9999;
    background: rgba(0,0,0,.3);
  }
  .cityTop{
    width: 100%;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
  }
  .cityContent{
    width: 100%;
    height: 26rem;
    overflow: hidden;
  }
  .cityUl{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    overflow: scroll;

  }
  .cityLi{
    width: 100%;
    height: 4.6rem;
    line-height: 4.6rem;
    /*border:1px solid #f5f5f5;*/
    padding-left: 1.5rem;
  }
  .none{
    display: none;
  }
  .cancel{
    float: left;
    padding-left: 1.5rem;
  }
  .cityTop h2{
    font-size: 1.4rem;

  }
</style>
