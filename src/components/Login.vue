<template>
    <form @submit.prevent="handleSubmit">
      <error v-if="error" :error="error" />

          <h3>Login</h3>

          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
          </div>

          <button class="btn btn-primary btn-block">Login</button>

          <p class="forgot-password text-right">
            <Router-Link to="forgot">Forgot password?</Router-Link>
          </p>
    </form>
</template>

<script>

/* eslint-disable */
/* eslint-disable vue/multi-word-component-names */
// eslint-disable-next-line 

import axios from 'axios'
import Error from './Error.vue'

  export default {
    name:'Login',
    components:{
      Error
    },
    data(){
      return{
        email:'',
        password:'',
        error:''
      }
    },

    methods:{
     async handleSubmit(){
        try{
        const response= await axios.post('login',
           {
             email: this.email,
             password: this.password
            });

            localstorage.setItem('token', response.data.token);
            this.$store.dispatch('user', response.data.user);
            this.$router.push('/');
          } catch (e){
            this.error = 'invalid username/password!'

          } 
      }
    }

}
</script>