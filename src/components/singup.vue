<template>
  <div class="singup">
  <h3 class="text-center">Creat new Account</h3>
   <form>
   	<input type="text" class="form-control" id="username" name="usename">
   	<input type="password" class="form-control" id="password" name="password">
   	<button type="submit" class="btn btn-primary btn-block">Create</button>
    <p>You have Account? <router-link to="/login">login</router-link></p>
   </form>
  </div>
</template>

<script>
export default {
  name: 'singup',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
