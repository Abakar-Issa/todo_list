<template>

  <label for="Name">Name:</label>
  <input type="text" id="name" name="name" v-model="name" />
  <br>
  <label for="email">Email:</label>
  <input type="email" v-model="email" id="email" name="email" />
  <br>
  <label for="password">password:</label>
  <input type="password"  name="password" v-model="password" />
  <br>
  <button v-on:click="createAccount">register</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  
  methods: {
    ...mapActions("account",['signUp']),
    createAccount() {
        this.signUp({name:this.name,email:this.email,password:this.password});
    },

  },
};
</script>