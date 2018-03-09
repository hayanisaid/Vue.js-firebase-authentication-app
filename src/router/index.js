import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import singup from '@/components/singup'

Vue.use(Router)
const router= new VueRouter({})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: login
    },
    {
      path: '/login',
      name: 'loginPage',
      component: login
    },
    {
    	path:'/singup',
    	name:'singup',
    	component:singup
    },
    {
    	path:'/HelloWorld',
    	name:'HelloWorld',
    	component:HelloWorld,
    	meta:{
    		requiresAuth:true
    	}
    }
  ]
})

router.beforeEach((to,from,next)=>{
	let currentUser=firebase.auth().currentUser;
	let authRequired=to.matched.some(record=>record.meta.requiresAuth);
	if(authRequired && !currentUser)next('login')
		else if(!authRequired && currentUser) next('HelloWorld')
	 else next()		
})
