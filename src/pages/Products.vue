<template>
  <div class="px-4 pa-4 pa-lg-7 px-lg-16">
    <Navbar />
    <Hero
      :mainHeading="'Empowering'"
      :subHeading="'Your Financial future'"
      :normalDescription="'with expert guidance and innovative solutions tailored to your goals. Maximize returns, minimize risks, and navigate markets with confidence. Trust us to be your partner on the path to nancial success'"
      page="product"
      contentType="home"
    />
    <Services />

    <Product />
  </div>

  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Services from "../components/Services.vue";

import Product from "@/components/Product.vue";

import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    Hero,
    Footer,
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>
