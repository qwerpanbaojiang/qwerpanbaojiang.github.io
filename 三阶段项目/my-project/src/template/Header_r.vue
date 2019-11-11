<template>
  <div class="header-r" @click.stop="showNav(header.header_r)">
    <a id="header-nav" href="javascript:void(0);" style="width: 0.95rem;
        height: 0.95rem;">
      <i class="more"></i>
      <sup></sup>
    </a>
  </div>
</template>

<script>
export default {
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