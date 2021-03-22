<template>
  <div class="login">
  <h1>Login </h1>
  <toLogin></toLogin>
  <br>
  <h1> Create Account </h1>
  <newAcount ></newAcount>
  <br>
  </div>
</template>

<script>
import toLogin from '../components/toLogin.vue';
import newAcount from '../components/newAcount.vue';
export default {
  components: { toLogin, newAcount },
  name: "Login"
};
</script>