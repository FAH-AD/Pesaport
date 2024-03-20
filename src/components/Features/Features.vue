<template>
  <v-container class="f-container" fluid>
    <div class="d-flex flex-column flex-lg-row align-center ga-9">
      <img src="../../assets/Asset 2.1@3x.png" class="feature-img" />

      <div class="d-flex flex-column ga-8">
        <p class="feature-heading">
          We’ve made <br />
          Investment Easly
        </p>
        <!-- First Row of Feature Items -->
        <div class="d-flex flex-column ga-8 ga-lg-0 flex-lg-row justify-space-between">
          <feature-item
            :icon="items[0].icon"
            :heading="items[0].heading"
            :description="items[0].description"
          ></feature-item>
          <feature-item
            :icon="items[1].icon"
            :heading="items[1].heading"
            :description="items[1].description"
          ></feature-item>
        </div>
        <!-- Second Row of Feature Items -->
        <div class="d-flex flex-column ga-8 ga-lg-0 flex-lg-row justify-space-between">
          <feature-item
            :icon="items[2].icon"
            :heading="items[2].heading"
            :description="items[2].description"
          ></feature-item>
          <feature-item
            :icon="items[3].icon"
            :heading="items[3].heading"
            :description="items[3].description"
          ></feature-item>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import FeatureItem from "./FeatureItem";
import icon1 from "../../assets/Asset 5@3x.png";

export default {
  data() {
    return {
      items: [
        {
          icon: icon1,
          heading: "Custome Packages",
          description:
            "Empower your Financial Joumey with Pesaport. Achieve your goals, Master your Budget, and embrace financial freedom. ",
        },
        {
          icon: icon1,
          heading: "Invest with confidence",
          description:
            "Empower your Financial Joumey with Pesaport. Achieve your goals, Master your Budget, and embrace financial freedom. ",
        },
        {
          icon: icon1,
          heading: "Earn more from",
          description:
            "Empower your Financial Joumey with Pesaport. Achieve your goals, Master your Budget, and embrace financial freedom. ",
        },
        {
          icon: icon1,
          heading: "Excelent Customer Service",
          description:
            "Empower your Financial Joumey with Pesaport. Achieve your goals, Master your Budget, and embrace financial freedom. ",
        },
      ],
    };
  },
  components: {
    FeatureItem,
  },
};
</script>

<style>
.f-container{
  margin-top:7rem;
}
.feature-img {
  width: 500px;
}
.feature-heading {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 2.7rem;
}

@media (max-width: 600px) {
  .feature-img {
  width: 340px;
}
.feature-heading {
  text-align: center;
}
}

@media (max-width: 350px) {
  .feature-img {
  width: 280px;
}
}
</style>
