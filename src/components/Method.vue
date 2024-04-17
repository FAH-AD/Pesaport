<template>
  <h2 class="method-head" v-if="!showHowToInvest">
    You can now invest via multiple <br /> payment providers
  </h2>
  <v-row class="justify-center align-center flex-column flex-lg-row ga-4">
    <v-carousel v-if="!showHowToInvest" hide-delimiters continuous max-width="400" height="120">
      <template v-if="isMobile">
        <v-carousel-item v-for="(item, index) in items1" :key="index">
          <v-col class="payment-method align-center justify-center d-flex flex-column flex-lg-row ga-4 ga-lg-16" cols="12" lg="12">
            <div  class="d-flex flex-column">
              <img :src="item.image" class="rounded-image" @click="openHowToInvest(index, i)"></img>
              <div class="text-center">{{ item.text }}</div>
            </div>
          </v-col>
        </v-carousel-item>
        
      </template>
      <template v-else>
        <v-carousel-item v-for="(item, index) in items" :key="index">
          <v-col class="payment-method align-center justify-center d-flex flex-column flex-lg-row ga-4 ga-lg-16" cols="12" lg="12">
            <div class="d-flex flex-column" v-for="(method, i) in item" :key="i">
              <img :src="method.image" class="rounded-image" @click="openHowToInvest(index, i)"></img>
              <div class="text-center">{{ method.text }}</div>
            </div>
          </v-col>
        </v-carousel-item>
      </template>
    </v-carousel>
    <v-col v-if="showHowToInvest" cols="12">
      <v-icon class="back-icon" @click="closeHowToInvest()">mdi-arrow-left</v-icon>
      <HowtoInvest :app_heading="heading[selectedItem]" :app_subheading="subHeading[selectedItem]"
        :images1="images1[selectedItem] || []" :points1="points1[selectedItem] || []"
        :images2="images2[selectedItem] || []" :points2="points2[selectedItem] || []" />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
import image1 from '../assets/Asset 75@2.5x.png';
import image2 from '../assets/hero2.png';
import image3 from '../assets/Asset 50@3x.png';
import image4 from '../assets/Pesaport_signin.png';
import method1 from '../assets/payment2.png';
import method2 from '../assets/payment3.png';
import method3 from '../assets/payment1.png';
import method4 from '../assets/payment5.png';
import method5 from '../assets/payment7.png';

const items = [
  [
    { image: method1, text: 'Tigopesa' },
    { image: method2, text: 'M-pesa' },
    { image: method3, text: 'Airtel money' },
    { image: method4, text: 'Azam pesa' },
    { image: method5, text: 'Bank' }
  ]
];
const items1 = [
  
    { image: method1, text: 'Tigopesa' },
    { image: method2, text: 'M-pesa' },
    { image: method3, text: 'Airtel money' },
    { image: method4, text: 'Azam pesa' },
    { image: method5, text: 'Bank' }
  
];

let selectedItem = ref(null);
let showHowToInvest = ref(false);

const openHowToInvest = (index, i) => {
  selectedItem.value = index;
  showHowToInvest.value = true;
};

const closeHowToInvest = () => {
  showHowToInvest.value = false;
};

const heading = [
  "Using Tigopesa",
  "Using M-Paise"
];

const subHeading = [
  "Using Tigopesa USSD",
  "Using M-Paise USSD"
];

const images1 = [
  [
    { src: image1 },
    { src: image2 }
  ]
];

const images2 = [
  [
    { src: image3 },
    { src: image4 }
  ]
];

const points1 = [
  [
    { title: "Just Login into the Pesaport App", subtitle: "Subtitle 1" },
    { title: "Click invest button", subtitle: "Subtitle 2" },
    { title: "Fill the windows appears with the details", subtitle: "Subtitle 3" },
    { title: "In few second you will get Push notification from Tigopesa telling to confirm the payment to pesaport " },
    { title: " Enter your pin to confirm " },
    { title: " The payment should be successYou should be able to see the investment on the portal" }
  ]
];

const points2 = [
  [
    { title: "Dial *150*01#" },
    { title: "Select number 4. “Lipa bili” from the menu" },
    { title: "Select number 3 “Ingiza numba ya kampuni”" },
    { title: "Enter number “ 767777 ” " },
    { title: " Enter Investment account number for the product you invest as “ Kunbukumbu number”" },
    { title: " Enter the amount you want to deposit on “Weka kiasi”" },
    { title: " Confirm the payment by entering your pin" },
    { title: "  The payment should be success" }
  ]
];

const isMobile = ref(false);

// Check if the viewport is mobile
if (window.innerWidth <= 768) {
  isMobile.value = true;
} else {
  isMobile.value = false;
}

// Update isMobile when window is resized
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
});

</script>

<style>
.back-icon {
  position: absolute;
  top: 7%;
}

.method-head {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem
}

.rounded-image {
  border-radius: 50%;
  width: 70px;
  height: 70px;
}

.text-center {
  text-align: center;
}

.payment-method:hover {
  cursor: pointer;
}
</style>
