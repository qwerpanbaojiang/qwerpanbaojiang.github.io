<template>
  <div>
    <header id="header">
      <div class="header-wrap">
        <div class="header-l">
          <a href="javascript:history.go(-1)">
            <i class="back"></i>
          </a>
        </div>
        <Searchinput />
        <Header_r />
      </div>
      <PageNav />
    </header>
    <GdsType />
    <Footer />
  </div>
</template>

<script>
import Footer from "../template/Footer.vue";
import Searchinput from "../template/Searchinput.vue";
import PageNav from "../template/PageNav.vue";
import Header_r from "../template/Header_r.vue";
import GdsType from "../components/GdsType.vue";
export default {
  components: {
    Footer,
    PageNav,
    Searchinput,
    Header_r,
    GdsType
  },
  methods: {}
};
</script>

<style lang="css" scoped>
/* @import "../assets/css/base.css";
@import "../assets/css/index.css"; */
@import "../assets/css/classify.css";
</style>
