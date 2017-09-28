<template>
  <div class="box">
    <logo title="门店注册申请"></logo>
    <div class="content">
      <ul>
        <li>
          <div class="input">
            <p @click="convertImgToBase64('http://localhost:8090/static/images/img.png',function(s) {a(s)})">身份证号</p>
            <input type="tel" placeholder="请输入身份证号" v-model="ident">
          </div>
          <div class="submitImg">
            <div class="left">
              <span style="float: left;display: inline-block">正面：</span>
              <!--<input type="file" accept="image/*"  id="input1" @change="change('input1')" >-->
              <!--<img src="/static/images/img.png" alt="" onclick="showPicture(this)" >-->
              <div class="img-box">
                <img src="http://ag.awo123.cn/lib/images/img.png" id="img1" alt="" style="position: relative;width:40%;">
                <input type="file" class="file" accept="image/*"  id="input1"  @change="change('0')" >
              </div>
            </div>
            <div class="right">
              <p>背面：</p>
              <div class="img-box">
                <img src="http://ag.awo123.cn/lib/images/img.png" id="img2" alt="" style="position: relative;width:40%;">
                <input type="file" class="file" accept="image/*"  id="input2"  @change="change('1')" >
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="input">
            <p>营业执照</p>
            <input type="tel" placeholder="请输入营业执照" v-model="businessLicense">
          </div>
          <div class="submitImg">
            <div class="left">
              <div class="img-box">
                <img src="http://ag.awo123.cn/lib/images/img.png" id="img3" alt="" style="position: relative;width:40%;">
                <input type="file" class="file" accept="image/*"  id="input3"  @change="change('2')" >
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="input">
            <p>食品流通许可证</p>
            <input type="tel" placeholder="请输入食品流通许可证" v-model="foodLicense">
          </div>
          <div class="submitImg">
            <div class="left">
              <div class="img-box">
                <img src="http://ag.awo123.cn/lib/images/img.png" id="img4" alt="" style="position: relative;width:40%;">
                <input type="file" class="file" accept="image/*"  id="input4"  @change="change('3')" >
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn" @click="submit()">注册</div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  export default {
    name: 'ShopRegister3',
    data () {
      return {
        username:'',
        enPassword:'',
        code:'',
        shopName:'',
        contactName:'',
        contactTel:'',
        areaIds:'',
        shopAddress:'',
        ident:'',
        businessLicense:'',
        foodLicense:'',
        identImage1:'',
        identImage2:'',
        foodLicenseImage:'',
        businessLicenseImage:'',
        agentSn:'',
        img1:'',
        img2:'',
        img3:'',
        img4:'',
      }
    },

