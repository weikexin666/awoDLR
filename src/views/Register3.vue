<template>
  <div class="box">
    <top title="用户注册申请"></top>
    <div class="content">
      <ul>
        <li>
          <div class="input">
            <p>身份证号</p>
            <input type="tel" placeholder="请输入身份证号">
          </div>
          <div class="submitImg">
            <div class="left">
              <p>正面：</p>
              <img src="/static/images/img.png" alt="">
            </div>
            <div class="right">
              <p>背面：</p>
              <img src="/static/images/img.png" alt="">
            </div>
          </div>
        </li>
        <li>
          <div class="input">
            <p>营业执照</p>
            <input type="tel" placeholder="请输入营业执照">
          </div>
          <div class="submitImg">
            <div class="left">
              <img src="/static/images/img.png" alt="">
            </div>
          </div>
        </li>
        <li>
          <div class="input">
            <p>食品流通许可证</p>
            <input type="tel" placeholder="请输入食品流通许可证">
          </div>
          <div class="submitImg">
            <div class="left">
              <img src="/static/images/img.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <input type="file" id="fielinput" >
    <img id="txshow" style="width:100px;height:100px;"/>
    <router-link to="/views/Agent2">
      <div class="btn">注册</div>
    </router-link>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import { Toast } from 'mint-ui';

  export default {
    components: {
      'top': Header
    }
  }

  window.onload = function () {
    var input = document.getElementById("fielinput");
    var txshow = document.getElementById("txshow");
    if (typeof (FileReader) === 'undefined') {
      result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
      input.setAttribute('disabled', 'disabled');
    } else {
      input.addEventListener('change', readFile, false);
      txshow.onclick = function () { input.click(); }
    }


  }
  function readFile() {
    var file = this.files[0];
    //判断是否是图片类型
    if (!/image\/\w+/.test(file.type)) {
      alert("只能选择图片");
      return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) { txshow.src = this.result; alert(this.result); }


  }

</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-size:18px;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size:18px;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size:18px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size:18px;
  }

  .btn{
    width: 95%;
    height: 50px;
    background: #E64692;
    color: #fff;
    font-size: 16px;
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
    padding: 10px 0px 10px 0px;
  }
  .input{
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .input input{
    width: auto;
    height: 40px;
    border:0px;
    outline: none;
    padding-left: 30px;

  }
  .input p{
    float: left;
    font-size: 18px;
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
    font-size: 18px;
  }
  .submitImg .left ,.right img{
    width: 40%;
    float: left;
  }
</style>
