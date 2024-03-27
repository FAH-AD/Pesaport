<template>
  <v-container class="ma-lg-8 ma-0 pa-0">
    <!-- Progress Bar -->
    {{ progressText }}
    <v-progress-linear
      rounded
      :model-value="progressValue"
      class="mb-10"
      :height="7"
      color="secondary"
    >
    </v-progress-linear>

    <!-- Part 1 -->
    <v-card color="background" elevation="0" v-if="currentPart === 1">
      <p class="cal-head">What Product are you looking to invest?</p>
      <p class="cal-desc">Please select product you wish to do calculations</p>
      <v-card-text>
        <v-row class="flex-wrap">
          <v-row>
            <!-- First Column -->
            <v-row class="mx-1">
              <v-col
                class="w-100 py-lg-8 py-4 text-center ma-lg-3 ma-2 element-one"
                :class="{ selected: selectedElementIndex === 1 }"
                @click="selectElement(1)"
              >
                <v-radio
                  v-model="selectedElementIndex"
                  :value="1"
                  color="primary"
                  class="element-radio"
                ></v-radio>
                <div class="element-head">Pesa Fund</div>
                <div class="element-desc">
                  Postea democritum mnesarchum ne nam, ad vim aperiri tractatos
                </div>
              </v-col>

              <!-- Second Column -->
              <v-col
                class="w-100 py-8 text-center ma-3 element-one"
                :class="{ selected: selectedElementIndex === 2 }"
              >
                <v-radio
                  v-model="selectedElementIndex"
                  :value="2"
                  @click="selectElement(2)"
                  color="primary"
                  class="element-radio"
                ></v-radio>
                <div class="element-head">Hatifungani Fund</div>
                <div class="element-desc">
                  Prioritize and solve your tasks in short time cycles.
                </div>
              </v-col>
            </v-row>
            <v-col
              class="w-100 py-8 text-center ma-3 element-one"
              :class="{ selected: selectedElementIndex === 3 }"
            >
              <v-radio
                v-model="selectedElementIndex"
                :value="3"
                @click="selectElement(3)"
                color="primary"
                class="element-radio"
              ></v-radio>
              <div class="element-head">Mtoto Fund</div>
              <div class="element-desc">
                Prioritize and solve your tasks in short time cycles.
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn class="cal-btn" variant="outlined" @click="nextPart">Next</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Part 2 -->
    <v-card color="background" elevation="0" v-if="currentPart === 2">
      <p class="cal-head">Expected returns</p>
      <p class="cal-desc">
        Key in the invested amount and invested period to learn expected returns
      </p>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <div class="w-100">
              Start balance
              <v-text-field
                density="compact"
                placeholder="0.00"
                variant="outlined"
                :value="start"
              ></v-text-field>
            </div>
            <div class="w-100">
              Monthly contribution
              <v-text-field
                density="compact"
                placeholder="0.00"
                variant="outlined"
                :value="contribution"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="w-100">
              Investment period
              <v-text-field
                density="compact"
                placeholder="0.00"
                variant="outlined"
                :value="period"
              ></v-text-field>
            </div>
            <div class="w-100">
              Return rate
              <v-text-field
                density="compact"
                placeholder="0.00"
                variant="outlined"
                :value="rate"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-radio-group inline v-model="selectedOption" row>
          <v-radio value="option1" color="secondary" label="Months "></v-radio>
          <v-radio value="option2" color="secondary" label="Years"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-btn class="cal-btn" @click="prevPart" color="primary">Back</v-btn>
        <v-btn class="cal-btn" @click="nextPart" color="primary">Next</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Part 3 -->
    <v-card color="background" elevation="0" v-if="currentPart === 3">
      <p class="cal-head">Calculation Results</p>
      <p class="cal-sum">Descriptive Summary</p>

      <p class="cal-desc mt-5">
        An Investment Scheme account with a periodic investment of TSH 100,000
        per month and average Annual Return of 12% invested over a duration of 4
        year(s) can approximately give a Total of
      </p>
      <v-card-text class="d-flex ga-2">
        <div class="w-100">
          Investment(TZS)
          <v-text-field
            density="compact"
            placeholder="0.00"
            variant="outlined"
            v-model="investment"
            :value="field1"
          ></v-text-field>
        </div>

        <div class="w-100">
          Expected(TZS)
          <v-text-field
            density="compact"
            placeholder="0.00"
            variant="outlined"
            v-model="investment"
            :value="field1"
          ></v-text-field>
        </div>
        <div class="w-100">
          Wealth Gain(TZS)
          <v-text-field
            density="compact"
            placeholder="0.00"
            variant="outlined"
            v-model="investment"
            :value="field1"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="cal-btn" @click="prevPart" color="primary">Back</v-btn>
        <v-btn class="cal-btn" @click="calculate" color="primary"
          >Calculate</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      progressValue: 33.3,

      currentPart: 1,
      subheading1: "",
      elements1: [
        {
          heading: "Pesa Fund",
          description:
            "Postea democritum mnesarchum ne nam, ad vim aperiri tractatos.",
        },
        {
          heading: "Hatifungani Fund",
          description: "Prioritize and solve your tasks in short time cycles.",
        },
        {
          heading: "Mtoto Fund",
          description: "Prioritize and solve your tasks in short time cycles.",
        },
      ],
      selectedElementIndex: null,
      subheading2: "",
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      selectedOption: "",
      investment: "",
      expected: "",

      wealthGain: "",
    };
  },

  computed: {
    progressText() {
      return `${this.currentPart} of 3`;
    },
  },
  methods: {
    nextPart() {
      if (this.currentPart < 3) {
        this.currentPart++;
        this.progressValue += 33.3;
        console.log(this.progressValue);
      }
    },

    selectElement(index) {
      this.selectedElementIndex = index;
      console.log(this.selectedElementIndex);
    },
    prevPart() {
      if (this.currentPart > 1) {
        this.currentPart--;
        this.progressValue -= 33.3;
      }
    },
    calculate() {
      // Perform calculations based on inputs
    },
  },
};
</script>
<style scoped>
.cal-btn {
  background-color: rgb(var(--v-theme-secondary));
  border-color: rgb(var(--v-theme-secondary));
  color: white !important;
}
.cal-head {
  font-size: 1.2rem;
  font-weight: 600;
}
.element-head {
  font-size: 14px;
  font-weight: bold;
}
.selected {
  border: 2px solid #ffc800 !important; /* Change border color when selected */
}

.element-desc {
  font-size: 11px;
}
.element-radio {
  position: relative;

  top: -30px;
  left: -10px;
}
.element-one {
  border-radius: 10px;
  border: 1px solid black;
}
.cal-desc {
  font-size: 0.9rem;
  margin-bottom: 3rem;
}
.cal-sum {
  font-size: 12px;
  color: rgb(130, 130, 130);
}
</style>
