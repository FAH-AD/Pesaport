<template>
  <div>
    <LoginComp />
  </div>
</template>

<script>
import LoginComp from "../components/LoginComp.vue";
export default {
  name: "SignIn",
  components:{
    LoginComp
  }
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>
