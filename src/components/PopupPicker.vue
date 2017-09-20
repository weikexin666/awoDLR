<template>
  <div class="page-popup" >
    <input id="prefix" type="text"  v-model="carType" readonly @click="popupVisible=true">
    <!--<input id="prefix" type="text"  v-model="carType" readonly @click="popupVisible=true;carInfo(defaultid)">-->
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <mt-picker :slots="dateSlots"  :default-index="defaultIndex" @change="onDateChange" :visible-item-count="5" :show-toolbar="true">
        <!--<span class="mint-popup4-cancel mint-popup4-left" @click="cancelPicker">取消</span>-->
        <span class="mint-popup4-title">车牌选择</span>
        <span class="mint-popup4-finish mint-popup4-right" @click="checkPicker">完成</span>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<style>

  .mint-popup-4 {
    width: 100%;
  }
  .mint-popup-4 .picker-slot-wrapper, .picker-item {
    backface-visibility: hidden;
  }
  /*.mint-popup4-title{opacity: 1; position: relative;left: -40px;}*/
  .mint-popup4-left{float: left;}
  .mint-popup4-right{float: right}
  .mint-popup4-title{ position:relative; width:100%; padding:.2rem; text-align: center; color:#333333;  display: block;}
  .mint-popup4-finish{ position:absolute; right: 0.5rem; top: 0.5rem;border-radius: 0.2rem;color: #03a9f4;font-size:16px;z-index: 3;}
  .mint-popup4-cancel{position:absolute; left: 0.5rem; top: 0.5rem; border-radius: 0.2rem;color: #b5b5b5;font-size:.8rem; z-index: 3;}
</style>

<script type="text/babel">
  import { Toast } from 'mint-ui';
  export default {
    name: 'PopupPicker',
    props:{
//            标题名字
      defaultType:{
        type:String,
        default:'请选择'
      },
//            默认车辆ID
      defaultid:{
        type:Number,
        default:null
      },
//            选中的车辆名字
      checkedName:{
        type:String,
        default:null
      },
//            选中的ID
      checkedID:{
        type:Number,
        default:null
      },
//            车辆数据 后台返回的数据
      dataList:{
        type:Array,
        default:[]
      }
    },
    data() {
      return {
        popupVisible:false,
        carType: '获取中...',
        defaultIndex:0,
        dateSlots: [
          {
            flex: 1,
            values: ['中国建设银行','中国银行','中国农业银行','中国工商银行','民生银行','招商银行'],
            className: 'slot1',
            textAlign: 'center'
          }
        ]
      };
    },
    computed:{
    },
    methods: {
      onDateChange(picker, values) {
        this.checkedName = values[0]
      },
      cancelPicker(){
        this.popupVisible = false;
      },
      //选择好了选择器
      checkPicker(){
        this.carType = this.checkedName;
        for(var i = 0 ; i < this.dataList.length ; i++){
          if(this.checkedName == this.dataList[i].name){
            this.checkedID =  this.dataList[i].id;
          }
        }
        this.popupVisible = false;
        this.$emit('change',this.checkedID,this.carType)
      },
    },
    mounted() {
      this.carType=this.defaultType;
    }
  };
</script>
