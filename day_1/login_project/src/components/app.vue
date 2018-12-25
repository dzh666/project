<template>
   <div class="wrap">
       <header></header>
       <section>
           <router-link to="/phone">手机号登陆</router-link>
           <router-link to="/register">注册</router-link>
       </section>
       <footer>
           <aside v-for='(val,i) in aside' :key='i'>
                <i :class="val.class"></i>
               <span>{{val.msg}}</span>
           </aside>
        
          <div class="other_login">
              其他登录方式
          </div>
       </footer>
   </div>
</template>
<script>
export default {
    data(){
        return{
            aside:[{
                class:'icon iconfont icon-weixin2',
                msg:'微信'
            },{
                class:'icon iconfont icon-QQ1',
                msg:'QQ'
            },{
                class:'icon iconfont icon-xinlangweibo1',
                msg:'微博'
            },{
                class:'icon iconfont icon-baidu',
                msg:'百度'
            }]
        }
    }
}
</script>
<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    background: #F7F2F2;
    display: flex;flex-direction: column;
}
header{
    width: 100%;
    height: 240px;
    background:url('../../static/bg1.png') no-repeat;
    background-size:100%;
}
section{
    width: 100%;
    fleX:1;
}
section a{
    display: block;
    width: 80%;
    height: 30px;
    border:1px solid #DD001B;
    color:#DD001B;
    text-align: center;
    line-height: 30px;
    margin:0 auto 10px;
    text-decoration: none;
    border-radius: 20px;
    font-size: 12px;
}
footer{
    height: 80px;
    width: 100%;
    display: flex;
    position: relative;
}
footer aside{
  flex:1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
footer aside i{
    border:1px solid#666;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
     color:#666
}
footer aside span{
   font-size: 12px; color:#666
}
.other_login{
    position: absolute;
    top:-10px;
    left:50%;
    transform: translateX(-50%);
    font-size: 12px;
    color:#666;
     background: #F7F2F2;
}
.other_login:after{
    content: '';
    width: 50px;
    height: 1px;
    background: #666;
    position: absolute;
    top:50%;
    right: -75%;
}
.other_login:before{
    content: '';
    width: 50px;
    height: 1px;
    background: #666;
    position: absolute;
    top:50%;
    left: -75%;
}

</style>


