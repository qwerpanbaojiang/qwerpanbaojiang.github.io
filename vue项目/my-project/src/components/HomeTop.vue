<template>
  <div class="nctouch-home-top fixed-Width">
    <header id="header">
      <div class="logo"></div>
      <div class="header-wrap">
        <Searchinput />
        <div class="header-r">
          <a id="header-nav" style="padding: 0.1rem 0.4rem 0.1rem 0">
            <i class="nsgdingdan"></i>
            <p>消息</p>
            <sup></sup>
          </a>
        </div>
      </div>
    </header>
    <div class="cohesive"></div>
    <Banner></Banner>
  </div>
</template>

<script>
import Searchinput from "../template/Searchinput";
import Banner from "../template/Banner.vue";
export default {
  components: {
    Searchinput,
    Banner
  }
};
</script>