<template>
    <v-container>
      <v-row class="d-flex flex-column">
        <v-col>

            <h1 class="text-center my-8">
               How to Invest using <br/> Pesaport
            </h1>

            <h2 class="invest-heading mt-18">
                {{ app_heading }}
            </h2>
          <InvestComp
            :images="images1"
            :points="points1"
            :reverseDirection="reverseDirection"
          />
        </v-col>

        <h2 class="invest-heading mt-16">
                {{ app_subheading }}
            </h2>
        <InvestComp
            :images="images2"
            :points="points2"
            :reverseDirection="reverseDirection2"
          />
      </v-row>
    </v-container>
  </template>
  
  
  <script>
  import InvestComp from "./InvestComp.vue";
  
  export default {
    components: {
      InvestComp
    },

    props: {
    images1: {
      type: Array,
      required: true
    },
   
    app_heading: {
      type: String,
      required: true
    },
    app_subheading: {
      type: String,
      required: true
    },
    images2: {
      type: Array,
      required: true
    },
    points1: {
      type: Array,
      required: true
    },
    points2: {
      type: Array,
      required: true
    },
    
  },
    data() {
      return {
       

        reverseDirection: false,
        reverseDirection2:true
      };
    }
  };
  </script>
  <style scoped>
  .invest-heading{
    text-align:center;
    margin-top:5rem !important;
    margin-bottom:2rem
    
  }
</style>