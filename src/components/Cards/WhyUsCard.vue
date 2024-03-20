<template>
    <v-card color="cardColor" class="wu-card d-flex ga-4 justify-center flex-column align-center">
      <v-card-title>
        <h2 class="wu-heading mt-10">{{ heading }}</h2>
      </v-card-title>
      <v-card-text class="wu-desc">{{ description }}</v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      heading: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .wu-card{
    height: 180px;
    border-radius: 20px;
    box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -webkit-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -moz-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  }
  .wu-heading {
    font-size: 2.5rem;
  }
  .wu-desc{
    color:#ffa000;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    white-space:pre
  }

  </style>
  