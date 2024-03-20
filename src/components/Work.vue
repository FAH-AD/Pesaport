<template>
  <div class="mt-10">
    <p class="text-center text-h4 font-weight-light" color="textColor">
      How it works
    </p>
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="4"
          md="4"
        >
          <WorkCard
            :icon="item.icon"
            :heading="item.heading"
            :description="item.description"
          />
        </v-col>
      </v-row>
    </v-container>

    <div class="container mt-16">
      
      <div class="work-left">
      
        <img src="../assets/Asset 3@3x.png" alt="Image" class="left-image" />

        
        <div>
          <div class="left-text">
            <span style="font-weight: 600; font-size: 1rem">4.8</span>
            <v-icon color="primary" size="20">mdi-star</v-icon>
          </div>

       
          <p style="font-weight: 600; font-size: 0.9rem">
            Rated by 100k Customers
          </p>
        </div>
      </div>

   
      <div class="work-right">
        <p class="work-desc" style="">
          Empower your Financial Journey with pesaport. Achieve your goals,
          Master your Budget, and embrace financial freedom. Your path to
          success begins here!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCard from "./Cards/WorkCard.vue";
import icon1 from "../assets/Asset 72@3x.png";

export default {
  name:'Work',
  data() {
    return {
      items: [
        {
          icon: icon1,
          heading: "Deposit",
          description:
            "Open real account and add funds. We work with more than 20 payment systems",
        },
        {
          icon: icon1,
          heading: "Invest",
          description:
            "Open real account and add funds. We work with more than 20 payment systems.",
        },
        {
          icon: icon1,
          heading: "Withdraw",
          description:
            "Open real account and add funds. We work with more than 20 payment systems.",
        },
      ],
    };
  },
  components: {
    WorkCard,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
}

.work-left {
  display: flex;
  align-items: center;

  gap: 1rem;
  padding: 10px;
}

.work-right {
  flex: 1;
  padding: 10px;
}

.left-image {
  background: #192135;
  width: 140px;
  border-radius: 50px;
  padding: 5px;
}

.left-text {
  display: flex;
  align-items: center;
}
.work-desc {
  font-size: 1.2rem;
  font-weight: 430;
}

@media (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }
  .work-desc {
    text-align: center;
  }

  .left-image {
    width: 100px;
  }
}
</style>
