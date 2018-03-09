import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import singup from '@/components/singup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
    	path:'/singup',
    	name:'singup',
    	component:singup
    },
    {
    	path:'HelloWorld',
    	name:'HelloWorld',
    	component:HelloWorld
    }
  ]
})
