<template>
  <div class="pa-5">
    <SideBar />
    <TopBar/>
   
    
    <RouterView></RouterView>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import TopBar from "../components/TopBar.vue"

export default {
  name: "Dashboard",
  
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}
</style>
