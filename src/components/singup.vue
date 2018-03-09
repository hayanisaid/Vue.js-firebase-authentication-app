<template>
  <div class="singup">
  <h3 class="text-center">Creat new Account</h3>
   <form @submit.prevent="addUser">
   	<input
    type="email"
     class="form-control"
      id="email"
       name="email"
       placeholder=" your email"
        v-model="email">
   	<input
     type="password"
      class="form-control"
       id="password"
        name="password"
         v-model="password"
         placeholder="password">
   	<input type="submit" class="btn btn-primary btn-block" value="create">
    <p>You have Account? <router-link to="/login">login</router-link></p>
   </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'singup',
  data () {
    return {
      password:"",
      email   :""
    }
  },
   methods:{
    addUser:function(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(result=>{
        if (result) {
          alert('New user created')
        }
      }).catch(error=>{
        console.log(error.message)
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