//  代理商二维码作用：请择其中一种
//  * 1. 代理人扫码之后，引导关注阿喔公众号，再手动点“代理人”菜单，进入“代理人”首页
//  * 2. 代理人扫码之后，直接进入“代理人”首页
//  * 2与1的区别就是
//  * 1的缺点是1. 需要再次点击才能进入首页
//  * 2的缺点是1. 需要用户自行关注公众号 2. 如果不自行关注，下次进入首页只能依旧通过二维码方式


    methods:{
      openWin(url,val){
        this.jump('/'+ url +'',val);
      },
      change(index){
        Indicator.open('上传中...');
        var vm = this;
        var inputID = ["input1","input2","input3","input4"];
        var imgID = ["img1","img2","img3","img4"];
        setTimeout(function () {
//          alert(document.getElementById(inputID[index]).files[0].size / 1024 .toFixed(0) + "kb")
          vm.convertImgToBase64(window.URL.createObjectURL(document.getElementById(inputID[index]).files[0]),function(base64) {
            document.getElementById(imgID[index]).src=base64;
            console.log(base64)
            switch (index){
              case '0':
                vm.$store.dispatch("upload_images",{  //上传图片
                  base64Image:base64.substring(22)
                }).then(res=>{
                  Indicator.close();
                  vm.identImage1 = res.url
                  Toast({
                    message:res.errMsg?res.errMsg:res.msg,
                    position: 'bottom',
                    duration: 2000
                  });
                }).catch(err=>{
                  Indicator.close();
                    Toast({
                      message:err.errMsg?err.errMsg:err.msg,
                      position: 'bottom',
                      duration: 2000
                    });
                  }
                )
                break;
              case '1':
                vm.$store.dispatch("upload_images",{  //上传图片
                  base64Image:base64.substring(22)
                }).then(res=>{
                  Indicator.close();
                  vm.identImage2 = res.url
                  Toast({
                    message:res.errMsg?res.errMsg:res.msg,
                    position: 'bottom',
                    duration: 2000
                  });
                }).catch(err=>{
                  Indicator.close();
                  Toast({
                      message:err.errMsg?err.errMsg:err.msg,
                      position: 'bottom',
                      duration: 2000
                    });
                  }
                )
                break;
              case '2':
                vm.$store.dispatch("upload_images",{  //上传图片
                  base64Image:base64.substring(22)
                }).then(res=>{
                  Indicator.close();
                  vm.foodLicenseImage = res.url
                  Toast({
                    message:res.errMsg?res.errMsg:res.msg,
                    position: 'bottom',
                    duration: 2000
                  });
                }).catch(err=>{
                  Indicator.close();
                  Toast({
                      message:err.errMsg?err.errMsg:err.msg,
                      position: 'bottom',
                      duration: 2000
                    });
                  }
                )
                break;
              case '3':
                vm.$store.dispatch("upload_images",{  //上传图片
                  base64Image:base64.substring(22)
                }).then(res=>{
                  Indicator.close();
                  vm.businessLicenseImage = res.url
                  Toast({
                    message:res.errMsg?res.errMsg:res.msg,
                    position: 'bottom',
                    duration: 2000
                  });
                }).catch(err=>{
                  Indicator.close();
                  Toast({
                      message:err.errMsg?err.errMsg:err.msg,
                      position: 'bottom',
                      duration: 2000
                    });
                  }
                )
                break;
            }
          })
        },300)

      },
//      convertImgToBase64(url, callback, outputFormat){ // 图片转base64
//        var canvas = document.createElement('CANVAS'),
//          ctx = canvas.getContext('2d'),
//          img = new Image;
//        img.crossOrigin = 'Anonymous';
//        img.onload = function(){
//          canvas.height = img.height;
//          canvas.width = img.width;
//          ctx.drawImage(img,0,0);
//          var dataURL = canvas.toDataURL(outputFormat || 'image/png',0.3);
//          callback.call(this, dataURL);
//          canvas = null;
//        };
//        img.src = url;
//      },

      /* 2015-09-28 上传图片*/
      convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
      var width = img.width;
      var height = img.height;
      // 按比例压缩4倍
      var rate = (width<height ? width/height : height/width)/4;
      canvas.width = width*rate;
      canvas.height = height*rate;
      ctx.drawImage(img,0,0,width,height,0,0,width*rate,height*rate);
      var dataURL = canvas.toDataURL(outputFormat || 'image/png');
      callback.call(this, dataURL);
      canvas = null;
    };
    img.src = url;
  },
      submit(){ //提交
        var vm = this;
        if(!vm.ident){
          Toast({
            message:'请输入身份证号码',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.businessLicense){
          Toast({
            message:'请输入营业执照',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.foodLicense){
          Toast({
            message:'请输入食品流通许可证',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.identImage1){
          Toast({
            message:'请输入上传身份证正面照片',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.identImage2){
          Toast({
            message:'请输入上传身份证反面照片',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.foodLicenseImage){
          Toast({
            message:'请上传食品流通许可证照片',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        if(!vm.businessLicenseImage){
          Toast({
            message:'请上传营业执照照片',
            position: 'bottom',
            duration: 2000
          });
          return
        }

        this.$store.dispatch("shops",{
          username:vm.contactTel,
          enPassword:vm.enPassword,
          code:vm.code,
          shopName:vm.shopName,
          contactName:vm.contactName,
          contactTel:vm.contactTel,
          areaIds:vm.areaIds,
          shopAddress:vm.shopAddress,
          ident:vm.ident,
          businessLicense:vm.businessLicense,
          foodLicense:vm.foodLicense,
          identImage1:vm.identImage1,
          identImage2:vm.identImage2,
          foodLicenseImage:vm.foodLicenseImage,
          businessLicenseImage:vm.businessLicenseImage,
          pAgentSn:vm.agentSn

        }).then(res=>{
          vm.openWin('Prompt',{type:3})
          Toast({
            message:res.errMsg?res.errMsg:res.msg,
            position: 'bottom',
            duration: 2000
          });

        }).catch(err=>{
          Toast({
            message:err.errMsg?err.errMsg:err.msg,
            position: 'bottom',
            duration: 2000
          });
          }
        )
      }

    },
    mounted(){

      var vm = this;
      vm.enPassword = this.$route.query.value.pwd;   //上一页带过来的
      vm.contactTel = this.$route.query.value.contactTel;
      vm.code = this.$route.query.value.code;
      vm.shopName = this.$route.query.value.shopName;
      vm.contactName = this.$route.query.value.contactName;
      vm.areaIds = this.$route.query.value.areaIds;
      vm.shopAddress = this.$route.query.value.shopAddress;
      vm.agentSn = this.$route.query.value.parentSn;
    }
  }













</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/css/variables.less";
  *{
    margin: 0px;
    padding: 0px;
    list-style: none;
    font-size: 14px;
  }
  .file{
    position: absolute;
    width: 100px;
    height: 80px;
    left: 15px;
    opacity:0; filter:alpha(opacity=0)
  }
  .img-box{
    position: relative;
  }
  /*.img-box{*/
  /*width: 70px;*/
  /*height:70px;*/
  /*background: url(/static/images/img.png);*/
  /*background-size:70px 70px;*/
  /*background-repeat:no-repeat ;*/
  /*float: right*/
  /*}*/
  .input p{
    font-size: 14px!important;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-size:14px;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size:14px;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size:14px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size:14px;
  }

  .btn{
    width: 95%;
    height: 50px;
    background: #E64692;
    color: #fff;
    font-size: 14px;
    line-height: 50px;
    margin: 0 auto;
    margin-top: 25px;
    text-align: center;
  }
  .content{
    width: 95%;
    height: auto;
    margin: 0 auto;
  }
  .content ul{
    width: 100%;
    height: auto;
  }
  .content ul li {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    padding: 5px 0px 5px 0px;
  }
  .input{

    height: 40px;
    line-height: 40px;
    border: 0px!important;
  }
  .input input{
    width: 50%;
    height: 40px;
    border:0px;
    outline: none;
    padding-left: 30px;
    border: 0px!important;
  }
  .input p{
    float: left;
    font-size: 14px;
  }
  .input input{
    float: left;
  }
  .submitImg{
    width: 100%;
    height: auto;
  }
  .submitImg .left,.right{
    width: 50%;
    height: auto;
    float: left;
  }
  .submitImg .left ,.right p{
    float: left;
    line-height:60px;
    font-size: 14px;
  }
  .submitImg img{
    width: 38%;
    float: left;
  }
  .left  img{
    width: 38%;
    float: left;
  }
  .right img{
    width: 38%;
    float: left;
  }
  @media (max-width: 600px) {
    .input input {
      padding-left: 15px;
    }
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
