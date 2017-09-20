
import Logo from './components/Logo.vue';
import Button from './components/Button.vue';
import InputPassword from './components/InputPassword.vue';
import BankPicker from './components/BankPicker.vue';
import CityPicker from './components/CityPicker.vue';
import PopupPicker from './components/PopupPicker.vue';
import { Loadmore } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import { Field } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Picker } from 'mint-ui';




const install = function(Vue, config = {}) {

  if (install.installed) return;

  Vue.component(Logo.name,Logo);
  Vue.component(Button.name,Button);
  Vue.component(BankPicker.name,BankPicker);
  Vue.component(CityPicker.name,CityPicker);
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(InputPassword.name, InputPassword);
  Vue.component(PopupPicker.name, PopupPicker);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload);
  Vue.component(Field.name, Field);
  Vue.component(Popup.name, Popup);
  Vue.component(Picker.name, Picker);



  //
  // Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  // Vue.$toast = Vue.prototype.$toast = Toast;
  // Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install 游览器环境下自动安装 e
if (typeof window !== 'undefined' && window.Vue) {
     install(window.Vue);
}



//vue.install

export default  {install};
