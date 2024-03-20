<template>
  <Stats />
  <v-container>
    <v-container v-if="isMobile">
      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" dark variant="outlined" >
            <v-icon v-bind="props" >mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            :class="{ 'active-tab': activeTab === index }"
            value=""
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
          >
            {{ tab.label }}
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
    <v-tabs v-model="activeTab" background-color="transparent" v-else>
      <v-row class="d-flex justify-space-between">
        <v-col cols="auto" class="d-flex ga-2">
          <v-btn
            :class="{ 'active-tab': activeTab === index }"
            value=""
            class="i-btn"
            variant="outlined"
            v-for="(tab, index) in tabs.slice(0, 3)"
            :key="index"
            @click="activeTab = index"
          >
            <img
              :src="tab.icon"
              class="invest-icon"
              style="width: 20px; height: 20px"
            />
            {{ tab.label }}
          </v-btn>
        </v-col>
        <v-col cols="auto" class="d-flex ga-2">
          <v-btn
            :class="{ 'active-tab': activeTab === index + 3 }"
            variant="outlined"
            class="i-btn"
            v-for="(tab, index) in tabs.slice(3)"
            :key="index"
            @click="activeTab = index + 3"
          >
            <img
              :src="tab.icon"
              class="invest-icon"
              style="width: 20px; height: 20px"
            />
            {{ tab.label }}
          </v-btn>
        </v-col>
      </v-row>
    </v-tabs>

    <v-card class="container-card">
      <v-card-text>
        <v-window v-model="activeTab">
          <v-window-item
            :value="index"
            v-for="(component, index) in components"
            :key="index"
          >
            <component :is="component.component" />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Stats from "./Stats.vue";
import Product from "./Product.vue";
import EmptyComp from "./EmptyComp.vue";

import icon1 from "../assets/box-icon.png";
import icon2 from "../assets/Asset 49@3x.png";
import icon3 from "../assets/Asset 47@3x.png";
import icon4 from "../assets/Asset 46@3x.png";
import icon5 from "../assets/Asset 45@3x.png";
import icon6 from "../assets/Asset 11@3x.png";

// Define tab labels and icons
const tabs = [
  { label: "Products", icon: icon1 },
  { label: "Investments", icon: icon2 },
  { label: "Invest Now", icon: icon3 },
  { label: "Withdraw", icon: icon4 },
  { label: "Reports", icon: icon5 },
  { label: "", icon: icon6 },
];

// Define components for each tab
const components = [
  { name: "Product", component: Product },
  { name: "Services", component: EmptyComp },
  { name: "Mission", component: EmptyComp },
  { name: "Product", component: EmptyComp },
  { name: "Services", component: EmptyComp },
  { name: "Mission", component: EmptyComp },
  { name: "Services", component: EmptyComp },
];

// Track active tab
const activeTab = ref(0);

// Detect if the device is mobile
const isMobile = ref(false);
const handleResize = () => {
  isMobile.value = window.innerWidth <= 600;
};
onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

// Control variable for menu visibility
const isMenuOpen = ref(false);
</script>

<style scoped>
.i-btn {
  border-color: rgb(var(--v-theme-secondary));
  font-size: 10px;
}

.active-tab {
  background-color: #979393;
  color: rgb(var(--v-theme-secondary));
}

.invest-icon {
  margin-right: 10px;
}

.container-card {
  margin-top: 20px;
  background-color: white;
  border-radius: 15px;
}

.empty-container {
  min-height: 300px; /* Adjust the height as needed */
}

/* Hide v-menu activator icon on desktop */
.v-menu {
  display: none;
}
.menu-list {
  position: relative !important;
  bottom: 0;
  top: 90% !important;
}
/* Show v-menu activator icon on mobile */
@media only screen and (max-width: 600px) {
  .v-menu {
    display: block;
  }
}
</style>
