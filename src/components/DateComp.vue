<template>
  <div class="date-range-picker">
    <v-container>
      <v-row class="d-flex align-center date-row justify-space-between">
        <div class="d-flex ga-3">
          <v-col cols="6" lg="4" >
            <VueDatePicker
              class="custom-date-picker"
              dark
              placeholder="From Date"
              :bootstrap-styling="true"
              v-model="fromDate"
            ></VueDatePicker>
          </v-col>
          <v-col cols="6" lg="4">
            <VueDatePicker
              placeholder="To Date"
              dark
              :bootstrap-styling="true"
              v-model="toDate"
            ></VueDatePicker>
          </v-col>
        </div>
        <v-col cols="12" lg="3" class="d-flex align-center">
          <v-select
            label="Select"
            :items="['Today', 'This Week', 'Last Week', 'This Month']"
            variant="outlined"
            density="compact"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="align-center radion-container">
        <v-col cols="12" lg="8">
          <div class="selected-dates ml-2">
            {{
              ` ALL Transactions From ${formattedFromDate} to ${formattedToDate}`
            }}
          </div>

          <v-radio-group inline lg-default v-model="selectedOption">
            <v-radio
              class="radio mr-3"
              color="secondary"
              v-for="(option, index) in options"
              :key="index"
              :label="option.label"
              :value="option.value"
              density="compact"
            ></v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" lg="4" class="d-flex justify-lg-center justify-space-around flex-column flex-lg-row align-center">
          <v-radio-group class="d-flex  ga-3" inline lg-default v-model="additionalOption">
            <v-radio
              density="compact"
              class="radio"
              color="secondary"
              v-for="(option, index) in additionalOptions"
              :key="index"
              :label="option.label"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
          <v-btn class="ml-0 ml-lg-2 mr-8 mr-lg-0" color="primary">Download</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-table theme="light" class="table-container">
            <thead class="display-flex table-head">
              <tr>
                <th>Details</th>
                <th>Source</th>
                <th>Order</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in tableData" :key="index" @click="openModal(item)">

                <td>
                  <div class="d-flex align-center ga-2">
                    <img :src="item.icon" style="width: 30px; height: 30px" />
                    <div class="details-text d-flex flex-column">
                      <div class="bold-text">{{ item.details }}</div>
                      <div class="date">{{ formatDate(item.date) }}</div>
                    </div>
                  </div>
                </td>
                <td class="bold-text">From Mobile wallet<br /> <span class="date"> {{ item.reference }}</span></td>
                <td class="bold-text">{{ item.order }} <br /> <span class="date"> {{ item.orderRef }}</span></td>
                <td>{{ item.amount }}</td>
                <td>
                  <div class="text-center" :class="{ 'pending-status': item.status === 'Successfull' }">
                    {{ item.status }}
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>


      <!-- Modal -->
      <v-dialog class="pa-0 card-cont" v-model="modalOpen" max-width="600" max-height="900">
        <template v-slot:activator="{ on }"></template>
        <v-card color="sidebarbg" class="pa-0 card-cont">
         
          <v-card-text class="d-flex pa-0">
            <!-- Left Side -->
            <div class="d-flex pa-8 flex-column ga-6 left-modal align-center justify-center">
              <img src="../assets/Asset 43@3x.png"  />
              <div class="ml-4">
                <div class=" ltext-body">{{ selectedItem.order }}</div>
                <div class=" ltext-caption">{{ selectedItem.amount }}</div>
                <div class="ltext-body">{{ selectedItem.date }}</div>
              </div>
            </div>
           
            <!-- Right Side -->
            <div class="right-modal py-10 px-6">
                <div class="text-h6">Transaction Detail</div>
                <v-divider class="my-2"></v-divider>
              <!-- Payment Amount -->
              <div class="d-flex align-center">
                <div class="text-body mr-2">Payment Amount:</div>
                <p class="amount-text">{{ selectedItem.amount }}</p>
              </div>
              
              <!-- Fee Amount -->
              <div class="d-flex align-center">
                <div class="text-body mr-2">Fee Amount:</div>
                <div class="amount-text">-200</div>
              </div>
              
              <!-- Sum of Payment and Fee -->
              <v-divider class="my-2"></v-divider>
              <div class="d-flex  align-center">
                <div class="text-body mr-2">Total Amount:</div>
                <div class="amount-text">980</div>
              </div>
              <v-divider class="my-2"></v-divider>
              <!-- Additional Texts with Subtexts -->
              <div>
                <div class="text-body">Paid By</div>
                <div class="text-caption">{{ selectedItem.order }}</div>
                <div class="text-body">Transaction Id</div>
                <div class="text-caption">{{ selectedItem.orderRef }}</div>
                <div class="text-body">Description</div>
                <div class="text-caption">{{ selectedItem.order}}</div>
                <div class="text-body">Status</div>
                <div class="text-caption">{{ selectedItem.status}}</div>
                <!-- Add more as needed -->
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>
<script setup>
import logo1 from "../assets/Asset 56@3x.png";
import logo2 from "../assets/Asset 57@3x.png";
import logo3 from "../assets/yellow-logo.png";
import { ref } from 'vue';

