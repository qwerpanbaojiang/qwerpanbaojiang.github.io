<template>
  <div>
    <header id="header">
      <div class="header-wrap">
        <div class="header-l">
          <a href="###">
            <i class="set"></i>
          </a>
        </div>
        <div class="header-title">
          <h1>我的</h1>
        </div>
        <Header_r />
      </div>
      <PageNav />
    </header>
    <div class="scroller-body">
      <div class="scroller-box">
        <MineTop />
        <MineCenter />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "../template/Footer.vue";
import PageNav from "../template/PageNav.vue";
import Header_r from "../template/Header_r.vue";
import MineTop from "../template/MineTop.vue";
import MineCenter from "../template/MineCenter.vue";
export default {
  components: {
    Footer,
    PageNav,
    Header_r,
    MineTop,
    MineCenter
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mine.css";
</style>