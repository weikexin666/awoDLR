<template>
</template>

<script>

    export default {
        name: 'back_oauth2',
        data() {
            return {
                phoneNum: '',
            }
        },
        methods: {
            openWin(url) {
                this.jump('/' + url + '');
            },
          getQueryString(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
          }
        },
      mounted(){
        alert("code:" + this.getQueryString("code") + ",state:" + this.getQueryString("state"));
      }
    }
</script>

<style scoped>
</style>
