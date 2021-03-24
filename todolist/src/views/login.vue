<template>
  <div class="login">
  <h2>Se connecter </h2>
  <toLogin></toLogin>
  <br>
  <h2> Créer un compte </h2>
  <newAcount ></newAcount>
  <br>
  </div>
</template>

<script>
import toLogin from '../components/toLogin.vue';
import newAcount from '../components/newAcount.vue';
export default {
  
  components: { toLogin, newAcount },
  name: "Login",
};
</script>