import Vue from 'vue'
import Vuex from 'vuex'
import  actions from './actions'
import  mutations from './mutations'

Vue.use(Vuex);
const store = new Vuex.Store({
  actions,
  mutations,
  state: {
    login:false,
    aaaa:'vfff',
    user: {
      userName:'李小白',
      phone:'13846433161',
      sex:'0'
    }                             //存放用户的头像信息卡
  },
  // getters: {
  //   // todos that should be currently displayed.
  //   // this Array may not be fully fetched.
  //   activeTodos (state, getters) {
  //     const { todos } = state
  //
  //     return Object.keys(todos)
  //       .filter( key => {
  //         return todos[key].active
  //       })
  //       .reduce( (acc,key) => {
  //         acc[key] = todos[key];
  //         return acc
  //       }, {});
  //   }
  // }
})

export default store
