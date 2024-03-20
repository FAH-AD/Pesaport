<template>
  <v-card color="cardColor" class="rounded-lg card pa-4">
    <v-card-title class="d-flex align-end">
      <img
        :src="icon"
        class="mr-2"
        alt="icon"
        style="height: 30px; width: 30px"
      />
      <p class="font-weight-bold heading-card">{{ heading }}</p>
    </v-card-title>
    <v-card-text class="desc-card">{{ description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: String,
    heading: String,
    description: String,
  },
};
</script>

<style>
.card {
  box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -webkit-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
  -moz-box-shadow: 0.01rem -0.03rem 0px 0.02rem rgba(255, 200, 0, 0.75) !important;
}
.heading-card {
  font-size: 1rem;
  color: rgb(var(--v-theme-textColor));
}
.desc-card {
  font-size: 10px !important;
  line-height: 16px !important;
  color: rgb(var(--v-theme-textColor));
}
</style>
