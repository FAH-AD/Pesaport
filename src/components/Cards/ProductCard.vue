<template>
    <v-container fluid>
      
     
          <div  class="d-flex pc-container flex-column aligne-center ga-0">
            <img :src="icon" class="background-image"/>
            <div class="content d-flex flex-column align-center ">
              <p class="text-left">{{ description }}</p>
              <v-btn class="product-btn mt-4" color="secondary"  @click="buttonClicked">Invest Now</v-btn>
            </div>
          </div>
       
    </v-container>
  </template>
  
  <script setup>


</script>
  <script>
  export default {
    props: {
      
      heading: String,
      icon: String,
      description: String,
    
    
    },
    methods: {
      buttonClicked() {
    
        this.$emit('button-click');
      }
    }
  };
  </script>
  
  <style scoped>
  .background-image {
    width:300px;;
    
    background-size: cover;
    background-position: center;


  
  }

  .product-icon{
    position: relative;
    bottom: 3rem;
    right: 92px;
  }

  .product-btn{
    height: 25px;
    align-self: flex-start;
    font-size: 10px;
  
  }

  .content {
    position: relative;
   
    left: 50%;
    width: 75%;
    bottom: 8rem;
    transform: translateX(-50%);
    color: white; 
    text-align: center;
  }
  
  .content h1 {
    font-size: 14px; /* Adjust heading font size */
    font-weight: bold;
    color: black;
  }
  
  .content p {
   font-size: 10px;
   line-height: 11px;
   color: black;
  
  }
  @media (max-width: 800px) {
    .content {
    position: relative;
   
    left: 55%;
    width: auto;
    bottom: 8rem;
    width: 230px;
    color: white; 
    text-align: center;
  }
 
}

  @media (max-width: 320px) {
    .background-image {
    width: 270px;;
  }
  
  .content p {
   font-size: 8px;
   color: black;
  
  }
  .content {
    position: relative;
   
   
    bottom: 7rem;
   
  }
  }
  </style>
  