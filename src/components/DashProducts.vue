<template>
    <div>
       
      <v-icon class="ml-6"  @click="goBack">mdi-arrow-left</v-icon>
    
      <Product />
    </div>
  </template>
  
  <script>
  import Product from './Product.vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: "DashProducts",
    components: {
      Product
    },
    setup() {
      const router = useRouter();
  
      const goBack = () => {
        router.go(-1); // Go back to the previous page
      };
  
      return { goBack };
    }
  };
  </script>
