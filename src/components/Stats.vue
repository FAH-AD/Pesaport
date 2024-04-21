<template>
  <div class="d-flex  flex-column flex-lg-row align-center ga-6 mx-lg-4 mx-0 my-4 ">
    <OverviewCard />
    <div class="d-flex w-100 flex-column ga-5">
      <div class="d-flex flex-column flex-lg-row align-center justify-space-between ga-4">
        <StatsCard
          :text="item[0].text"
          :heading="item[0].heading"
          :percent="item[0].percent"
          :ele_heading1="item[0].ele_heading1"
          :ele_heading2="item[0].ele_heading2"
          :ele_desc2="item[0].ele_desc2"
          :ele_desc1="item[0].ele_desc1"
        />
        <StatsCard
          :text="item[1].text"
          :heading="item[1].heading"
          :percent="item[1].percent"
          :ele_heading1="item[1].ele_heading1"
          :ele_heading2="item[1].ele_heading2"
          :ele_desc2="item[1].ele_desc2"
          :ele_desc1="item[1].ele_desc1"
        />
      </div>
      <div class="d-flex align-center  flex-column flex-lg-row justify-space-between ga-4">
        <StatsCard
          :text="item[2].text"
          :heading="item[2].heading"
          :percent="item[2].percent"
          :ele_heading1="item[2].ele_heading1"
          :ele_heading2="item[2].ele_heading2"
          :ele_desc2="item[2].ele_desc2"
          :ele_desc1="item[2].ele_desc1"
        />
        <StatsCard
          :text="item[3].text"
          :heading="item[3].heading"
          :percent="item[3].percent"
          :ele_heading1="item[3].ele_heading1"
          :ele_heading2="item[3].ele_heading2"
          :ele_desc2="item[3].ele_desc2"
          :ele_desc1="item[3].ele_desc1"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import StatsCard from "./Cards/StatsCard.vue";
import OverviewCard from "./Cards/OverviewCard.vue";

const item = [
  {
    id: 1,
    color: "yellow",
    text: "Total Investment",
    heading: " 107,000 TZS",
    percent: "0.00%",
    ele_heading1: "This Month",
    ele_heading2: "This Week",
    ele_desc1: "107,000 TZS",
    ele_desc2: "107,000 TZS",
  },
  {
    id: 2,
    color: "green",
    text: "Total Withdraw",
    heading: "1000 TZS",
    percent: "0.00%",
    ele_heading1: "This Month",
    ele_heading2: "This Week",
    ele_desc1: "107,000 TZS",
    ele_desc2: "107,000 TZS",
  },
  {
    id: 3,
    color: "red",
    text: "Total Earning",
    heading: "0 TZS",
    percent: "0.00%",
    ele_heading1: "This Month",
    ele_heading2: "This Week",
    ele_desc1: "107,000 TZS",
    ele_desc2: "107,000 TZS",
  },
  {
    id: 4,
    color: "blue",
    text: "Total Deposit",
    heading: "109,000 TZS",
    percent: "0.00%",
    ele_heading1: "This Month",
    ele_heading2: "This Week",
    ele_desc1: "107,000 TZS",
    ele_desc2: "107,000 TZS",
  },
];
</script>
<script>
export default {
  name: "Stats",
  components: {
    StatsCard,
    OverviewCard,
  },
};
</script>

<style>
.container {
  padding: 20px;
  margin-left: 8px;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