const modalOpen = ref(false);
const selectedItem = ref(null);

const openModal = (item) => {
  selectedItem.value = item;
  modalOpen.value = true;
};
</script>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { VueDatePicker },


  data() {
    return {
      fromDate: null,
      toDate: null,
      quickDurations: [
        { text: "-Select-", value: null },
        { text: "Today", value: 1 },
        { text: "This Week", value: 2 },
        { text: "This Month", value: 3 },
        { text: "Last Week", value: 4 },
        { text: "Last Month", value: 5 },
      ],
      selectedQuickDuration: null,
      options: [
        { label: "All Transactions", value: "all" },
        { label: "Received", value: "received" },
        { label: "Pending", value: "pending" },
        { label: "Withdrawel", value: "withdrawel" },
      ],
      selectedOption: null,
      additionalOption:null,
      additionalOptions: [
        { label: "CSV", value: "csv" },
        { label: "PDF", value: "pdf" },
      ],
      tableData: [
        {
          details: "Deposit",
          date: "2024-03-23",
          reference: "123456",
          order: "Mtoto Fund",
          orderRef:"0nnyrsmmd3pm3",
          amount: "1000 TZS",
          status: "Successfull",
          icon: logo3,
        },
        {
          details: "Deposit",
          date: "2024-03-24",
          reference: "654321",
          order: "Mtoto Fund",
          orderRef:"0nnyrsmmd3pm3",
          amount: "1000 TZS",
          status: "pending",
          icon: logo2,
        },
        {
          details: "Deposit",
          date: "2024-03-23",
          reference: "123456",
          order: "Mtoto Fund",
          orderRef:"0nnyrsmmd3pm3",
          amount: "1000 TZS",
          status: "Successfull",
          icon: logo1,
        },
        {
          details: "Deposit",
          date: "2024-03-23",
          reference: "123456",
          order: "Mtoto Fund",
          orderRef:"0nnyrsmmd3pm3",
          amount: "1000 TZS",
          status: "pending",
          icon: logo1,
        },
       
      ],
      headers: [
        { text: "Details", value: "details" },
        { text: "Source", value: "source" },
        { text: "Order", value: "order" },
        { text: "Amount", value: "amount" },
        { text: "Status", value: "status" },
      ],
    };
  },

  computed: {
    formattedFromDate() {
      return this.formatDate(this.fromDate);
    },
    formattedToDate() {
      return this.formatDate(this.toDate);
    },
  },

  methods: {
    formatDate(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style scoped>
.dp__theme_dark{
    --dp-background-color: rgb(var(--v-theme-sidebarbg));
}
.table-head {
  background-color: rgb(var(--v-theme-sidebarbg));
  color: rgb(var(--v-theme-textColor));
}
.left-modal{
    background-color: #ffc800;
    border-radius: 20px;
}
.date-row {
  background-color: rgb(var(--v-theme-sidebarbg));
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 10px;
  border: 1px solid #ffc800;
}
.date {
  font-size: 8px;

  text-align: left;
}
.custom-date-picker .datepicker__input {
  background-color: #f0f0f0;
}
.radio {
  font-size: 10px;
  font-weight: 300;
}

.selected-dates {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}
.v-selection-control-group--inline {
  flex-wrap: nowrap;
}

.v-radio-group {
  margin-top: 10px;
}

.v-btn {
  margin-top: 10px;
}
.table-container {
  margin-top: 20px;
  border-radius: 15px;
  border: 1px solid #ffc800;
  
  overflow-x:auto;
}

.details-text {
  display: flex;

  text-align: left;
}

.reference-number {
  margin-top: 5px;
}
.bold-text{
    font-weight: bold;
}

.pending-status {
  background-color:#ffc800;

    border-radius: 10px;
    text-align: center;
    padding: 5px;
}
.ltext-body{
    color: black;
 
    text-align: center;
}
.ltext-caption{
    font-size: 2rem;
    font-weight: bold;
    color: black;
}
.text-body{
    font-size: 12px;
    font-weight: bold;
    
}
.text-caption{
    margin-bottom: 12px;
}
.card-cont{
    border-radius: 20px;
}
.amount-text{
    font-size: 12px;
}
</style>
