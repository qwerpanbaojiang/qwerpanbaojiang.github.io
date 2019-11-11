<template>
  <div>
    <DetailHeader />
    <Product />
  </div>
</template>

<script>
import DetailHeader from "../template/DetailHeader.vue";
import Product from "../template/Product.vue";

export default {
  data() {
    return {
      changeStyle: false
    };
  },
  components: {
    DetailHeader,
    Product
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
      let _this = this;
      // 滚动条距离页面顶部的距离
      // 以下写法原生兼容
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 50) {
        _this.changeStyle = true;
      } else {
        _this.changeStyle = false;
      }
      // window.console.log(this.$route.params.id);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  }
};
</script>

<style lang="scss" scoped>
// @import "../assets/css/base.css";
@import "../assets/css/detail.css";
// @import "../assets/css/common.css";
</style>