<template>
  <div id="app" @click="hideNav()">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  computed: {
    header() {
      return this.$store.getters.getHeader;
    }
  },
  methods: {
    hideNav() {
      this.$store.dispatch("setHeader", {
        header_r: false
      });
      this.$store.dispatch("setListStort", {
        isok: true
      });
    }
  }
};
</script>
<style lang="scss">
</style>
