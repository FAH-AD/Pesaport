<template>
  <div class="d-flex flex-column align-center align-lg-start ga-2 ga-lg-4">
    <img :src="icon" alt="icon" style="height: 40px; width: 40px" />

    <h3 class="fi-heading">{{ heading }}</h3>
    <p class="fi-desc">{{ description }}</p>
  </div>
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
.fi-heading{
  font-size: 1.3rem;
  text-wrap: nowrap;

}
.fi-desc{
  font-size: 14px;
  text-align: left;
}
@media (max-width: 600px) {
  .fi-desc {
    text-align: center;
}

.fi-heading{
  font-size: 1.1rem;
  text-wrap: nowrap;

}
}
</style>
