<template>
  <div>
    <header id="header">
      <div class="header-wrap">
        <div class="header-l">
          <a href="javascript:history.go(-1)">
            <i class="back"></i>
          </a>
        </div>
        <div class="header-title">
          <h1>确认订单</h1>
        </div>
        <Header_r />
      </div>
      <PageNav />
    </header>
    <CartMask />
  </div>
</template>

<script>
import CartMask from "../template/CartMask.vue";
import PageNav from "../template/PageNav.vue";
import Header_r from "../template/Header_r.vue";
export default {
  components: {
    PageNav,
    Header_r,
    CartMask
  }
};
</script>