<template>
  
  <input type="email" placeholder="email" v-model="email"  name="email" />
  <br>
  <br>
  <input type="password" placeholder="password" id="password" name="password" v-model="password" />
   <br>
   <br>
  <button v-on:click="login">Connexion</button>
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