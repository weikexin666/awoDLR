// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mixins from './mixins'
import myHtml from './html.js'
import Mint from 'mint-ui';
import store from './store'


//使用Mint
Vue.use(Mint);

//全局我定义的组件标签

Vue.use(myHtml);

//全局组件
Vue.mixin(mixins);

Vue.config.productionTip = false;

var lastHistory=""
router.beforeEach(({meta, path}, from, next)=> {

    if(path==lastHistory){
        console.log(this);
       //this.$root.$refs.app.jumpAnime=this.$root.$refs.app.backway
    }
    lastHistory=from.path;

  //this.$root.$refs.app.jumpAnime=    this.$root.$refs.app.backway
  //console.log(222);
  // const {auth = true} =  meta      // meta代表的是to中的meta对象，path代表的是to中的path对象  
  //
  // var accessToken = window.localStorage.getItem("accessToken");
  // if(accessToken) {
  //   store.state.login = accessToken;
  // }
  // var isLogin = Boolean(store.state.login)    // true用户已登录， false用户未登录　
  //
  //
  // if ( path == '/login' || path == '/' ) {            //添加背景
  //
  //   document.body.classList.remove('bg-gray');
  // }else{
  //   document.body.classList.add('bg-gray');
  // }
  //
  //
  // if (auth  &&  !isLogin  &&  path !== '/login') {   // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验
  //
  //   next({ path: '/login' })   //  跳转到login页面  
  // }else {
  //   store.state.currentPage.history=path;
  //   console.log(store.state.currentPage.history);
  //   next()   // 进行下一个钩子函数  
  // }

  next()   // 进行下一个钩子函数  
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App ref="app"/>',
  components: { App }
})
