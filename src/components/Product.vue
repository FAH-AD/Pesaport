<template>
    <v-container class="product-container d-flex flex-column align-center align-lg-start " fluid>
      <h2 class="text-lg-left text-center product-heading px-lg-9 px-0 mb-2">Our Products</h2>
      <v-row justify="center" class="d-flex flex-column c-product align-center flex-lg-row">
        <v-col  v-for="(product, index) in products" :key="index">
          <ProductCard
           
            :heading="product.heading"
            :icon="product.icon"
            :description="product.description"
           

            @button-click="handleButtonClick"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script setup>
import icon1 from '../assets/Asset 2@product.png'
import icon2 from '../assets/Asset 3@product.png'
import icon3 from '../assets/Asset 5@product.png'
</script>
  <script>
 import ProductCard from './Cards/ProductCard.vue';
  
  export default {
    components: {
      ProductCard
    },
    data() {
    return {
      products: [
        {
         
          heading: "Pamoja Fund",
          icon: icon1,
          description: "The fund is designed to provide an alternate investment opportunity for investors to park their funds for short, medium to long-term duration at competitive returns and liquidity",
         
        },
        {

          heading: "Mtoto Fund",
          icon: icon2,
          description: "An open–ended balanced fund suited to investors seeking long-term capital growth through exposure to a broadly diversified portfolio of listed equities and debt instruments.",
          
        },
        {
  
          heading: "Pesa Fund",
          icon: icon3,
          description: "The fund is designed to provide an alternate investment opportunity for investors to park their funds for short, medium to long-term duration at competitive returns and liquidity.",
       
        }
      ]
    };
},
    methods: {
      handleButtonClick() {
        // Handle button click event here
        console.log("Button clicked!");
      }
    }
  };
  </script>
  
  <style scoped>
  .product-container{
    overflow-x: auto;
  }
  .product-heading{
    font-size: 2.5rem;
    font-weight: 800;
  }

.c-product{
  flex-wrap: nowrap;
}
@media (max-width: 800px) {
  .product-container{
  margin-top: 4rem;
}
}
  </style>
  