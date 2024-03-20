<template>
  <v-card color="cardColor" class="box">
    <h2 class="whyUs-heading">Why Pesaport</h2>
    <div class="d-flex flex-lg-row ga-lg-1 ga-8 flex-column justify-space-around">
      <div class="d-flex flex-column ga-2 column align-center">
        <img src="../assets/Asset 72@3x.png" style="width: 30px" />
        <p class="whyUs-description">
          Reputable investment company with a proven track record can provide
          you with confidence in their ability to manage your investments
          effectively.
        </p>
      </div>

      <div class="d-flex flex-column ga-2 column align-center">
        <img src="../assets/Asset 72@3x.png" style="width: 30px" />
        <p class="whyUs-description">
          Reputable investment company with a proven track record can provide
          you with confidence in their ability to manage your investments
          effectively.
        </p>
      </div>
    </div>
  </v-card>

  <v-row class="mt-10">
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <WhyUsCard
          :heading="card.heading"
          :description="card.description"
        />
      </v-col>
    </v-row>
</template>

<script>
import  WhyUsCard from './Cards/WhyUsCard.vue';

export default {
  name:'WhyUs',
  components: {
    WhyUsCard
  },
  data() {
    return {
      cards: [
        { heading: "4.8", description: "Star Rating" },
        { heading: "300k+", description: 'Active Customers\nTanzania'},
        { heading: "4M+", description: "Investment raised" },
        { heading: "2M+", description: 'Investment\nTransacted' }
      ]
    };
  }
}
</script>

<style scoped>
.box {
  padding: 20px 30px;
  padding-bottom: 3.5rem;
  border-radius: 20px;
  margin-top: 5rem;
  box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -webkit-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -moz-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
}
.column {
  width: 30%;
}
.whyUs-heading {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 15px;
  font-size: 2.5rem;
  font-weight: 800;
}

.icon {
  font-size: 36px;
  margin-bottom: 10px;
}

.whyUs-description {
  margin: 0;
  text-align: center;
  font-size: 13px;
}
@media (max-width: 600px) {
    .column {
  width: auto;
}
.box {
  padding: 20px;
  padding-bottom: 3.5rem;
 
}
}
</style>
