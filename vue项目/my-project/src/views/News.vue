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
          <h1>消息</h1>
        </div>
        <Header_r />
      </div>
      <PageNav />
    </header>
    <NewNull />
  </div>
</template>

<script>
import PageNav from "../template/PageNav.vue";
import Header_r from "../template/Header_r.vue";
import NewNull from "../template/NewNull.vue";
export default {
  components: {
    PageNav,
    Header_r,
    NewNull
  },
  methods: {}
};
</script>