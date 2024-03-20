<template>
  <Stats/>
  <div class="container">
    <!-- Left Part -->
    <v-col cols="12" lg="8" class="left-part">
      <div class="box">
        <div class="d-flex justify-space-between align-center">
          <p>{{ leftHeading }}</p>
          <div class="n-dropdown">
            <v-select
              theme="light"
              density="compact"
              label="Recently"
              :items="['1 Day', '2 Days', 'week']"
              variant="outlined"
            ></v-select>
          </div>
        </div>
        
        <hr>
        <div class="description">
          <div
            v-for="(line, index) in leftDescription"
            :key="index"
            class="flex-column flex-lg-row d-flex ga-2 mt-4"
            :class="{ 'bg-color': index % 2 === 0 }"
            @click="openModal(line)"
          >
            <p class="heading-color">{{ line.heading }}</p>
            <p class="notification-text">{{ line.text }}</p>
          </div>
        </div>
      </div>
    </v-col>

    <!-- Right Part -->
    <v-col cols="12" lg="4" class="left-part">
      <div class="box">
        <div class="d-flex justify-space-around align-center">
          <p>{{ rightHeading }}</p>
          <button class="n-btn" @click="openModal(rightHeading)">{{ rightButtonText }}</button>
        </div>
       
        <hr>
        <div>
          <div
            v-for="(line, index) in rightDescription"
            :key="index"
            class="d-flex ga-2 mt-4"
            :class="{ 'bg-color': index % 2 === 0 }"
            @click="openModal(line)"
          >
            <p class="heading-color">{{ line.heading }}</p>
          </div>
        </div>
      </div>
    </v-col>

    <!-- Modal -->
    <v-dialog v-model="modalOpen" max-width="600">
      <v-card color="white"  >
       
          <v-icon @click="modalOpen = false" class="close-btn">mdi-close</v-icon>
    
        <v-card-text>
          <div class="d-flex flex-column py-8  align-center ga-4" >
            <!-- Left Side -->
            <div class="d-flex align-center flex-column">
             <img src="../assets/Asset 77@about.png" style="width: 70px;"/>
              <div class=" text-center ga-8 d-flex flex-column">
                <h3>Unable to proceed</h3>
                <p>We are sorry we are unable to processs your request <br/> please make sure to finish your kyc first</p>
                <p>If you need help please contact us</p>
              </div>
            </div>
            <!-- Right Side -->
            <v-btn color="secondary" @click="closeModal">Finish KYC</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Stats from './Stats.vue';
const leftHeading = 'Recently Activities';
const leftButtonText = 'Left Button';
const leftDescription = [
  { heading: 'New Ipo offerings:', text: 'Users are exploring and investing in newly available IPOs, executing buy orders to acquire shares of promising companies ' },
  { heading: 'Earnings Reports Analysis:', text: 'Users are exploring and investing in newly available IPOs, executing buy orders to acquire shares of promising companies ' },
  { heading: 'New IPO offerings:', text: 'Users are exploring and investing in newly available IPOs, executing buy orders to acquire shares of promising companies ' },
];

const rightHeading = 'Notifications';
const rightButtonText = 'View All';
const rightDescription = [
  { heading: 'New IPO offerings'},
  { heading: 'New IPO offerings' },
  { heading: 'New IPO offerings' },
  { heading: 'New IPO offerings'},
  { heading: 'New IPO offerings' },
  { heading: 'New IPO offerings' },
];

const modalOpen = ref(false);

const openModal = (line) => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};

</script>

<style scoped>
.container {
  display: flex;
  align-items: start;
}
.heading-color {
  color: green;
  font-size: 13px;
  text-wrap: nowrap;
}
.n-dropdown {
  width: 150px;
}
.box {
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(var(--v-theme-sidebarbg));
}
.button {
  margin-bottom: 10px;
}
.notification-text {
  font-size: 12px;
}
.hr {
  margin: 10px 0;
  border: 0;
  border-top: 1px solid #ccc;
}
.description {
  margin-top: 10px;
}
.n-btn {
  color: rgb(var(--v-theme-primary));
}
.bg-color {
  background-color: rgb(var(--v-theme-textBg));
}
.left-side {
  display: flex;
  align-items: center;
}
.icon {
  font-size: 40px;
  margin-right: 20px;
}
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
