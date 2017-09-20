/**
 * Created by Administrator on 2017/6/23.
 */

import Network from '../store/network.js';
import {apiURL,host} from '../config/config.js'


(function($ccx) {
  var token=$ccx.oAuth;
  var network=new Network({token:token,oAuth:true});
  var orderList=function(){
    var _public={
      //钱包列表
      getWalletlist:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.Walletlist,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //
      getpointList:function(params,cb){
        var params=params;
        var ret,err;
        network.get('http://localhost/point',params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //募捐列表
      getdonationsList:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.donations,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      getdiscountList:function(params,cb){
        var params=params;
        var ret,err;
        network.get('http://localhost/discount',params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      getrescueList:function(params,cb){
        var params=params;
        var ret,err;
        network.get('http://localhost/rescue',params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //募捐记录列表
      getcollectList:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.donationsList,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //通知列表
      getnoticeList:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.getnoticeList,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      msgdelete:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.msgDelete,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      msgread:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.msgRead,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //反馈列表
      feedbackList:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.feedback,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //反馈详情
      feedbackmsg:function(params,pid,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.feedbackdetail+pid,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //提交反馈
      subfeedback:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.subfeedback,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //删除反馈
      delfeedback:function(params,pid,cb){
        var params=params;
        var ret,err;
        network.delete(host+apiURL.deletefeedbackdetail+pid,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //信用等级
      credit:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.my_credit,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //提现接口
      withdrawal:function(cb){
        var ret,err;
        network.get(host+apiURL.withdrawal).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //提现明细
      withdrawlist:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.WithdrawalList,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //提现明细删除
      withdraw_del:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.withdraw_del,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data);
        })
      },
      //解绑银行卡 params可为空
      unbindBank:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.unbindBank,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      //银行卡列表
      banks:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.banks,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        });
      },
      //绑定银行卡
      bindBank:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.bindBank,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      //车辆列表 选择车辆列表
      car_list:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.car_list,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      // 车辆删除
      car_delete:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.car_delete,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      // 设置默认车辆
      car_default:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.car_default,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      //个人中心
      center:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.center,params).then(res=>{
          if(res.data.code == 20000) {
            cb(res.data, err)
          }else{
            cb(ret,res.data)
          }
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      //订单列表
      orders:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.orders,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },//订单详情
      ordersdetails:function(params,pid,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.orders+pid,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      //紧急救援列表
      getrescueList:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.getrescueList,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      }, //添加紧急救援
      rescues:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.rescues,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      // 紧急救援删除
      rescues_delete:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.rescues_delete,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      // 紧急救援详情
      rescues_detail:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.rescues_detail,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        })
      },
      //删除订单
      order_delete:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.order_delete,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        });
      },    //提现
      confirmWithdrawal:function(params,cb){
        var params=params;
        var ret,err;
        network.post(host+apiURL.confirmWithdrawal,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        });
      }, //"所有"查询接口
      options:function(params,cb){
        var params=params;
        var ret,err;
        network.get(host+apiURL.options,params).then(res=>{
          cb(res.data,err)
        }).catch(res=>{
          cb(ret,res.data)
        });
      },

    };
    return _public;
  }();
  //添加组件
  $ccx.fExtend($ccx,{"$orderList":orderList});
})(ccx);
