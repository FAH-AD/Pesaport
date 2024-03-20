<template>
  <v-card color="transparent" elevation="0" class="our-values-card">
    <v-card-title class="our-values-title">Our Values</v-card-title>
    <v-row class="justify-space-around d-flex flex-colum flex-lg-row">
      <ValueCard
        :icon="icon1"
        title="Clients"
        description="At Pesaport, our paramount value is 
delivering unparalleled customer service. With a 
team of over 100 dedicated account managers, we 
prioritize meeting the diverse needs of our clients."
      />
      <ValueCard
        :icon="icon2"
        title="Reliability"
        description="As an industry frontrunner, we go 
above and beyond to ensure the utmost reliability 
for our clients. Our relentless commitment to client 
satisfaction sets us apart in the industry."
      />
    </v-row>
    <v-row class="mt-0 mt-lg-16 flex-lg-row flex-column d-flex justify-space-around">
      <ValueCard
        :icon="icon3"
        title="Simplicity"
        description="At Pesaport, we believe trading 
should be accessible to all. Our user-friendly trading platform makes it easy for anyone 
to become a trader. Pesaport is seamlessly 
available across all platforms"
      />
      <ValueCard
        :icon="icon4"
        title="Speed"
        description="We pride ourselves on providing 
lightning-fast Investing experiences through 
state-of-the-art technologies. Experience seamless 
order executions and a lag-free user interface with 
Pesaport."
      />
    </v-row>
  </v-card>
</template>
<script setup>
import icon1 from "../assets/Asset 64@3x.png";
import icon2 from "../assets/Asset 65@3x.png";
import icon3 from "../assets/Asset 63@3x.png";
import icon4 from "../assets/Asset 62@3x.png";
</script>
<script>
import ValueCard from "./Cards/ValueCard.vue";

export default {
  name: "OurValues",
  components: {
    ValueCard,
  },
};
</script>
<style>
.our-values-title {
  white-space: normal !important;
}
.our-values-card {
  margin-top: 1rem;
}
.our-values-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
}
</style>
