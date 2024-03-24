
<template>
    <div class="container">
      <StatsCard v-for="item in items" :key="item.id" :color="item.color" :text="item.text" :heading="item.heading" :smallText="item.smallText" />
    </div>
  </template>
  
  <script setup>
 import StatsCard from "./Cards/StatsCard.vue";

  
  const items = [
    { id: 1, color: 'yellow', text: 'Total Investment', heading: 'TSH. 2,340,000', smallText: 'USD 927.91 In past 3 month' },
    { id: 2, color: 'green', text: 'Total Earning', heading: 'TSH. 340,000', smallText: 'USD 134.82 4.5 Profit This week' },
    { id: 3, color: 'red', text: 'Total Withdraw', heading: 'TSH. 540,000', smallText: 'USD 214.13 Withdraw Now' },
  ];
  </script>
  <script>


 export default {
    name:'Stats',
    components:{
      StatsCard
    }
  }
</script>
  
  <style>
  .container {
    padding: 20px;
    margin-left: 8px;
    display: flex;
    gap: 1rem;
    justify-content: center;
   
  }
  </style>
  