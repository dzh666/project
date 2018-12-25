<template>
    <div class="register">
        <header>
            手机号登陆
            <router-link to='/login'>&lt;</router-link>
        </header>
        <section>
         <label for="">
               <i class="icon iconfont icon-phonenum"></i>
             <input type="text" placeholder="手机号">
         </label>
          <label for="">
                <i class="icon iconfont icon-set"></i>
             <input type="text" placeholder="密码">
         </label>
         <button class="login_btn">登陆</button>
         
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
   .register{
       width: 100%;
       height:100%;
       display: flex;
       flex-direction: column;
   }
   header{
       width: 100%;
       height:40px;
       background: #353A3C;
       color:#fff;
       text-align: center;
       line-height: 40px;
       position: relative;
   }
   header a{
       color:#fff;
       position: absolute;
       top:50%;
       left:15px;
       transform: translateY(-50%);
       font-family: '楷体';
       font-size: 20px;
   }
   section{
       flex:1;
       padding: 0 10px;
       padding-top:15px;
   }
   section label{
          display: block;
           width: 100%;
           height: 35px;
           border-bottom:1px solid #ccc;
           position: relative;
   }
   section label i{
       position: absolute;
       top:50%;
       left:5px;
       transform: translateY(-50%);
   }
   section label input{
       width: 100%;
       height: 100%;
       border:0;
       text-indent: 30px;
   }
   .login_btn{
       width: 100%;
       height:40px;
       background: #353A3C;
       border:0;
       border-radius: 30px;
       color:#999;
       margin-top:10px;
   }
 
</style>

