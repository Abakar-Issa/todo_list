<template>
  <label for="email">Email:</label>
  <input type="email" v-model="email"  name="email" />
  <br>
  <label for="password">password:</label>
  <input type="password" id="password" name="password" v-model="password" />
   <br>
  <button v-on:click="login">Login</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  
  methods: {
    ...mapActions("account", ['signIn']),
    
    login() {
        this.signIn({email:this.email,password:this.password});
    },

  },
};
</script>