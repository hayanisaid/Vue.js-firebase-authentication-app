// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


 // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBTLTxb7T441cxf_efIYOX_BB_fGY3bE0o",
    authDomain: "vue-firebase-a0bfc.firebaseapp.com",
    databaseURL: "https://vue-firebase-a0bfc.firebaseio.com",
    projectId: "vue-firebase-a0bfc",
    storageBucket: "vue-firebase-a0bfc.appspot.com",
    messagingSenderId: "217439729002"
  };
  firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
