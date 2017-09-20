<template>
</template>

<script>

    export default {
        name: 'WeChat',
        data() {
            return {
                phoneNum: '',
            }
        },
        methods: {
            openWin(url) {
                this.jump('/' + url + '');
            }
        },
      mounted(){
        location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa8d586bb563f5b1e&redirect_uri=http://192.168.1.98:8083&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
      }
    }
</script>

<style scoped>
</style>
