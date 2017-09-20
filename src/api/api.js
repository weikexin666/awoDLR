

const host='http://192.168.1.89:80'; //服务器
// const host='http://192.168.1.122:81/agent-wechat-api/'; //服务器
// const host='http://hus.ngrok.cc'; //服务器


export const HOST=host;

//接口
export const apiURL={
  login:'/api/orders/delete',    //登录接口
   // oauth2:'/oauth2',    //WEIXINSHOUQUAN
   oauth2:'/api/oauth2',    //WEIXINSHOUQUAN
  register:'/api/agents/register',  //代理人注册接口
  send_code:'/api/common/send_code',  //发送验证码接口
  check_code:'/api/common/check_code', //验证验证码
  areas:'/api/common/areas',       //查询区域
  balance:'/api/agents/balance',   //查看余额和账单接口
  commission:'/api/agents/commission', //代理人总提成和提成记录接口
  banks:'/api/banks' , //查询代理银行卡操作接口
  delbank:'/api/banks/delbank',  //解绑银行卡接口
  agents: '/api/agents', //   代理人基本信息
  withdraw:'/api/withdraw', //代理人提现申请接口
  list:'/api/withdraw/list' ,   //查看提现记录
  children:'/api/agents/children' ,   //查询代理人信息接口
  addbank:'/api/banks/add' ,   //绑定银行卡接口  post
  updateSelf:'/api/agents/updateSelf' ,   //代理人基本信息修改  post
  updateChildren:'/api/agents/updateChildren' ,   //代理人基本信息修改  post
  updateCashPwd:'/api/agents/cash_pwd' ,   //设置/修改提现密码  post



  shops:'/api/shops' ,   //门店注册接口   POSt
  upload_images:'/api/common/upload_images' ,   //上传图片   POSt



};

//接口签名
export const signature={
  appSecret:'',
  publicKey:''
}
