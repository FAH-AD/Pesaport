
<template>
    <div class="box-component">
      <div class="d-flex align-center ga-2">
      <div class="color-box" :style="{ backgroundColor: color }"> </div>
      <div class="text">{{ text }}</div>
      </div>
    
      <h2>{{ heading }}</h2>
      <p class="box-desc">{{ smallText }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatsCard',
    props: {
      
      color: String, 
      text: String, 
      heading:String,
      smallText: String 
    }
  };
  </script>
  
  <style scoped>
    .box-component {
      text-align: left;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap:0.5rem;
      padding: 20px 30px ;
      width: 450px;
      align-items: start;
      background-color: rgb(var(--v-theme-sidebarbg));
      box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
     -webkit-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
     -moz-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
    }
  
    .color-box {
      width: 10px;
      border-radius: 2px;
      height: 10px;
     
    
    }
    .box-desc{
      color: rgb(var(--v-theme-primary));
      font-size: 12px;
      font-weight: bold;
    }

    @media (max-width: 600px) {
      .box-component {
      
      
      width: 320px;
      
    }

    }
    @media (max-width: 350px) {
      .box-component {
      
      
      width: 250px;
      
    }

    }
  </style>

  