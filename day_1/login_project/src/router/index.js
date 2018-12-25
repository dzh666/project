import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import app from '../components/app'
import phone from '../components/phone'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },{
      path:'/login',
      component:app
    },{
      path:'/phone',
      component:phone
    }
  ]
})
