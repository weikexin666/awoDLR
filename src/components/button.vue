<template>
  <div class="button">
      {{text}}
  </div>
</template>

<script>
  export default {
    name: 'btn',
    props:{
      text:{
        type:String,
        default:'确定'
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    }
  }
</script>

<style scoped>
  .button{
    width: 95%;
    height: 50px;
    background: #E64692;
    color: #fff;
    font-size: 16px;
    line-height: 50px;
    margin: 0 auto;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -47.5%;
    text-align: center;
  }
</style>
