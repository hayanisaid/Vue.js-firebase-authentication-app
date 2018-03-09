<template>
  <div class="login">
  <h3 class="text-center">login to your Account</h3>
   <form>
   	<input type="text" class="form-control" id="username" name="usename">
   	<input type="password" class="form-control" id="password" name="password">
   	<button @click="login" type="submit" class="btn btn-primary btn-block">login</button>
   	<p>You don't have Account <router-link to="/singup">Create Account</router-link></p>
   </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	login:function(){
  		this.$router.replace('HelloWorld')
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
