<template>
  <div class="d-flex flex-column">
    <div class="support-heading text-center text-lg-left">
We are supported by<br class="d-none d-lg-block">
the top firms who care<br class="d-none d-lg-block">
about Investing
    </div>

    <div class="d-flex flex-column flex-lg-row align-center ga-9 justify-space-between">
      <img src="../assets/Asset 16@product.png" class="support-img"/>
      <img src="../assets/Asset 16@product.png" class="support-img"/>
      <img src="../assets/Asset 16@product.png" class="support-img"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
};
</script>

<style scoped>
.support-heading{
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 30px;
}
.support-img{
   width: 250px;
}

@media (max-width: 600px) {
    .support-img{
        width: 230px;
    }

    .support-heading{
    font-size: 2.2rem;
   
    margin-bottom: 20px;
}

}
</style>
