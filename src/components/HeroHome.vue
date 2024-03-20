<template>
  <v-container>
    <div
      class="d-flex mt-10 mt-lg-0 flex-column ga-6 flex-lg-row align-center justify-space-around"
    >
      <!-- Left part -->
      <div class="d-flex left-part l flex-column ga-5">
        <p :class="contentType === 'home' ? 'heading' : 'sub-heading'">
          {{ mainHeading }}
        </p>
        <p :class="contentType === 'home' ? 'sub-heading' : 'heading'">
          {{ subHeading }}
        </p>
        <p v-if="page === 'home'" class="desc mt-4">
          <strong>{{ boldDescription }}</strong
          ><br />{{ normalDescription }}
        </p>
        <p v-else class="ndesc mt-4">{{ normalDescription }}</p>
        <v-btn color="secondary" flat class="mt-6 custom-btn"
          >Try Free Demo <v-icon>mdi-chevron-right</v-icon></v-btn
        >
      </div>

      <v-carousel :show-arrows="false" cycle hide-delimiters ref="carousel">
        <v-carousel-item v-for="(item, index) in heroIcons" :key="index">
          <img
            :src="item.icon"
            style="max-width: 600px; max-height: 600px"
            alt="icon"
            class="right-img "
          />

          
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>
<script setup>
import icon1 from "../assets/Asset 75@2.5x.png";
import icon2 from "../assets/hero2.png";
import icon3 from "../assets/hero3.png";
</script>

<script>
export default {
  name: "Hero",
  data() {
    return {
      heroIcons: [{ icon: icon1 }, { icon: icon2 }, { icon: icon3 }],
    };
  },
  props: {
    mainHeading: String,
    subHeading: String,
    boldDescription: String,
    normalDescription: String,
    reverseRow: Boolean,
    page: String,
    contentType: String,
  },
};
</script>

<style scoped>
.heading {
  font-size: 3.5rem;
  white-space: nowrap;
  font-weight: bold;
  line-height: 3.7rem;
  color: #ffc800;
}
.ndesc {
  font-size: 14px;
}

.left-part {
  max-width: 500px;
  margin-top: 6rem;
}
.sub-heading {
  font-size: 2.7rem;
  line-height: 2.9rem;
  white-space: nowrap;
}

.desc {
  white-space: nowrap;
  font-size: 1.25rem;
}

.custom-btn {
  height: 40px !important;
  width: 40% !important;
}

@media (max-width: 600px) {
  .right-img {
    width: 270px;
  }

  .heading {
    font-size: 2.8rem;
    white-space: wrap;
    text-align: center;
    line-height: 3rem;
  }

  .sub-heading {
    font-size: 2.4rem;
    line-height: 2.6rem;
    text-align: center;
    white-space: wrap;
  }

  .desc {
    white-space: wrap;
    text-align: center;
  }

  .custom-btn {
    width: 60% !important;
    font-size: 12px;
  }

  .left-part {
    align-items: center;
    margin-top: 3rem;
  }
}
</style>
