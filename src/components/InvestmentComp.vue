<template>
  <div>
    <Stats />
    <v-container>
      <v-container v-if="isMobile">
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark variant="outlined">
              <v-icon v-bind="props">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              :class="{ 'active-tab': activeTab === index }"
              value=""
              v-for="(tab, index) in tabs"
              :key="index"
              @click="handleTabButtonClick(index)"
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
              @click="handleTabButtonClick(index)"
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
              @click="handleTabButtonClick(index + 3)"
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

      <!-- Modal for third and fourth tabs -->
      <v-dialog v-model="isModalOpen" class="pa-" max-width="500px">
        <v-card color="background" class="ma-0">
          <!-- Modal Header -->

          <!-- Content for the modal goes here -->
          <v-card-text>
            <template v-if="modalCheck === 1">
              <v-toolbar color="background" dark>
                <h4 class="text-bold">Investment Details</h4>
                <v-spacer></v-spacer>
                <v-btn icon @click="closeModal">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <!-- Horizontal Line -->
              <v-divider size="2" class="mb-4"></v-divider>

              <!-- Inputs for index 1 -->
              <v-text-field
                density="compact"
                variant="outlined"
                label="Client Identification Code"
              ></v-text-field>

              <v-select
                density="compact"
                :items="['Product1', 'Product2', 'Product3']"
                label="Choose Product"
                variant="outlined"
              ></v-select>
              <!-- Heading for tabs -->
              <p class="tab-desc">How are you going to pay:</p>
              <!-- Tabs -->
              <v-tabs v-model="tab" bg-color="transparent" color="primary">
                <v-tab bg-color="transparent" value="one">Mobile Wallet</v-tab>
                <v-tab bg-color="transparent" value="two">Bank Wallet</v-tab>
              </v-tabs>

              <v-card-text>
                <v-window v-model="tab">
                  <v-window-item value="one">
                    <v-text-field
                      label="Phone Number"
                      placeholder="255-XXXXXXXXX"
                      variant="outlined"
                      class="mt-5"
                      density="compact"
                    ></v-text-field>

                    <p>Mobile Network:</p>
                    <v-radio-group inline v-model="mobileNetwork">
                      <v-radio
                        color="primary"
                        value="network1"
                        label="Tigo"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="network2"
                        label="Vodacom"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="network3"
                        label="Airtel"
                      ></v-radio>
                    </v-radio-group>
                  </v-window-item>

                  <v-window-item value="two">
                    <v-text-field
                      label="Card Number"
                      class="mt-5"
                      placeholder="XXX-XXX-XXXXXX"
                      variant="outlined"
                      density="compact"
                    ></v-text-field>

                    <h4>Choose Bank Account</h4>
                    <v-radio-group inline v-model="bank">
                      <v-radio
                        color="primary"
                        value="bank1"
                        label="Bank1"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="bank2"
                        label="Bank2"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="bank3"
                        label="Bank3"
                      ></v-radio>
                    </v-radio-group>
                  </v-window-item>
                </v-window>
              </v-card-text>
            </template>
            <template v-else>
              <v-toolbar color="background" dark>
                <h4 class="text-bold">Withdraw Request Form</h4>
                <v-spacer></v-spacer>
                <v-btn icon @click="closeModal">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <!-- Horizontal Line -->
              <v-divider size="2" class="mb-4"></v-divider>

              <!-- Inputs for index 1 -->
              <v-text-field
                density="compact"
                variant="outlined"
                label="Client Name"
              ></v-text-field>
              <v-text-field
                density="compact"
                variant="outlined"
                label="Client Code"
                placeholder="glkz"
              ></v-text-field>
              <v-select
                density="compact"
                :items="['Product1', 'Product2', 'Product3']"
                label="Choose Product"
                variant="outlined"
                bg-color="background"
               
              ></v-select>
              <v-select
                density="compact"
                :items="['Form1', 'Form2', 'Form3']"
                label="Withdraw Form"
                variant="outlined"
              ></v-select>
              <!-- Heading for tabs -->
              <p class="tab-desc">How you want to receive funds</p>
              <!-- Tabs -->
              <v-tabs v-model="tab" bg-color="transparent" color="primary">
                <v-tab bg-color="transparent" value="one">Mobile Wallet</v-tab>
                <v-tab bg-color="transparent" value="two">Bank Wallet</v-tab>
              </v-tabs>

              <v-card-text>
                <v-window v-model="tab">
                  <v-window-item value="one">
                    <v-text-field
                      label="Phone Number"
                      placeholder="255-XXXXXXXXX"
                      hint="please use the same number you have registered with"
                      variant="outlined"
                      class="mt-5"
                      density="compact"
                    ></v-text-field>

                    <p>Mobile Network:</p>
                    <v-radio-group inline v-model="mobileNetwork">
                      <v-radio
                        color="primary"
                        value="network1"
                        label="Tigo"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="network2"
                        label="Vodacom"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="network3"
                        label="Airtel"
                      ></v-radio>
                    </v-radio-group>
                  </v-window-item>

                  <v-window-item value="two">
                    <v-text-field
                      label="Card Number"
                      class="mt-5"
                      placeholder="XXX-XXX-XXXXXX"
                      variant="outlined"
                      density="compact"
                    ></v-text-field>

                    <h4>Choose Bank Account</h4>
                    <v-radio-group inline v-model="bank">
                      <v-radio
                        color="primary"
                        value="bank1"
                        label="Bank1"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="bank2"
                        label="Bank2"
                      ></v-radio>
                      <v-radio
                        color="primary"
                        value="bank3"
                        label="Bank3"
                      ></v-radio>
                    </v-radio-group>
                  </v-window-item>
                </v-window>
              </v-card-text>

            </template>
          </v-card-text>
          <div class="pa-3 px-5">
            <v-text-field
              label="Amount"
              variant="outlined"
              class="mt-5"
              density="compact"
            ></v-text-field>
          </div>
          <div class="pa-3 px-5">
            <v-btn variant="outlined" class="submit-btn" color="secondary"
              >Submit</v-btn
            >
          </div>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
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
let modalCheck = 0;
// Modal control
const isModalOpen = ref(false);
const closeModal = () => {
  isModalOpen.value = false;
};

// Function to handle tab button clicks
const handleTabButtonClick = (index) => {
  if (index === 1 || index === 3) {
    isModalOpen.value = true;
    modalCheck = index;
  } else {
    activeTab.value = index;
  }
  console.log(modalCheck);
};
</script>
<script>
export default {
  data: () => ({
    tab: null,
    mobileNetwork: null,
    bank: null,
  }),
};
</script>

<style scoped>
.i-btn {
  border-color: rgb(var(--v-theme-secondary));
  font-size: 10px;
}
.tab-desc {
  font-size: 15px;
  margin-bottom: 15px;
}

.active-tab {
  background-color: #979393;
  color: rgb(var(--v-theme-secondary));
}

.invest-icon {
  margin-right: 10px;
}

.submit-btn {
  background-color: rgb(var(--v-theme-secondary)) !important;
  color: white !important;
  border-color: rgb(var(--v-theme-secondary));
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

/* Adjust styles for the modal */
.v-dialog {
  max-width: 500px;
  margin: 0 auto;
}
</style>
