import {HOST,apiURL} from '../api/api.js'
import network from '../api/network.js'
const actions= {
  login({dispatch,commit},value){
     return new Promise((resolve, reject)=>{

       network.fn_Get(HOST+apiURL.list,value).then(res=>{
         if(res.data.code==20000){
           resolve(res.data);
         }else {
           reject(res.data);
         }
         // if(res.data.code=="2000"){
         //   // commit("setAccessToken",res.AccessToken);
         //   resolve(res);
         // }else{
         //   reject(res);
         // }
       }).catch(res=> { //失败
         reject(res);
         })
     })
    // commit('setAccessToken',value);
    // return Promise.resolve(value)
  },
  send_code({dispatch,commit},value){ // 发送验证码
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.send_code,value).then(res=>{
        if(res.status=="200"){
          resolve(res);
        }else{
          reject(res);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },

  register({dispatch,commit},value){  //代理商注册
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.register,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  banks({dispatch,commit},value){  //查询绑定的银行卡
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.banks,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  delbank({dispatch,commit},value){  //解绑银行卡
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.delbank,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  agents({dispatch,commit},value){  //查询代理商信息
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.agents,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  children({dispatch,commit},value){  //查询代理人信息
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.children,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  PostChildren({dispatch,commit},value){  //修改代理人信息
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.children,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  withdraw({dispatch,commit},value){  //提现
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.withdraw,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  balance({dispatch,commit},value){  //提现
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.balance,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  addbank({dispatch,commit},value){  //绑定银行卡
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.addbank,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  updateSelf({dispatch,commit},value){  // 代理人基本信息修改
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.updateSelf,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  updateCashPwd({dispatch,commit},value){  // 设置/修改提现密码
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.updateCashPwd,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  areas({dispatch,commit},value){  // 查询省市区
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.areas,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  commission({dispatch,commit},value){  // 代理商提成记录
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.commission,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  check_code({dispatch,commit},value){  // 校验验证码
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.check_code,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  updateChildren({dispatch,commit},value){  //
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.updateChildren,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  oauth2({dispatch,commit},value){  //
    return new Promise((resolve, reject)=>{
      network.fn_Get(HOST+apiURL.oauth2,value).then(res=>{
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },

  shops({dispatch,commit},value){  //
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.shops,value).then(res=>{   //代理人注册
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },
  upload_images({dispatch,commit},value){  //
    return new Promise((resolve, reject)=>{
      network.fn_Post(HOST+apiURL.upload_images,value).then(res=>{   //代理人注册
        if(res.data.code==20000){
          resolve(res.data);
        }else {
          reject(res.data);
        }
      }).catch(res=> { //失败
        reject(res);
      })
    })
  },









}



export default actions;
