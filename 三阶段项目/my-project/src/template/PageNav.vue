<template>
  <div :style="{display:header.header_r?'block':'none'}" class="nctouch-nav-layout">
    <div class="nctouch-nav-menu">
      <span class="arrow"></span>
      <ul>
        <li>
          <router-link to="/">
            <i class="home"></i>首页
          </router-link>
        </li>
        <li>
          <router-link to="/classify">
            <i class="search"></i>搜索
          </router-link>
        </li>
        <li>
          <router-link to="/classify">
            <i class="categroy"></i>分类
          </router-link>
        </li>
        <li>
          <router-link to="/news">
            <i class="message"></i>消息
          </router-link>
        </li>
        <li>
          <router-link to="/shopcart">
            <i class="cart"></i>购物车
            <sup></sup>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <i class="member"></i>我的商城
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    header() {
      return this.$store.getters.getHeader;
    }
  }
};
</script>