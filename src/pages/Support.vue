<template>
  <div class="px-4 pa-4 pa-lg-7 px-lg-16">
    <Navbar />

    <SupportHero />
    <SupportComp />
  </div>

  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SupportHero from "../components/SupportHero.vue";

import SupportComp from "../components/SupportComp.vue";

import Footer from "../components/Footer.vue";

export default {
  name: "Support",
  components: {
    SupportHero,
    Footer,
    SupportComp,
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>
