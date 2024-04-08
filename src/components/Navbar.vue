<template>
  <div class="navbar">
    <v-app-bar
      app
      color="transparent"
      elevation="0"
      class="px-4 pa-4 pa-lg-7 px-lg-16"
      absolute
      ref="navbar"
    >
      <RouterLink to="/">
        <img
          class="mr-lg-7 mt-5"
          :src="darkMode ? darkLogo : lightLogo"
          alt="Logo"
          style="height: 40px; cursor: pointer"
        />
      </RouterLink>
      <v-toolbar-title app height="auto" class="d-lg-block d-none text-center">
        <v-toolbar-items>
          <p class="cutom-btn" v-for="(item, index) in menuItems" :key="index">
            <template v-if="index === 2 && item.dropdown">
              <div class="text-center">
                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <RouterLink
                      to="/products"
                      v-bind="props"
                      class="router-link"
                      :class="{ active: isActive('/products') }"
                    >
                      Products & Services
                    </RouterLink>
                  </template>

                  <v-list bg-color="background">
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <RouterLink :to="item.link" class="product-link">{{
                        item.title
                      }}</RouterLink>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </template>
            <template v-else>
              <RouterLink
                :to="item.link"
                class="router-link"
                :class="{ active: isActive(item.link) }"
                >{{ item.heading }}</RouterLink
              >
            </template>
          </p>
        </v-toolbar-items>
      </v-toolbar-title>
      <v-spacer class="d-sm-block d-lg-none"></v-spacer>
      <v-toolbar-items class="d-sm-block d-lg-none">
        <v-btn icon @click="toggleDrawer">
          <v-icon v-if="!drawer">mdi-menu</v-icon>
          <v-icon v-else>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="d-lg-flex align-center">
        <RouterLink to="/welcome">
          <div class="button-default button-slanted d-none d-lg-block sign-in">
            <span class="button-slanted-content">Sign in</span>
          </div>
        </RouterLink>
        <RouterLink to="/signUp">
          <div class="button-default button-slanted d-none d-lg-block sign-up">
            <span class="button-slanted-content">Sign Up</span>
          </div>
        </RouterLink>
        <v-switch
          v-model="darkMode"
          color="primary"
          class="mt-5 custom-switch"
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
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      width="250"
      v-model="drawer"
      color="background"
      class="d-sm-block d-lg-none"
      app
    >
      <v-list>
        <v-list-item v-for="(item, index) in responsiveMenu" :key="index">
          <RouterLink
            :to="item.link"
            class="router-link"
            :class="{ active: isActive(item.link) }"
            >{{ item.heading }}</RouterLink
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
import lightLogo from "../assets/Asset 44@3x.png";
import darkLogo from "../assets/Asset 2@3x.png";
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const theme = useTheme();
const darkMode = ref(false);
const isFixed = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100 && !isFixed.value) {
    isFixed.value = true;
    console.log(isFixed.value);
  } else if (scrollPosition <= 100 && isFixed.value) {
    isFixed.value = false;
  }
};

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "customDark" : "customLight";

  console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};

const isActive = (path) => {
  return route.path === path;
};
</script>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "  Products & Services", link: "/products" },
        { title: "Calculator", link: "/calculator" },
      ],
      menuItems: [
        { heading: "Home", link: "/" },
        { heading: "About", link: "/about" },
        {
          heading: "Dropdown",
          dropdown: [
            { heading: "Dropdown Item 1", link: "/dropdown1" },
            { heading: "Dropdown Item 2", link: "/dropdown2" },
          ],
        },
        { heading: "Performance", link: "/performance" },
        { heading: "Support", link: "/support" },
        { heading: "Invest Now", link: "/investNow" },
      ],
      responsiveMenu: [
        { heading: "Home", link: "/" },
        { heading: "About", link: "/about" },
        { heading: "Product & Services", link: "/products" },
        { heading: "Performance", link: "/performance" },
        { heading: "Support", link: "/support" },
        { heading: "Sign In", link: "/welcome" },
        { heading: "Sign Up", link: "/signUp" },
        { heading: "Invest Now", link: "/investNow" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
  padding: 3px 10px;
  font-size: 14px;

  color: rgb(var(--v-theme-textColor));
  &:hover {
    color: rgb(var(--v-theme-primary));
    cursor: pointer;
  }
}

.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0px 20px !important;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}
.custom-switch {
  position: inherit;
}

.active {
  color: #ffa000 !important;
}
.custom-btn {
  padding: 3px 10px;
  font-size: 14px;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }
}

.elevated {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}
.product-link {
  font-size: 12px;
  text-decoration: none;
  color: black;
  &:hover {
    color: rgb(var(--v-theme-primary));
    cursor: pointer;
  }
}
.button-default {
  color: black;
  text-align: center;
  padding: 4px 29px;
  margin: 10px;
  color: rgb(var(--v-theme-textColor));

  &:hover {
    background-color: rgb(var(--v-theme-primary));
    color: black;
  }

  display: inline-block;
}

.button-default:hover {
  background-color: rgb(var(--v-theme-));
  cursor: pointer;
}

.sign-in {
  border: 2px solid #ffc800;
}

.sign-up {
  background-color: #ffc800;
}

.button-slanted {
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

.button-slanted-content {
  -ms-transform: skewX(20deg);
  -webkit-transform: skewX(20deg);
  transform: skewX(20deg);
  display: inline-block;
}

.custom-btn:hover {
  cursor: pointer;
  color: var(--theme-primary-base);
}

.hidden-xs-only {
  display: none;
}

.v-label {
  font-size: 10px important;
  font-weight: bold;
}

@media (max-width: 600px) {
  .hidden-sm-and-up {
    display: none;
  }

  .hidden-xs-only {
    display: flex;
  }
}
</style>
