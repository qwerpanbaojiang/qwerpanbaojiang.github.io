<template>
  <header id="header" :class="[this.$parent.changeStyle?'posf':'transparent']" style="top:0">
    <div class="header-wrap">
      <div class="header-l">
        <a href="javascript:history.go(-1)">
          <i class="back"></i>
        </a>
      </div>
      <ul class="header-nav">
        <li class="cur">
          <a href="javascript:void(0);">商品</a>
        </li>
        <li>
          <a href="javascript:void(0);" id="goodsBody">详情</a>
        </li>
        <li>
          <a href="javascript:void(0);" id="goodsEvaluation">评价</a>
        </li>
      </ul>
      <div class="header-r">
        <a
          id="header-nav"
          href="javascript:void(0);"
          style="width: 1.35rem;height: 1.35rem;"
          @click.stop="showNav(header.header_r)"
        >
          <i class="more"></i>
          <sup style="display: inline;top: -0.05rem;right: -0.05rem;"></sup>
        </a>
      </div>
    </div>
    <PageNav />
  </header>
</template>
<script>
import PageNav from "../template/PageNav.vue";
export default {
  components: {
    PageNav
  },
  computed: {
    header() {
      return this.$store.getters.getHeader;
    }
  },
  methods: {
    showNav(isok) {
      this.$store.dispatch("setHeader", {
        header_r: !isok
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>