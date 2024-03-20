<template>
  <v-container class="services-container" fluid>
    <div
      class="d-flex align-lg-start flex-column align-center flex-lg-row justify-space-between"
    >
      <div class="d-flex flex-column ga-4">
        <p class="services-heading ml-12 mt-10">Our Services</p>
        <ServiceCard
          :icon="icon1"
          heading="Mutual Fund Management"
          description="
Our experienced team will tailor investment portfolios to align with your risk 
tolerance, time horizon, and objectives, 
ensuring optimal diversification and 
performance"
        />

        <ServiceCard
          :icon="icon1"
          heading="Portfolio Manangement"
          description="
Our experts conduct thorough research 
and analysis to identify investment 
opportunities across various asset 
classes, sectors, and geographic regions, 
helping you make informed investment"
        />
      </div>
      <div class="d-flex flex-column ga-4">
        <ServiceCard
          :icon="icon1"
          heading="Investment Advisory Services"
          description="
We provide comprehensive financial 
planning services, including retirement 
planning, education funding, and estate 
planning, to help you create a roadmap for 
achieving your long-term financial aspirations"
        />

        <ServiceCard
          :icon="icon1"
          heading="Wealth Advisory"
          description="
Our wealth advisors offer personalized 
guidance and strategic advice on wealth 
preservation, tax optimization, and legacy 
planning, empowering you to build and 
protect your wealth for future generations"
        />
      </div>
    </div>
  </v-container>
</template>

<script setup>
import icon1 from "../assets/Asset 64@3x.png";
</script>
<script>
import ServiceCard from "./Cards/ServiceCard.vue";

export default {
  name: "ParentComponent",
  components: {
    ServiceCard,
  },
};
</script>
<style>
.services-container{
  margin-bottom: 9rem;
}
.services-heading {
  font-weight: 800;
  font-size: 2.5rem;
}
</style>
