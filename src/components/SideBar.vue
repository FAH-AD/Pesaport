<template>
  <div>
    <!-- Top Navbar for Mobile View -->
    <v-app-bar app color="sidebarbg" class="d-flex justify-space-around ga-10 px-5"  v-if="isMobile">
      <div class="d-flex logo-phone align-center ga-2" >
      
      <img :src="Logo" class="logo" style="width: 20px" />
      <div class="d-flex align-center">
       <p class="logo-text1">Pesa</p>
      <p class="logo-text2">port</p>
      </div>
      </div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sidebar Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      class="navigation ma-4 pa-2 pt-8"
      app
      color="sidebarbg"
      :permanent="isDesktop"
    >
      <!-- Sidebar Header -->
      <v-list-item>
        <div class="d-flex align-center ga-2">
          <img :src="Logo" class="logo" style="width: 20px" />
          <div class="d-flex align-center">
            <p class="logo-text1">Pesa</p>
            <p class="logo-text2">port</p>
          </div>
        </div>
      </v-list-item>

      <!-- Sidebar Menu -->
      <div class="d-flex flex-column ga-12 justify-space-between">
        <v-list dense>
          <v-list-item v-for="(item, index) in menuItems" :key="index" link>
            <div class="d-flex ga-4">
              <img :src="item.icon" style="width: 20px; height: 20px;" />
              <Router-link class="router-text" :to="item.link" :class="{ active: isActive(item.link) }" exact>
                <v-list-item-title class="list-text">{{ item.text }}</v-list-item-title>
              </Router-link>
            </div>
          </v-list-item>
        </v-list>

        <!-- Sidebar Settings -->
        <div class="d-flex flex-column">
          <v-list-item link>
            <Router-link class="router-text" :class="{ active: isActive('/dashboard/calculator') }" to="/calculator">
              <div class="d-flex ga-4">
                <img :src="icon8" style="width: 20px; height: 20px;" />
                <v-list-item-title class="list-text">Calculator</v-list-item-title>
              </div>
            </Router-link>
          </v-list-item>
          <v-list-item link>
            <Router-link class="router-text" :class="{ active: isActive('/dashboard/settings') }" to="/dashboard/settings">
              <div class="d-flex ga-4">
                <img :src="icon7" style="width: 20px; height: 20px;" />
                <v-list-item-title class="list-text">Settings</v-list-item-title>
              </div>
            </Router-link>
          </v-list-item>

          <!-- Sidebar Logout -->
          <v-list-item link>
            <router-link class="router-text" to="/signIn">
              <div class="d-flex ga-4">
                <img :src="icon9" style="width: 20px; height: 20px;" />
                <v-list-item-title class="list-text">Logout</v-list-item-title>
              </div>
            </router-link>
          </v-list-item>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from "vuetify";
import { useRoute } from 'vue-router';
import Logo from "../assets/yellow-logo.png";

import icon1 from '../assets/side1.png'
import icon2 from '../assets/side2.png'
import icon3 from '../assets/side3.png'
import icon4 from '../assets/side4.png'
import icon5 from '../assets/side5.png'
import icon6 from '../assets/side6.png'
import icon7 from '../assets/side7.png'
import icon8 from '../assets/calculator-solid.svg'
import icon9 from '../assets/side8.png'


let drawer = ref(false); 
const theme = useTheme();
const darkMode = theme.global.current.value.dark;
const route = useRoute();

const menuItems = [
  { text: "Dashboard", icon: icon1, link: '/dashboard/home' },
  { text: "Investments", icon: icon2, link: '/dashboard/investments' },
  { text: "Transactions", icon: icon3, link: '/dashboard/transactions' },
  { text: "Accounts and Cards", icon: icon4, link: '/dashboard/accounts' },
  { text: "Support", icon: icon5, link: '/dashboard/dashsupport' },
  { text: "Profile", icon: icon6, link: '/dashboard/profile' },
];



if(window.innerWidth>600){
  drawer=true
}

const isMobile = computed(() => {
  return window.innerWidth <= 600; 
});

const isDesktop = computed(() => {
  return window.innerWidth > 1024; 
});

const isActive = (path) => {
 
 return route.path === path;

};
console.log(isActive)
</script>

<style>
.logo-text1{
font-weight: bold;
color: rgb(var(--v-theme-textColor));
}
.logo-text2{

color: rgb(var(--v-theme-textColor));
}
.logo-phone{
  margin-right: 40%;
}

.title {
  margin-left: 16px;
}
.navigation {
  border-radius: 10px;
  height: 95vh !important;
  background-color: var(--v-theme-sidebarbg);
  border: 1px solid #ffc800;
}
.list-text {
  font-size: 14px;
}
.router-text {
  text-decoration: none;
  color: rgb(var(--v-theme-textColor));
}
.active {
  color: #ffc800 ; 
}
</style>
