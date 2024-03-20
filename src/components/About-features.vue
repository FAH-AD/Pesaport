<template>
    <div class="d-flex mt-16  ga-4 justify-space-around flex-column flex-lg-row">
      <AboutItem
      :icon="boxIcon"
        heading="Tsh. 10,000,000"
        text="Average daily volume"
      />
      <AboutItem
      :icon="boxIcon"
        heading="Security standards"
        text="All data is encrypted."
      />
      <AboutItem
        :icon="supportIcon"
        heading="24/7"
        text="Customer Support."
      />
    </div>
    <v-row class="mt-16">
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <WhyUsCard
          :heading="card.heading"
          :description="card.description"
        />
      </v-col>
    </v-row>
  </template>
  <script setup>
 import boxIcon from '../assets/Asset 67@3x.png'
 import  supportIcon from '../assets/Asset 66@3x.png'

</script>
  <script>
  import  WhyUsCard from './Cards/WhyUsCard.vue';


  import AboutItem from './AboutItem.vue';
  export default {
    name:'AboutFeatures',
    data() {
    return {
      cards: [
        { heading: "4.8", description: "Star Rating" },
        { heading: "300k+", description: 'Active Customers\nTanzania'},
        { heading: "4M+", description: "Investment raised" },
        { heading: "2M+", description: 'Investment\nTransacted' }
      ]
    };
  },
    components:{
      AboutItem,
      WhyUsCard
    }
   
    }
  
  </script>
  
  <style scoped>
  .custom-component {
    padding: 16px;
  }
  
  .content {
    text-align: right;
  }
  </style>
  