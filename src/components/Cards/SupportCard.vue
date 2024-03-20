<template>
  <v-card
    class="custom-card d-flex flex-column ga-4 flex-lg-row align-center"
    elevation="0"
    dark
  >
    <img :src="icon" style="width: 50px" />
    <div class="d-flex flex-column">
      <h2 class="s-headline">{{ heading }}</h2>
      <p class="s-desc">{{ description }}</p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom-card {
  width: 400px;
  height: 150px;
  padding: 20px;
  margin: auto;
  border-radius: 8px; /* Rounded corners */
  background-color: #dddbdb;
  gap: 2rem;
}
.s-headline {
  color: black;
}
.s-desc {
  color: black;
}
@media (max-width: 600px) {
  .custom-card {
    width: 300px;
    height: auto;
    padding: 20px;
    margin: auto; /* Center the card horizontally */
    border-radius: 8px; /* Rounded corners */
    background-color: #dddbdb;
    gap: 2rem;
  }
}

@media (max-width: 300px) {
  .custom-card {
    width: 250px;
  }
}
</style>
