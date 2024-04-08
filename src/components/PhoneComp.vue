<template>
  <v-container>
    <RouterLink to="/welcome">
      <img
        src="../assets/Asset 9@3x.png"
        class="back-icon"
        style="width: 60px"
      />
    </RouterLink>

    <v-switch
      v-model="darkMode"
      color="primary"
      class="mt-5 login-switch"
      @change="toggleTheme()"
    >
      <template v-slot:thumb>
        <v-icon>{{
          darkMode ? "mdi-weather-sunny" : "mdi-weather-night"
        }}</v-icon>
      </template>
      <template v-slot:track>
        <v-icon>{{
          darkMode ? "mdi-moon-waning-crescent" : "mdi-white-balance-sunny"
        }}</v-icon>
      </template>
    </v-switch>
    <v-row
      class="d-flex justify-space-around flex-column align-center flex-lg-row mt-6 ga-8 ga-lg-0"
    >
      <div class="d-flex flex-column phone-left align-center">
        <div
          class="d-flex flex-column sub-phone ga-6 align-lg-right alig-center"
        >
          <!-- Text -->
          <img
            src="../assets/yellow-logo.png"
            style="width: 40px; height: 35px"
          />
          <!-- Text Fields -->
          <div class="mt-5">
            <p class="phone-mh">{{ heading }}</p>
            <p class="phone-desc">
              Please enter the pin code you have received from Pesaport
            </p>
          </div>

          <div class="d-flex ga-2 align-start">
            <v-text-field
      v-model="pinCode"
      label="Pin Code"
      variant="outlined"
      class="w-text-field"
      density="compact"
      color="black"
      :error="!pinCodeValid"
    ></v-text-field>

    <div class="phone-btn">
      <v-btn
        
        color="secondary"
        @click="handleSignIn"
      >
        <span class="btn-text">Submit</span>
      </v-btn>
      
    </div>
          </div>

          <div class="">
            <p class="phone-desc2">
              You haven't received the code/The code has expired
            </p>
            <v-btn class="" color="secondary" @click="handleSignIn">
              <span class="btn-text">Resend</span></v-btn
            >
          </div>

          <!-- Icons -->
        </div>
      </div>

      <div>
        <img src="../assets/hero2.png" class="welcome-img" alt="Image" />
        <p class="phone-head link-text text-center">Pesaport</p>
        <p class="phone-desc link-text text-center">
          You can start to create your investment easily <br />
          with its well tailored investment products
        </p>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTheme } from "vuetify";
import { useRouter } from 'vue-router';
import { ref } from "vue";
const darkMode = ref(false);
const theme = useTheme();
const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "customDark" : "customLight";

  console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};

const pinCode = ref('');
    const pinCodeValid = ref(true); // Initially assume pin code is valid

    const router = useRouter();

    const handleSignIn = () => {
      if (pinCode.value.trim() === '') {
        pinCodeValid.value = false; // Set pin code as invalid if it's empty
      } else {
        router.push('/dashboard/home');
      }
    };
</script>
<script>
export default {
  props: {
   
    heading: {
      type: String,
      required: true // This prop is required
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    },
    handleSignUp() {
      // Handle sign up logic
    },
    handleSignIn() {
      // Handle sign in logic
    },
  },
};
</script>
<style scoped>
.back-icon:hover {
  cursor: pointer;
}
.phone-left {
  background-color: white;

  width: 500px;
  padding: 20px;
  padding-top: 40px;
}
.phone-mh {
  font-size: 15px;
  font-weight: 500;
  color: black;
}
.w-btn {
  height: 45px !important;
  font-style: normal !important;
  width: 360px;
}
.link-text {
  text-decoration: none !important;
  color: rgb(var(--v-theme-textColor)) !important;
}
.welcome-head {
  font-size: 1.5rem;
  font-weight: 500;
}
.sub-phone {
  width: 60%;
}
.phone-head {
  font-size: 27px;
  font-weight: 500;
  color: black;
}
.phone-desc {
  font-size: 14px;
  color: black;
}
.welcome-img {
  max-width: 400px;
  max-height: 400px;
}
.phone-btn {
  width: 70px;
  height: 40px;
}
.phone-desc2 {
  font-size: 12px;
  color: black;
}
.logo {
  font-size: 16px;
  text-decoration: none !important;
  color: #ffc800;
  font-weight: 400;
}
.login-switch {
  position: absolute;
  top: 10px;
  right: 20px;
}
.btn-text {
  text-transform: none !important;
  color: white;
}

.w-text-field {
  width: 350px;
  color: black !important;
}

@media (max-width: 600px) {
  .phone-left {
    width: 300px;
    padding: 20px;
    padding-top: 40px;
  }
  .sub-phone {
    width: 80%;
  }
  .welcome-img {
    max-width: 300px;
    max-height: 500px;
  }
  .btn-text {
    text-transform: inherit;
    font-size: 13px;
  }

  .w-btn {
    width: 300px;
  }
  .login-switch {
    position: absolute;
    top: 5px;
    right: 20px;
  }
}

@media (max-width: 350px) {
  .phone-left {
    width: 200px;
    padding: 20px;
    padding-top: 40px;
  }
  .welcome-img {
    max-width: 250px;
    max-height: 500px;
  }

  .w-btn {
    width: 250px;
  }
  .btn-text {
    text-transform: inherit;
    font-size: 10px;
  }
}
</style>
