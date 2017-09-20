<template>
  <div id="app">
    <transition

    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<!--:enter-active-class="jumpAnime.in"-->
<!--:leave-active-class="jumpAnime.out"-->
<script>
  import jQuery from '../static/js/jquery.min'
  import { Toast } from 'mint-ui';

  //  document.addEventListener('touchmove',function (e) {
//    e.preventDefault();
//  },false)
//document.addEventListener('touchmove', function(e){e.preventDefault()}, false);
  (function(win,doc){
    var h;
    win.addEventListener('resize',function() {
      clearTimeout(h);
      h = setTimeout(setUnitA, 300);
    }, false);
    win.addEventListener('pageshow',function(e) {
      if (e.persisted) {
        clearTimeout(h);
        h = setTimeout(setUnitA, 300);
      }
    }, false);
    var setUnitA=function(){
      doc.documentElement.style.fontSize = doc.documentElement.clientWidth/37.5 + 'px';
    };
    setUnitA();
  })(window,document);


export default {
  name: 'app',
  data () {
    return {

          front:{in:'pa animated slideInRight',out:'pa animated slideOutLeft'},
          backway:{in:'pa animated slideInLeft',out:'pa animated slideOutRight'},
          jumpAnime: {in:'pa animated slideInRight',out:'pa animated slideLeft'},
    }
  },
  mounted(){

//    window.addEventListener("popstate", e=>{
//        console.log(222);
//      this.$root.$refs.app.jumpAnime=    this.$root.$refs.app.backway
//    }, false);
  }
}
</script>

<style lang="less">
  @import './assets/css/style.less';
  @import "http://at.alicdn.com/t/font_405903_vv16jb5gitnvcxr.css";
  @font-face {
    font-family: "PingFang";
    src: url("http://wechat.awo123.cn/agent/lib/font/PingFangSCRegular.ttf");
  }
  html,body{
    height: 100%;
    font-family: "PingFang";
    overflow-y: scroll;
  }
  *{
    margin: 0px;
    padding: 0px;
  }
  input{
    border: 0px;
  }
  .box{
    overflow: scroll;
  }
  #app{
    height: 100%;
    /*overflow: hidden;*/
  }
  .animated{
    -webkit-animation-duration:.3s;animation-duration:.3s;

    position: absolute;
    width: 100%;
  }
  /*.child-view {*/
    /*transition: all .3s linear;*/
  /*}*/
  .slideInDown2{-webkit-animation-name:slideInDown2;animation-name:slideInDown2}
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter{ /* .fade-leave-active in below version 2.1.8 */
     transform: translateX(100px);
     opacity: 1;
     transition: all 1s ease;
  }
  .fade-leave-to{ /* .fade-leave-active in below version 2.1.8 */
    transform: translateX(-100px);
    opacity: 1;
    transition: all 1s ease;
  }

</style>
