<template>
  <v-card class="pa-4 ma-4" elevation="0" color="sidebarbg">
    <div class="d-flex flex-column flex-lg-row justify-space-between">
      <div>
        <div class="text-h5 font-weight-bold">Pesaport Dashboard</div>
        <div>{{ subheading }}</div>
      </div>

      <div>
        <RouterLink :to="activeTab ===2 ? '/dashboard/dashproducts' : '#' ">
        <v-btn
          :class="{ 'active-tab': activeTab === index }"
          value=""
          class="i-btn mr-3"
          variant="outlined"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="handleTabButtonClick(index)"
        >
          <img
            :src="tab.icon"
            class="invest-icon mr-1"
            style="width: 20px; height: 20px"
          />
          {{ tab.label }}
        </v-btn>
    </RouterLink>
       
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn elevation="0" color="primary" dark >
              <v-icon v-bind="props" color="white">mdi-plus</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              :class="{ 'active-tab': activeTab === index }"
              value=""
            >
              Reports
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <v-dialog v-model="isModalOpen" class="pa-" max-width="500px">
        <v-card color="background" class="ma-0">
          <!-- Modal Header -->

          <!-- Content for the modal goes here -->
          <v-card-text>
            <template v-if="modalCheck === 0">
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
  </v-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import icon1 from "../assets/box-icon.png";

import icon3 from "../assets/Asset 47@3x.png";
import icon4 from "../assets/Asset 46@3x.png";
const activeTab = ref(0);
let modalCheck = 0;
// Modal control
const isModalOpen = ref(false);
const closeModal = () => {
  isModalOpen.value = false;
};

// Function to handle tab button clicks
const handleTabButtonClick = (index) => {
  if (index === 1 || index === 0) {
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
  name: "CustomComponent",
  data() {
    return {
      toggle: null,
      tab: null,
    mobileNetwork: null,
    bank: null,
      dropdown: false,
      selectedItem: null,
      dropdownItems: ["Dropdown Item"],
      tabs: [
        { label: "Invest Now", icon: icon3 },
        { label: "Withdraw", icon: icon4 },
        { label: "Products", icon: icon1 },
      ],
    };
  },
  props: {
    heading: String,
    subheading: String,
  },
};
</script>
<style scoped>
.i-btn {
  border-color: rgb(var(--v-theme-secondary));
  font-size: 10px;
  color:rgb(var(--v-theme-textColor))
}

</style>