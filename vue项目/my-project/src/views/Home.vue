<template>
  <div class="home">
    <HomeTop />
    <Goods />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTop from "../components/HomeTop.vue";
import Goods from "../template/Goods.vue";
import Footer from "../template/Footer.vue";
export default {
  name: "home",
  components: {
    HomeTop,
    Goods,
    Footer
  }
};
</script>

<style lang="css" scoped>
@import "../assets/css/base.css";
@import "../assets/css/index.css";
</style>
