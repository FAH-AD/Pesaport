<template>
    <div class="full-width-component">
      <div class="content">
        <h2 class="m-heading ">Our Mission</h2>
        <p class="text-center m-desc">Today, Pesaport stands as a pioneer in the investment ecosystem, offering a comprehensive product suite that encompasses 
the largest digital asset exchange</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  .full-width-component {
    position: relative;
    width: 100%;
    background-color: #ffffff; 
    margin-top:3rem;
   
    border-bottom: 7px solid #ffc800;
  }
  
  .content {
    padding: 40px 70px;
  }
  .m-desc{
    color: black;
  }
 .m-heading{
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    color: black;
    margin-bottom: 10px;
 }
 @media (max-width: 600px) {
    .content {
    padding: 40px 20px;
  }

 }
  </style>
  