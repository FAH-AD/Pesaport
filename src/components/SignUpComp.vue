<template>
    <v-container>
      <RouterLink to="signIn">

     
      <img
     
        src="../assets/Asset 9@3x.png"
        class="back-icon"
        style="width: 60px"
      />
    </RouterLink>
  
      <v-switch
        v-model="darkMode"
        color="primary"
        class="mt-5 login-switch"
        @change="toggleTheme()"
      >
        <template v-slot:thumb>
          <v-icon>{{
            darkMode ? "mdi-weather-sunny" : "mdi-weather-night"
          }}</v-icon>
        </template>
        <template v-slot:track>
          <v-icon>{{
            darkMode ? "mdi-moon-waning-crescent" : "mdi-white-balance-sunny"
          }}</v-icon>
        </template>
      </v-switch>
      <v-row
        class="d-flex justify-space-around flex-column flex-lg-row ga-8 ga-lg-0 align-center"
      >
        <!-- Left side: Image -->
        <div>
          <img src="../assets/Asset 68@3x.png" class="welcome-img" alt="Image" />
        </div>
  
        <!-- Right side: Text, Text Fields, and Sign Up Button -->
        <div class="d-flex flex-column align-center ga-6">
          <!-- Text -->
          <div>
            <p class="welcome-head text-center">Sign Up</p>
           
          </div>
          <!-- Text Fields -->
          <div class="d-flex flex-column align-center ga-1">
            <v-text-field label="Name" variant="outlined"  dense class="w-text-field"></v-text-field>
            <v-text-field label="Email" variant="outlined" dense class="w-text-field"></v-text-field>
            <v-text-field label="Password" variant="outlined" dense class="w-text-field"></v-text-field>
            <v-text-field label="Confirm Password" variant="outlined"  dense class="w-text-field"></v-text-field>
            <v-text-field label="Phone Number" variant="outlined" dense class="w-text-field"></v-text-field>
           
            <v-btn color="secondary w-btn py-2 px-8" @click="handleSignUp"
              ><span class="btn-text">Sign Up</span></v-btn
            >
          </div>

          <p class="text-center">Or continue with your social profile</p>
  
  <!-- Icons -->
  <v-row class="d-flex justify-center ga-4">
    <img
      :src="darkMode ? fligt : fdark"
      style="width: 40px; height: 35px"
    />

    <img
      :src="darkMode ? gligt : gdark"
      style="width: 40px; height: 35px"
    />

    <img
      :src="darkMode ? xligt : xdark"
      style="width: 40px; height: 35px"
    />
  </v-row>

  <RouterLink class="link-text" to="/signIn">
  <p class="text-center"><span class="logo">if you have an account </span> signIn</p>
</RouterLink>
        
          </div>
  
          
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import fdark from "../assets/f-icon-dark.png";
  import gdark from "../assets/g-icon-dark.png";
  import xdark from "../assets/x-icon-dark.png";
  import fligt from "../assets/Asset 4@about.png";
  import gligt from "../assets/google.png";
  import xligt from "../assets/x.png";
  import { useTheme } from "vuetify";
  import { ref } from "vue";
  const darkMode = ref(false);
  const theme = useTheme();
  const toggleTheme = () => {
    theme.global.name.value = darkMode.value ? "customDark" : "customLight";
  
    console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
  };
  </script>
  <script>
  export default {
   
    methods: {
      goBack() {
        this.$router.go(-1); // Go back to the previous page
      },
      handleSignUp() {
        // Handle sign up logic
      },
      handleSignIn() {
        // Handle sign in logic
      }
    },
  };
  </script>
  <style scoped>
  .back-icon:hover {
    cursor: pointer;
  }
  .w-btn {
    height: 45px !important;
    font-style: normal !important;
    width: 360px;
  }
  .welcome-head {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .welcome-img {
    max-width: 500px;
    max-height: 500px;
  }
  .link-text{
    text-decoration: none;
    color: var(--v-theme-textColor);
  }
  .logo {
    font-size: 16px;
    color: #ffc800;
    font-weight: 400;
  }
  .login-switch {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .btn-text {
    text-transform: none !important;
  }

  .w-text-field{
    width: 350px;
    
  }
  .v-text-field--outlined fieldset {
    border-color: blue !important

  }
  @media (max-width: 600px) {
  .welcome-img {
    max-width: 300px;
    max-height: 500px;
  }
  .btn-text {
    text-transform: inherit;
    font-size: 13px;
  }

  .w-btn {
    width: 300px;
  }
  .login-switch {
    position: absolute;
    top: 5px;
    right: 20px;
  }
}

@media (max-width: 350px) {
  .welcome-img {
    max-width: 250px;
    max-height: 500px;
  }

  .w-btn {
    width: 250px;
  }
  .btn-text {
    text-transform: inherit;
    font-size: 10px;
  }
}
</style>

  