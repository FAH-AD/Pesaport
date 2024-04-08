<template>
  <div
    class="d-flex top-container flex-lg-row flex-column-reverse mt-4 mt-lg-0 align-center justify-space-between px-3 ml-4"
  >
    <div class="search-field">
      <!-- Search Text Field -->
      <v-text-field
        append-inner-icon="mdi-magnify"
        variant="solo"
        dense
        bg-color="fieldColor"
        theme="light"
        density="compact"
        placeholder="Search for anything here"
        v-model="searchText"
      />
    </div>
    <!-- Custom Select Display -->
    <div class="d-flex align-center switch-part ga-5">

      <v-switch
    v-model="darkMode"
    color="primary"
    class="mt-5 top-switch"
    @change="toggleTheme()"
>
    <!-- Use slots within the render function -->
    <template v-slot:thumb="{ attrs }">
        <v-icon v-bind="attrs">
            {{ darkMode ? "mdi-weather-sunny" : "mdi-weather-night" }}
        </v-icon>
    </template>
    <template v-slot:track="{ attrs }">
        <v-icon v-bind="attrs">
            {{ darkMode ? "mdi-moon-waning-crescent" : "mdi-white-balance-sunny" }}
        </v-icon>
    </template>
</v-switch>
      <div class="custom-select" @click="toggleDropdown">
        <img src="../assets/flag.png" alt="" class="flag-icon" />

        <v-icon> mdi-chevron-down</v-icon>
      </div>

      <!-- <--Dropdown with Flag Images 
      <v-menu v-model="dropdownOpen" class="menu" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on }"></template>
        <v-list
          <v-list-item v-for="(flag, index) in flags" :key="index" @click="selectFlag(flag)">
            <v-list-item-avatar>
              <img :src="flag.image" alt="flag" class="flag-icon" />
            </v-list-item-avatar>
            <v-list-item-title>{{ flag.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <!-- Two Icons -->
      <div class=" d-flex ga-3">
        <img  :src="darkMode ? lighticon1 : darkicon1"  class="icon" style="width: 20px; height: 20px;"/>
        <img  :src="darkMode ? lighticon2 : darkicon2"  class="icon"  style="width: 20px; height: 20px;"/>
      </div>

      <!-- Image -->
      <RouterLink to="/dashboard/profile">

    
      <img
        src="../assets/profile-pic.png"
        alt="Image"
        style="width: 50px; height: 50px"
        class="image"
      />
    </RouterLink>
    </div>
  </div>
</template>
<script setup>
import lighticon1 from  '../assets/text.png'
import darkicon1 from  '../assets/Asset 75@about.png'
import lighticon2 from '../assets/notification.png'
import darkicon2 from  '../assets/Asset 76@about.png'
import { useTheme } from "vuetify";

import { ref } from "vue";


const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "customDark" : "customLight";

 
};

</script>
<script>
export default {
  data() {
    return {
      searchText: "",
      selectedFlag: null,
      dropdownOpen: false,
      flags: [
        { value: "us", image: "../assets/flag.png", label: "United States" },
        { value: "uk", image: "../assets/flag.png", label: "United Kingdom" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectFlag(flag) {
      this.selectedFlag = flag;
      this.dropdownOpen = false;
    },
  },
};
</script>

<style>
.menu {
  position: relative;
  left: 52%;
  top: 22%;
  width: 90px;
}
.top-container {
  background-color:rgb( var(--v-theme-sidebarbg) )!important;
  border-radius: 15px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100% !important;
}
.icon:hover{
  cursor: pointer;
}
.search-field {
  width: 280px !important;
  margin-right: 10px;
  
}

.custom-select {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.custom-select img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.custom-select span {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icons {
  margin-right: 10px;
}

.icons v-icon {
  margin-right: 5px;
}

.image {
  width: 100px;
}
.switch-part{
  flex-wrap: nowrap;
}
@media (max-width: 600px) {
  .search-field {
  width: 280px !important;
  margin-right: 0px;
  
}}
@media (max-width: 300px) {
  .search-field {
  width: 240px !important;
  margin-right: 0px;
  
}
.switch-part{
  flex-wrap: wrap;
}
}
</style>
