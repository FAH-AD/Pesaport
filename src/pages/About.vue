<template>
  <div class="px-4 pa-4 pa-lg-7 px-lg-16">
    <Navbar/>
    <Hero
      :mainHeading="'Welcome to'"
      :subHeading="'Pesaport'"
      :boldDescription="''"
      :normalDescription="'At Pesaport, we are dedicated to empowering individuals with the freedom to earn, hold, spend, share, and donate their funds, regardless of their background or origin'"
      page="about"
      contentType="about"
      reverseRow=false
    />
    <AboutFeatures />
    <AboutUsComp />
  </div>

  <Mission />
  <div class="px-4 pa-4 pa-lg-7 px-lg-16">
    <Value />
    <Product />
    <Support />
  </div>
  <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue'; 
import Hero from "../components/Hero.vue";
import AboutFeatures from "../components/About-features.vue";
import AboutUsComp from "../components/AboutUsComp.vue";
import Mission from "../components/Mission.vue";
import Value from "../components/Value.vue";
import Product from "@/components/Product.vue";

import Support from "@/components/Support.vue";
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
