<template>
  <v-container class="ma-0 pa-0  ">
   

    <v-switch
      v-model="darkMode"
      color="primary"
      class="mt-5 custom-switch"
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
      class="d-flex flex-nowrap justify-space-around flex-column flex-lg-row ma-0 ga-8 ga-lg-0 align-center"
    >
   
    <v-card class="custom-card h-screen pa-8 d-flex flex-column align-center" :color="backgroundColor">
    <v-card-title>
        <v-img src="../assets/yellow-logo.png" height="20"></v-img>
      <h2 class="text-center">Investment Calculator</h2>
    </v-card-title>
    <v-card-text class="text-center cal-desc">This tool helps you to calculate the wealth gain and expected returns for your investment. You can get a rough estimate on the maturity amount for any investment plan, based on a projected return rate and Period.</v-card-text>
    <img src="../assets/Pesaport_signin.png" ></img>
    <v-card-actions>
      <v-btn > Go back</v-btn>
    </v-card-actions>
  </v-card>

     

   <v-col cols="6">
      <div class="d-flex flex-column align-center ga-8">
        <!-- Text -->
        <div>
          <p class="welcome-head text-center">Welocme to</p>
          <p class="logo text-center">Pesaport</p>
        </div>
        <!-- Buttons -->
        <div class="d-flex flex-column align-center ga-6">
          <RouterLink to="signIn"
            ><v-btn color="secondary w-btn py-2 px-8" @click="handleButton1"
              ><span class="btn-text"
                >Sign in (if you have an account)</span
              ></v-btn
            >
          </RouterLink>
          <RouterLink to="signUp">
            <v-btn color="secondary  w-btn py-2 px-8" @click="handleButton2"
              ><span class="btn-text">Sign Up (Create an account)</span></v-btn
            >
          </RouterLink>
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
      </div>
    </v-col>
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
  },
};
</script>
<style>
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
.logo {
  font-size: 2.5rem;
  color: #ffc800;
  font-weight: bold;
}
.custom-switch {
  position: absolute;
  top: 10px;
  right: 20px;
}
.btn-text {
  text-transform: none !important;
}
.cal-desc{
  font-size: 12px;
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
  .custom-switch {
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
