<template>
  <div class="container">
    <header>
      <navigation />
    </header>
    <main>
      <RouterView />
    </main>
  <footer>
    <footer-nav />
  </footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import FooterNav from "./components/FooterNav.vue";

export default {
  name: "App",
  components: {
    Navigation,
    FooterNav,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../src/assets/font.css";
@import "../src/assets/reset.css";

#app {
  font-family: "Lato-Regular", sans-serif;
  font-size: 1em;
  background-color: #f1f9f7;
}

a {
  text-decoration: none; 
}

header {
  line-height: 1.5;
  max-height: 100vh;
}


</style>
