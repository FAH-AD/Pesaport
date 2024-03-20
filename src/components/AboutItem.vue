<template>
    <div class="custom-component d-flex align-center  ga-8" elevation="0" color="transparent" outlined>
     
          <img :src="icon" style="width: 70px; height: 70px;"/>
       
        
          <div class="d-flex flex-column">
            <h3>{{ heading }}</h3>
            <p class="a-desc">{{ text }}</p>
          </div>
       
    
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: String,
      heading: String,
      text: String
    }
  }
  </script>
  
  <style>
  .custom-component {
    padding: 16px;
    
  }
  
  .content {
    text-align: right;
  }
.a-desc{
    color: darkgray;
}
  </style>

  