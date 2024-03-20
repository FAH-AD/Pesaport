<template>
    <div>
      <!-- First Element -->
      <div class="d-flex flex-column flex-lg-row first-element justify-space-between">
        <h5>Payment method (1/2)</h5>
        <div class="d-flex flex-wrap ga-2">

          <v-btn
            v-for="(button, index) in buttons"
            :key="index"
            :disabled="index === 0"
            :style="{
              backgroundColor: selectedButtonIndex === index ? '#ffc800' : '',
            }"
            density="compact"
            class="first-btn"
            variant="outlined"
            @click="changeButtonColor(index)"

          >
          <RouterLink class="router-text" :to="index === 4 ? '/dashboard/chooseAccount' : '#' "  >
            {{ button.text }}
          </RouterLink>
           
          </v-btn>
        </div>
      </div>
  
      <!-- Card Details -->
      <div class="card-details-container d-flex flex-column flex-lg-row">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card-details d-flex flex-column align-start"
          :style="{ borderColor: selectedCard === index ? '#ffc800' : '' }"
        >
          <input
            type="radio"
            :id="'cardRadio' + index"
            class="selector"
            v-model="selectedCard"
            :value="index"
          />
          <label :for="'cardRadio' + index" class="card-no">{{ card.cardNo }}</label>
  
          <p>{{ card.cardHolder }}</p>
          <p>{{ card.expiry }}</p>
          
          <v-btn variant="outlined" :class="index === 0 ? 'd-block':'d-none'" density="compact" class="default-button"
            >Default</v-btn
          >
        </div>
      </div>
  
    
  
      <!-- Third Element -->
      <div class="third-element d-flex flex-column">
        <div class="box-header d-flex justify-space-between">
          <h4>Default payment preferences</h4>
          <v-btn variant="outlined" density="compact" class="box-button">Edit</v-btn>
        </div>
        <div class="box-content d-flex flex-column flex-lg-row">
          <div class="box-item">
            <h5>Payment Method</h5>
            <p v-if="selectedCard !== null">
               {{ cards[selectedCard].cardNo }}
            </p>
            <p v-if="selectedCard !== null">
               {{ cards[selectedCard].cardHolder }}
            </p>
            <p v-if="selectedCard !== null">
             {{ cards[selectedCard].expiry }}
            </p>
          </div>
          <div class="vertical-line d-none d-lg-block"></div>
          <div class="box-item">
            <h5>Billing Address</h5>
            <p> Plot No. 52 Eyasi St</p>
            <p>Mikocheni</p>
            <p>Dar es salaam, Tanzania</p>


          </div>
          <div class="vertical-line d-none d-lg-block"></div>
          <div class="box-item">
            <h5>Contact Name</h5>
            <p v-if="selectedCard !== null">
               {{ cards[selectedCard].cardHolder }}
            </p>
            <p>0787 835 830</p>
            <p>info@kanyankole.co.tz</p>


            <!-- Insert Contact Name Here -->
          </div>
          <div class="vertical-line d-none d-lg-block"></div>
          <div class="box-item">
            <h5>Service Provider</h5>
            <p>Pesaport Ltd</p>
            <p> Payment Currency</p>
            <p>TZS - Tanzania Shilings</p>
           


          </div>
        </div>
      </div>
    </div>
   
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttons: [
          { text: "Set as Default", color: "red" },
          { text: "Verify", color: "green" },
          { text: "Edit", color: "blue" },
          { text: "Delete", color: "orange" },
          { text: "Add payment method", color: "purple" },
        ],
        selectedButtonIndex: null,
        heading: "Custom Component Heading",
        description1: "Description Line 1",
        description2: "Description Line 2",
        buttonText: "Click Me!",
        selectedCard: null,
        cards: [
          { cardNo: "Visa *****5648e", cardHolder: "Demetrius Kanyankole", expiry: "Expires on 09/26" },
          { cardNo: "Tigo Pesa *******456", cardHolder: "Demetrius Kanyankole", expiry: "Expires on 09/26" },
          // Add more cards if needed
        ],
      };
    },
    methods: {
      changeButtonColor(index) {
        this.selectedButtonIndex = index;
      },
    },
  };
  </script>
  
  
  

<style>
.first-element {
  background-color: rgb(var(--v-theme-sidebarbg));
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
}

.second-element
 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
}

.card-details-container {
  display: flex;
}

.card-details {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(var(--v-theme-sidebarbg));
  max-width: 300px;
}

.selector {
  position: relative;
  top: 0;
  right: -250px;
  color: #ffc800;
}
.first-btn {
  font-size: 10px !important;
  border-color: rgb(var(--v-theme-secondary));
  border: 1px solid #ffc800;
  padding: 0px 15px !important;
}

.default-button {
  margin-top: 10px;
  background-color: #ffc800;
  font-size: 10px;
  color: white !important;
}
.card-no {
  font-weight: bold;
}

.left-side,
.right-side {
  flex: 1;
  text-align: center;
}
.router-text{
    text-decoration: none;
    color:rgb(var(--v-theme-textColor))
}

.third-element {
    margin: 20px 10px;
    border-radius: 10px;
    background-color: white;
  }
  
  .box-header {
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ffc800 ;
    background-color: rgb(var(--v-theme-sidebarbg));
  }

  
  .box-header h2 {
    margin: 0;
  }
  
  .box-button {
    font-size: 14px;
    background-color: #ffc800;
    color: white;
  }
  
  .box-content {
    display: flex;
    
  }
  
  .box-item {
    flex: 1;
    text-align: left;
    padding: 30px;
   
  }
  .box-item>h5{
    margin-bottom: 10px;
 color: black;
  }
  .box-item>p{
    font-size: 12px;
    text-align: left;
    color: black;
  }
  
  .vertical-line {
    border-left: 2px solid #ccc;
    height: 100px;
    margin:  20px 10px;
  }
  @media (max-width: 600px) {
    .box-item {
    flex: 1;
    text-align: center;
    padding: 10px;
   
  }
  .box-item>p{
    font-size: 12px;
    text-align: center;
    color: black;
  }

  }

</style>
