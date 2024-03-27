<template>
  <v-container class="ma-0 pa-0  cal-container  ">
   

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
      class="d-flex flex-nowrap justify-space-around  flex-column flex-lg-row ma-0 ga-8 ga-lg-0 align-center"
    >
   <v-col class="pa-0" >
    <v-card class=" pa-8 pb-10 d-flex flex-column align-center">
    <v-card-title>
        <v-img src="../assets/yellow-logo.png" height="30"></v-img>
      <h2 class="text-center">Investment Calculator</h2>
    </v-card-title>
    <v-card-text class="text-center cal-desc">This tool helps you to calculate the wealth gain and expected returns for your investment. You can get a rough estimate on the maturity amount for any investment plan, based on a projected return rate and Period.</v-card-text>
    <img src="../assets/Pesaport_signin.png" class="cal-img" ></img>
    <div class="d-flex flex-column align-center" >
      <Router-link  to="/"
      >
      <v-btn variant="outlined"  class="cal-btn" >    <v-icon>mdi-arrow-left</v-icon> Go back to Dashboard</v-btn>
    </Router-link>

      <p>© 2024 Pesaport LTD.</p>
    </div>
  </v-card>
</v-col>

     

   <v-col cols="12" lg="6" >
      <Calculation/>
    </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
 import Calculation from './Calculation.vue';
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

<style scoped>

.back-icon:hover {
  cursor: pointer;
}
.cal-btn{
  background-color: white !important;
  color: black;
  font-size: 12px;
  text-transform: none
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
  top: 4px;
  right: 20px;
}
.btn-text {
  text-transform: none !important;
}
.cal-desc{
  font-size: 12px;
}
.cal-img{
  max-width: 400px
}
.custom-card{
 height:1000px;
  overflow-y: auto;

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
