<template>
  <div class="login">
  <h3 class="text-center">login to your Account</h3>
   <form @submit.prevent="login">
   	<input
   	 type="email"
   	  class="form-control"
   	   id="email"
   	    name="email"
   	     v-model="email"
   	     placeholder="@email">
   	<input
   	 type="password" 
   	 class="form-control"
   	  id="password" 
   	  name="password"
   	  placeholder="password***"
   	  v-model="password">
   	<input  type="submit" class="btn btn-primary btn-block" value="Login">
   	<p>You don't have Account <router-link to="/singup">Create Account</router-link></p>
   </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
      email:'',
      password:''
    }
  },
  methods:{
  	login:function(){
  		firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(result=>{
  			alert('login success')
  		}).catch(error =>{
  			alert(error.message)
  		})
  }
}
}
</script>
<style scoped>
	form{
		max-width: 20em;
		margin:4em auto;
	}
	input{
		margin-bottom: 1em;
	}
</style>
