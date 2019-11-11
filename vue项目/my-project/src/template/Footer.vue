<template>
  <footer id="footer">
    <div id="footnav" class="footnav clearfix">
      <ul>
        <li>
          <router-link to="/">
            <i class="home"></i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/classify">
            <i class="categroy"></i>
            <p>分类</p>
          </router-link>
        </li>
        <li>
          <router-link to="/news">
            <i class="search"></i>
            <p>消息</p>
          </router-link>
        </li>
        <li>
          <router-link to="/shopcart">
            <i class="cart"></i>
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <i class="member"></i>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    home() {
      this.$store.dispatch("setHeader", {
        header_input: true,
        header_r: true,
        title: "",
        index: 0
      });
    },
    classify() {
      this.$store.dispatch("setHeader", {
        header_input: true,
        header_r: false,
        title: "",
        index: 1
      });
    },
    news() {
      this.$store.dispatch("setHeader", {
        header_input: false,
        header_r: false,
        title: "消息",
        index: 2
      });
    },
    shopcart() {
      this.$store.dispatch("setHeader", {
        header_input: false,
        header_r: false,
        title: "购物车",
        index: 3
      });
    },
    mine() {
      this.$store.dispatch("setHeader", {
        header_input: false,
        header_r: false,
        title: "",
        index: 4
      });
    }
  }
};
</script>