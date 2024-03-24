<template>
    <div class="testimonial">
      <div class="testi-container">

     
      <v-row class="">
        <v-col cols="6">
          <!-- Text aligned at left -->
          <div class="text-left">
            What they Say
          </div>
        </v-col>
        <v-col cols="6">
          <!-- Icon aligned at right -->
          <div class="text-right">
           <img src="../assets/Asset 6@3x.png" style="width:90px"/>
          </div>
        </v-col>
      </v-row>
      
      <!-- Carousel -->
      <v-carousel show-arrows="hover" hide-delimiters ref="carousel">
        <!-- Carousel items -->
        <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <div class="testi-desc">{{ item.text }}</div>
          <v-divider class="border-opacity-50 mt-8":thickness="2"></v-divider>
          <div class='d-flex ga-6 align-center mt-4'>
            <img :src="item.icon"/>
            <div class="d-flex flex-column">
              <p class="testi-name">{{ item.name }}</p>
              <p class="test-desg">{{ item.designation }}</p>
            </div>
          </div>
          
          <v-row>
           
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    </div>
  </template>
  <script setup>
 import icon1 from '../assets/Asset 73@3x.png'
 import icon2 from '../assets/Asset 54@3x.png'

</script>
  <script>
  
  
  export default {
  
    data() {
      return {
        carouselItems: [
          { text: 'Pesaport has helped me get extra investments opportunity in order and make sure I am never miss on any investment opportunity again. I would definitely recommend them to anyone who is struggling with their finances.',icon:icon1,name:'Nyamatoro Nyamayao',designation:'Product Manager at Swift' },
          { text: 'Pesaport has helped me get extra investments opportunity in order and make sure I am never miss on any investment opportunity again. I would definitely recommend them to anyone who is struggling with their finances.',icon:icon2,name:'Kayode Lawal',designation:'Product Manager at Swift' },

          { text: 'Pesaport has helped me get extra investments opportunity in order and make sure I am never miss on any investment opportunity again. I would definitely recommend them to anyone who is struggling with their finances.',icon:icon1 ,name:'Alisa',designation:'Product Manager at Swift'},

        ]
      };
    },
    methods: {
      changeItem(index, direction) {
        if (direction === 'prev') {
          if (index > 0) {
            this.$refs.carousel.prev();
          }
        } else if (direction === 'next') {
          if (index < this.carouselItems.length - 1) {
            this.$refs.carousel.next();
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .text-left {
    text-align: left;
    font-size: 2rem;
    font-weight: 800;
    color: rgb(var(--v-theme-secondary));
  }
  .testimonial{
    background-image: url('../assets/bg-testi.png');
    background-size: 1000px 800px;
    padding-top: 14rem;
    margin-top:4rem
    
  }


  .testi-desc{
    font-size: 1.5rem;
  }
  .testi-name{
    color: rgb(var(--v-theme-secondary));
    font-size: 2rem;
    font-weight: bold;
  }
  .testi-desg{
    font-size: 1.5rem;
    font-weight: bold;
    color:rgb(115, 115, 151)
  }
  .text-right {
    text-align: right;
  }

  @media (max-width: 600px) {
    .testimonial{
    background-image: url('../assets/bg-testi.png');
    background-size: 300px 400px;
    padding-top: 6rem;
    margin-top:4rem
    
  }
  .testi-desc{
    font-size: 1rem;
  }
  }
  </style>
  