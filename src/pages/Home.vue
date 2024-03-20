<template>
  <div class="px-4 pa-4 pa-lg-7 px-lg-16">
    <Navbar/>
    <HeroHome
    
      :mainHeading="'Investing is'"
      :subHeading="'Even better now'"
      :boldDescription="'Providing you the opportunity to invest'"
      :normalDescription="'In more than 100 assets for continuous income'"
      page="home"
      contentType="home"
     
    />
    <Work />
    <WhyUs />
    <Features />
    <Testimonial/>
    <Faq />
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HeroHome from "../components/HeroHome.vue";
import Work from "../components/Work.vue";
import WhyUS from "../components/WhyUs.vue";
import Features from "../components/Features/Features.vue";

import Faq from "../components/Faq.vue";
import Footer from "../components/Footer.vue";
import Testimonial from "@/components/Testimonial.vue";


export default {
  name: "Home",
  components: {
    Navbar,
    HeroHome,
    Work,
    WhyUS,
  },
};
</script>


<style>
body{

  font-family: 'Poppins', sans-serif;

 
}
</style>