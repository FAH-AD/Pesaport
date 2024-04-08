<template>
  <div class="d-flex  flex-column flex-lg-row " >
    <v-row  class="align-center flex-column flex-lg-row " :class="reverseDirection?'flex-lg-row-reverse' :'flex-row' "  >
      <v-col cols="12" md="6">
        <v-carousel  :show-arrows="false" cycle hide-delimiters  height="400">
          <v-carousel-item v-for="(item, index) in images" :key="index">
           
             
                  <img
                    :src="item.src"
                     
                    class="mx-auto  c-img white--text"
                    style=""
                  ></img>
               
           
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="0" class="pa-0" color="transparent">
          <v-card-text class="pa-0">
            <v-list bg-color="transparent" >
              <v-list-item   v-for="(point, index) in points" :key="index">
                <div class="d-flex align-center flex-row ga-3">
                 <div class="step">
                 
                 </div>
                  <div class="item-title">{{ point.title }}</div>
                </div>
              
                 
              
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    points: {
      type: Array,
      required: true
    },
    reverseDirection: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.bullet::before {
  content: "\2022"; /* Bullet point character */
  margin-right: 8px; /* Adjust margin as needed */
}
.item-title{
  font-size: 1.4rem;
  font-weight: 500 ;
  line-height: 1.6rem
}
.c-img{
  background-size: contain;
  max-width: 600px; 
  max-height: 800px 
}
.step{
  min-width: 10px;
  min-height: 10px;
  border-radius: 50%;
  background-color:#ffc800;
 
}
@media (max-width: 600px) {
  .c-img{
  background-size: contain;
  max-width: 350px; 
  max-height: 400px 
}
.item-title{
  font-size: 1.1rem;
  font-weight: 500 ;
  line-height: 1.2rem
}
}
@media (max-width: 300px) {
  .c-img{
  background-size: contain;
  max-width: 250px; 
  max-height: 300px 
}
}
</style>
