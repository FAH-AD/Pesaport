<template>
    <v-container fluid class="custom-container">

      <div class="background-image d-flex align-start flex-column ">
       
        <img :src="icon" class="services-icon"></img>
      
        <h2 class="sc-heading">{{ heading }}</h2>
    
        <p class="sc-description">{{ description }}</p>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ServiceCard',
    props: {
      
      icon: String, 
      heading: String, 
      description: String 
    }
  };
  </script>
  
  <style scoped>
 
  .services-icon{
    width: 60px;
  }
  .background-image {
   background-image: url(../../assets/service-card.png);
   background-size: cover;
   width: 500px;
   height: 350px;
   padding: 50px;
   border-radius: 30px;
  }
  

  
  .sc-heading {
    text-align: left;
    font-size: 24px;
    margin-top: 40px;
 
  
  }
  
  .sc-description {
    text-align: left;
    font-size: 16px;
    margin-top: 10px;

   
  }
  @media (max-width: 600px) {
    .background-image {
 
   width: 340px;
   padding: 30px 20px;
   
  
  }
  .sc-heading {
    
    margin-top: 20px;
}


}
  @media (max-width: 350px) {
    .background-image {
 
 width: 250px;
 padding: 30px 20px;
 

}

.sc-description {
    text-align: left;
    font-size: 12px;
    margin-top: 10px;

   
  }
  }

  </style>
  