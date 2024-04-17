<template>
    <v-card color="sidebarbg" elevation="0" class="ma-2 card pa-4">
      <v-card-title class="text-h5">Your networth overview</v-card-title>
      <v-card-text>
        <div class="text-body-2">Total net revenue you have generated.</div>
        <div class="overview"> <span>Overview</span> </div>
        <div class="d-flex flex-wrap justify-space-between mt-4">
          <div>
            <div class="text-head ">107,000 <span class="text-caption">TZS</span></div>
            <div class="text-caption">TOTAL WORTH</div>
           
          </div>
          <div class="text-right">
        <div class=" color-class ms-2">↑ 0.0000%</div>
           
            <div class="text-caption">GROWTH</div>
          </div>
        </div>
        <div class="d-flex flex-wrap justify-space-between mt-4">
          <div>
            <div class="text-head  ">0 <span class="text-caption">TZS</span></div>
            <div class="text-caption">PROFIT GAIN</div>
          </div>
          <div class="text-right">
            
            <div class="text-head">333</div>
            <div class="text-caption">UNITS</div>
          </div>
        </div>
        <div class="text-right mt-4">
          
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name:'OverviewCard',
  };
  </script>
  
  <style scoped>
  .card{
    box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -webkit-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -moz-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  }
  .overview{
    border-bottom: 1px solid ;
    padding: 5px;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .text-head{
    font-size: 1.1rem;
  }
  .color-class{
    color:#ffc800;
  }
  .overview>span{
    border-bottom: 2px solid #ffc800;
    margin-left: 15px;
    padding: 5px;
    color:#ffc800;
    
  }
  .ms-2 {
    margin-left: 2px;
  }
  </style>
  