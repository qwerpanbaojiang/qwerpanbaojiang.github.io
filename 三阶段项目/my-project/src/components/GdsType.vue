<template>
  <div class="nctouch-main-layout">
    <TypeNav />
    <TypePage />
  </div>
</template>

<script>
import TypeNav from "../template/TypeNav.vue";
import TypePage from "../template/TypePage.vue";
export default {
  components: {
    TypeNav,
    TypePage
  }
};
</script>