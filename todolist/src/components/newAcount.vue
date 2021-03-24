<template>

  
  <input type="text" placeholder="name" id="name" name="name" v-model="name" />
  <br>
  <br>
  <input type="email" placeholder="email" v-model="email" id="email" name="email" />
  <br>
  <br>
  <input type="password" placeholder="password" name="password" v-model="password" />
  <br>
  <br>
  <button v-on:click="createAccount">Créer </button>
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