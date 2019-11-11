<template>
  <div class="adv_list" id="main-container1">
    <div class="swipe-wrap">
      <div class="item">
        <a href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E6%BD%AE%E7%94%B7">
          <img
            :src="banner.image"
            alt
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: ""
    };
  },
  methods: {
    resImg() {
      this.$axios
        .get("http://localhost:3000/banner", {
          params: {
            id: "1"
          }
        })
        .then(({ data }) => {
          this.banner = data[0].adv_list.item[0];
          // this.restaurants = [...this.restaurants, ...data];
          // window.console.log(this.banner);
          // 加载状态结束
        });
    }
  },
  created() {
    this.resImg();
  }
};
</script>