// const uuidV4 = require('uuid/v4');
//
// export function SET_TODOS (state, { todos }) {
//   Vue.set(state, 'todos', todos)
// }
//
// export function TOGGLE_TODO (state, { id, done }) {
//   state.todos[id].done = done
// }
//
// export function ADD_TODO (state, { name }) {
//   Vue.set(state.todos, uuidV4(), { name, active: true, done: false })
// }
//
// export function SET_USER (state, { user }) {
//   Vue.set(state.users, user.id, user)
// }
// import Vue from 'vue';
// var mutations={
//
//
//
//
//
// }
// export function SET_save (state, value ) {
//
//
//   state.aaaa=value
//   state.aaaa=value
//   state.aaaa=value
//
// }

import Vue from 'vue'

// export function SET_TODOS (state, { todos }) {
//   Vue.set(state, 'todos', todos)
// }

// //所有的东西一起换
// export function set_users (state,value) {
//   state.users=value;
// }
// //设置用户名
// export function setUserName(state,{ssss}) {
//     state.user.userName = ssss
// }
// //设置电话
// export function setUserPhone(state,{phone}) {
//   state.user.userName = ''
// }
//
//
// //只换头
// export function set_users_name (state,{nickName}) {
//   state.users.nickName=nickName;
// }


const mutations={
  setAccessToken(state,data){
    state.login=data;
    window.localStorage.setItem("accessToken",data);
  },
  clearAccessToken(state,data){
    state.login=false;
    window.localStorage.removeItem("accessToken");
  },
}

export default mutations
