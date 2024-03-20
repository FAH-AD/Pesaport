<template>
    <v-col cols="12" md="6">
      <v-card color="transparent" elevation=0 class="d-flex flex-column flex-lg-row  align-center ga-6">
<img :src="icon" class="value-icon" style="height: 48px; width: 55px;"/>
        <div class="value-description text-center text-lg-left">
          <span class="font-weight-bold desc-title  ">{{ title }}:</span> {{ description }}
        </div>
      </v-card>
    </v-col>
  </template>
  
  <script>
  export default {
    props: {
      icon: String,
      title: String,
      description: String
    }
  };
  </script>
  <style>
.desc-title{
    color: #ffa000;

}
</style>
  