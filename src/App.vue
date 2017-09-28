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
  //  分享

  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wxa8d586bb563f5b1e', // 必填，公众号的唯一标识
    timestamp:'1505908080', // 必填，生成签名的时间戳
    nonceStr: 'qwjSJSskljadJDlkJALkanAKLJN', // 必填，生成签名的随机串
    signature: '2104d597f032bcfa356636ad81b8aa6fed6b00fd',// 必填，签名，见附录  1
    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','hideOptionMenu','hideMenuItems'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });

  wx.ready(function(){
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

    wx.hideMenuItems({
//      menuList: ['menuItem:favorite','menuItem:setFont','menuItem:openWithSafari', 'menuItem:copyUrl','menuItem:readMode','menuItem:share:email'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
      menuList: ['menuItem:exposeArticle','menuItem:setFont','menuItem:dayMode', 'menuItem:nightMode','menuItem:refresh','menuItem:profile','menuItem:addContact','menuItem:share:weiboApp','menuItem:share:facebook','menuItem:share:QZone','menuItem:editTag','menuItem:delete','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:openWithQQBrowser','menuItem:openWithSafari','menuItem:share:email','menuItem:share:brand'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    });

    wx.onMenuShareAppMessage({
      title: '分享标题',
      desc: '分享描述',
      link: localStorage.getItem('shareUrl'),
      imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3717344562,4136166237&fm=27&gp=0.jpg',
      type: '',
      dataUrl: '',
      success: function () {
      },
      cancel: function () {
      }
    });
    wx.onMenuShareTimeline({
      title: '分享朋友圈标题',
      link:  localStorage.getItem('shareUrl'),
      imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3717344562,4136166237&fm=27&gp=0.jpg',
      success: function () {
      },
      cancel: function () {
      }
    });
  });






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
    methods: {
      wxShare() {
        wx.ready(function(){
          wx.hideMenuItems({
            menuList: ['menuItem:exposeArticle','menuItem:setFont','menuItem:dayMode', 'menuItem:nightMode','menuItem:refresh','menuItem:profile','menuItem:addContact','menuItem:share:weiboApp','menuItem:share:facebook','menuItem:share:QZone','menuItem:editTag','menuItem:delete','menuItem:copyUrl','menuItem:originPage','menuItem:readMode','menuItem:openWithQQBrowser','menuItem:openWithSafari','menuItem:share:email','menuItem:share:brand'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
          });
          wx.onMenuShareAppMessage({
            title: '门店注册',
            desc: '点击进入门店注册，立即使用阿喔母婴平台功能',
            link: localStorage.getItem('shareUrl'),
            imgUrl: './static/images.shareLogo.png',
            type: '',
            dataUrl: '',
            success: function () {
            },
            cancel: function () {
            }
          });
          wx.onMenuShareTimeline({
            title: '门店注册',
            link:  localStorage.getItem('shareUrl'),
            imgUrl: './static/images.shareLogo.png',
            success: function () {
            },
            cancel: function () {
            }
          });
        });
      },
      getWxShare() {
        this.$store.dispatch("share",{
        }).then(res=>{
          //  分享
          wx.config({
            debug: false,
            appId: 'wxc9ba5546632f304f',
            timestamp: res.timestamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','hideOptionMenu','hideMenuItems']
          });
          this.wxShare()
        }).catch(err=>{
            //  分享
            wx.config({
              debug: false,
              appId: 'wxc9ba5546632f304f',
              timestamp: err.timestamp,
              nonceStr: err.nonceStr,
              signature: err.signature,
              jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','hideOptionMenu','hideMenuItems']
            });
            this.wxShare()
          }
        )
      }
    },
    mounted(){

    }
  }
</script>

<style lang="less">
  @import './assets/css/style.less';
  @import "http://at.alicdn.com/t/font_405903_vv16jb5gitnvcxr.css";
  @font-face {
    font-family: "PingFang";
    src: url("http://ag.awo123.cn/lib/font/PingFangSCRegular.ttf");
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
