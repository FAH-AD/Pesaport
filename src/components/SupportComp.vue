<template>
    <v-container class="support-comp">
      <div class="d-flex flex-column ga-6 flex-lg-row align-center align-lg-start">
        <!-- Left part -->
        <div  class="d-flex flex-column ga-8">
       
          <SupportCard
            :icon="icon1"
            heading="Customer Support"
            description="24 hours a day, 7 days a week."
          />
          <SupportCard
          :icon="icon2"
            heading="Email Address"
            description="help@pesaport.co.tz"
          />
          <SupportCard
          :icon="icon3"
            heading="Whatsapp Chat"
            description="we are online 24/7 "
          />
        </div>
  
        <!-- Right part -->
     
          <v-col cols="12" lg="6" class="form-container">
           
           
              <v-form @submit.prevent="submitForm">
                <!-- Full Name -->
                <v-text-field v-model="fullName" bg-color="grey-darken-1" variant="solo-filled" label="Full Name"></v-text-field>
                <!-- Email Address -->
                <v-text-field v-model="email" bg-color="grey-darken-1" variant="solo-filled" label="Email Address"></v-text-field>
                <!-- Leave Us a Message -->
                <v-textarea v-model="message" variant="solo-filled" bg-color="grey-darken-1"  class="text-field"  label="Leave Us a Message"></v-textarea>
  
                <div class="d-flex flex-column flex-lg-row align-lg-start align-center">
                  <!-- Phone Number -->
                  <v-col cols="12" lg="6">
                    <v-text-field v-model="phoneNumber" bg-color="grey-darken-1" variant="solo-filled" label="Phone Number"></v-text-field>
                  </v-col>
                  <!-- Send Button -->
                 
                    <v-btn class="form-btn mt-3" color="secondary" @click="submitForm">Send</v-btn>
                 
                </div>
              </v-form>
           
          </v-col>

         
      
      </div>
      <div class="b-text">
Registration: Pesaport, Company No. 123456789 LLC 2023, having its registers address at 10th floor,
Mwanga Tower, Bagamoyo Road, P.O.Box 0000 Dar es salaam 
          </div>
    </v-container>
  </template>
  
  <script setup>
import icon1 from '../assets/Asset 66@3x.png'
import icon2 from '../assets/Asset 58@3x.png'
import icon3 from '../assets/Asset 59@3x.png'
</script>
  <script>
  import SupportCard from './Cards/SupportCard.vue';
  
  export default {
    components: {
      SupportCard
    },
    data() {
      return {
        fullName: '',
        email: '',
        message: '',
        phoneNumber: ''
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted!');
      }
    }
  };
  </script>
  <style>
  .support-comp{
    margin-top: 2rem;
  }
  .form-container{
    background-color: #dddbdb;
    padding: 50px 30px;
    width: auto;
    border-radius: 15px;
  }
  .b-text{
    margin-top: 4rem;
    text-align: center;
    color: var(--v-theme-textColor);
    font-weight: 500;
  }
  .form-btn{
    height: 50px !important;
   
    border-radius: 10px !important;
   padding: 10px 50px;
  }
  @media (max-width: 600px) {
    .form-container{
    background-color: #dddbdb;
    padding: 20px 15px;
    width: 300px
  }
  }
  @media (max-width: 300px) {
    .form-container{
    background-color: #dddbdb;
    padding: 20px 15px;
    width: 250px
  }
  }
</style>