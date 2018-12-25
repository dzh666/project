<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import app from './components/app'
export default {
  name: 'App',
  components:{
    app
  }
}
</script>

<style>
@import url('../static/fonts/iconfont.css');
 *{
   margin:0;
   padding:0;
   font-size: 14px;
   text-decoration: none;
   outline: none;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
