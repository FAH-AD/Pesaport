<template>
  <div class="box-component">
    <div class="d-flex align-center ga-2">
     
      <h4 class="text">{{ text }}</h4>
    </div>

    <div>{{ heading }} <span class="arrow">↑{{ percent }}</span></div>
   

    <div class="stats-container d-flex justify-space-between ga-5">
      <div class="stat-item">
        <p class="ele-head">{{ ele_heading1 }}</p>
        <p class="ele-desc">{{ ele_desc1 }}</p>
      </div>
      <div class="stat-item">
        <p class="ele-head">{{ ele_heading2 }}</p>
        <p class="ele-desc">{{ ele_desc2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatsCard",
  props: {
    color: String,
    text: String,
    heading: String,
    percent: String,
    ele_heading1:String,
    ele_heading2:String,
    ele_desc1:String,
    ele_desc2:String,
  },
};
</script>

<style scoped>
.box-component {
  text-align: left;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px 30px;
  min-width:240px;
  align-items: start;
  background-color: rgb(var(--v-theme-sidebarbg));
  box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -webkit-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -moz-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
}

.color-box {
  width: 10px;
  border-radius: 2px;
  height: 10px;
}
.box-desc {
  color: rgb(var(--v-theme-primary));
  font-size: 12px;
  font-weight: bold;
}
.ele-head{
  font-size: 12px;
  color: darkgrey;
}
.ele-desc{
  font-size: 12px;
 
}

@media (max-width: 600px) {
  .box-component {
    width: 320px;
  }
}
@media (max-width: 350px) {
  .box-component {
    width: 250px;
  }
}

.arrow {
  color: #ffc800;
  font-size: 14px;
  margin-left: 5px;
}
.stats-container {
  display: flex;
  justify-content: space-between;
}
.stat-item {
  flex: 1;
  text-align: center;
}
</style>
