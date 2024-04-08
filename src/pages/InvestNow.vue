<template>
    <div class="px-4 pa-4 pa-lg-7 px-lg-16">
      <Navbar />
<Method/>
     </div>
  
   
    <Footer />
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
 import Method from "../components/Method.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    name: "About",
    components: {

      Navbar,
      Method
       
    },
    data() {
      return {
        reverse: true,
      };
    },
  };
  </script>
  
  <style>
  body {
    font-family: "Poppins", sans-serif;
  }
  </style>
  