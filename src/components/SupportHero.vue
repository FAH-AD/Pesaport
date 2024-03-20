<template>
    <v-container>
      <div class="d-flex mt-10 mt-lg-0 flex-column ga-4 flex-lg-row align-center justify-space-between" >
        <!-- Left part -->
        <div class="d-flex left-part l   flex-column  ga-5" >
          <p class=" heading ">Can’t find <br/> what you need?</p>
        
          <p  class=" desc mt-4">
            Our customer care team is here.
          </p>
         
          
        </div>
        <!-- Right part -->
        <img src="../assets/Asset 50@3x.png"  style="max-width: 600px; max-height: 600px;" alt="Image" class="right-img" >
      </div>
    </v-container>
  </template>
  <script setup>

  </script>
  
  <script >
  
  export default {
    name: 'SupportHero',
   
  };
  </script>
  
  <style scoped>
  .heading {
    font-size: 4.5rem;
    white-space: nowrap;
    font-weight: bold;
    line-height: 4.2rem;
    color: var(--v-theme-textColor);
  }
  .ndesc{
    font-size: 14px;
  }
  
  .left-part{
    max-width: 500px;
    margin-top: 6rem;
  }
  .sub-heading {
    font-size: 2.7rem;
    line-height: 2.9rem;
    white-space: nowrap;
  }
  
  
  .desc {
    white-space: nowrap;
    font-size: 2rem;
    color:#ffc800;
  }
  
  .custom-btn {
    height: 40px !important;
    width: 40% !important;
  }
  
  @media (max-width: 600px) {
    .right-img {
      width: 270px;
    }
  
    .heading {
      font-size: 2.8rem;
      white-space: wrap;
      text-align: center;
      line-height: 3rem;
    }
  
    .sub-heading {
      font-size: 2.4rem;
      line-height: 2.6rem;
      text-align: center;
      white-space: wrap;
    }
  
    .desc {
      white-space: wrap;
      text-align: center;
    }
  
    .custom-btn {
      width: 60% !important;
      font-size: 12px;
    }
  
    .left-part {
      align-items: center;
      margin-top: 3rem;
    }
  }
  </style>
  