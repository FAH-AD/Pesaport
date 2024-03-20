<template>
    <div>
      <!-- First Element -->
      <div class="first-element align-center">
        <h4 class="ml-8 mb-4">Select Account Type</h4>
        <div class="d-flex justify-space-around ga-2 flex-wrap">

        
     <v-btn variant="outlined" @click="selectAccountType('Mobile Money')" :class="selectedAccountType === 'Mobile Money' ? 'primary-class' : 'a-btn'">Mobile Money Account</v-btn>
      <v-btn  variant="outlined" @click="selectAccountType('Credit or Debit Card')" :class="selectedAccountType === 'Credit or Debit Card' ? 'primary-class' : 'a-btn'">Credit or Debit Card Account</v-btn>
      <v-btn  variant="outlined" @click="selectAccountType('Bank')" :class="selectedAccountType === 'Bank' ? 'primary-class' : 'a-btn'">Bank Account</v-btn>
    </div>
      </div>
  
      <!-- Second Element -->
      <div class="second-element pa-0">
        <div class="top-bar flex-column ga-4 flex-lg-row d-flex justify-space-between">
            <h4>Default payment preferences</h4>
        <div class="horizontal-buttons">
          <v-btn variant="outlined" density="compact" class="a-btn top-btn">Cancel</v-btn>
          <v-btn variant="outlined"  density="compact" class="primary-class top-btn">Add Payment Method</v-btn>
        </div>
        </div>
       
        
        <div class="details-container pa-8 d-flex flex-column flex-lg-row justify-space-around">
          <v-col cols="12" lg="6" class="left-part">
            <h4 class="mb-10"> {{ selectedAccountType }}</h4>
            <div class="input-group">
              <label for="input1">Name on Account</label>
              <v-text-field variant="outlined" density="compact" id="input1" v-model="input1"></v-text-field>
            </div>
            <div class="input-group">
              <label for="input2">Mobile Number</label>
              <v-text-field variant="outlined"  density="compact" id="input2" v-model="input2"></v-text-field>
            </div>
            <div class="input-group">
              <label for="input3">Email Address</label>
              <v-text-field variant="outlined"  density="compact" id="input3" v-model="input3"></v-text-field>
            </div>
          </v-col>
          <div class="vertical-line d-none d-lg-block"></div>
          <v-col  cols="12" lg="6" class="right-part">
            <h4 class="mb-10">Billing Address</h4>
            <div class="input-group">
              <label for="input4">Country/Region</label>
              <v-text-field variant="outlined"  density="compact" id="input4" v-model="input2"></v-text-field>
            </div>
            <div class="input-group">
              <label for="input5">Address</label>
              <v-text-field variant="outlined"  density="compact" id="input5" v-model="input2"></v-text-field>
            </div>
            <div class="input-group">
              <label for="input6">City</label>
              <v-text-field variant="outlined"  density="compact" id="input6" v-model="input2"></v-text-field>
            </div>
          </v-col>
        </div>
        <div class="terms-checkbox">
          <v-checkbox color="primary" v-model="termsChecked" label=" By adding a bank account you agree to Terms and Conditions"></v-checkbox>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedAccountType: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        termsChecked: null
      };
    },
    methods: {
    selectAccountType(type) {
      this.selectedAccountType = type;
    }
  }
  };
  </script>
  
  <style scoped>
  .first-element {
    margin-bottom: 20px;
  }
  .top-btn{
  font-size: 10px !important;
  }
  .terms-checkbox{
    width: 100%;
  }
  .second-element {
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-radius: 15px;
  }
  .top-bar{
    border-radius: 15px;
    background-color: rgb(var(--v-theme-sidebarbg));
    width: 100%;
    padding: 20px;
  }
  
  .horizontal-buttons {
    display: flex;
    gap:1rem;
    flex-wrap: nowrap;
  }
  
  .horizontal-buttons v-btn {
    margin-right: 10px;
  }
 
  .details-container {
    display: flex;
    width: 100%;
    padding:20px
  }
  .primary-class{
    background-color: rgb(var(--v-theme-secondary));
    color: white;
    border-color: rgb(var(--v-theme-secondary));

  }
  .a-btn{
    border-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-textColor));
  }

  .vertical-line {
    border-left: 2px solid #ccc;
    margin: 0 20px;

    height: 100vh;
  }

  .input-group{
    width: 100%;
  }
  @media (max-width: 300px) {
  .horizontal-buttons{
    flex-wrap: wrap
  }

  .a-btn{
    border-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-textColor));
    font-size: 8px;
  }
}
  
  </style>
  