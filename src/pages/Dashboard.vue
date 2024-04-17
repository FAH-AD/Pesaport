<template>
  <div class="pa-5">
    <SideBar />
    <TopBar />
    <FunctionalityBar subheading="Hi Fahad"/>

    <RouterView></RouterView>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import TopBar from "../components/TopBar.vue";
import FunctionalityBar from "../components/FunctionalityBar.vue"

export default {
  name: "Dashboard",
  components:{
    SideBar,
    TopBar,
    FunctionalityBar
  }
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>
