<template>
  <div>
    <SchHeader />
    <SearchMain />
    <Footer />
  </div>
</template>

<script>
import SchHeader from "../template/SchHeader";
import SearchMain from "../template/SearchMain";
import Footer from "../template/Footer";
export default {
  components: {
    SchHeader,
    SearchMain,
    Footer
  }
};
</script>

<style lang="css" scoped>
@import "../assets/css/searchbox.css";
</style>