<template>
  <div class="categroy-cnt" id="categroy-cnt">
    <ul
      class="categroy-list"
      style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
    >
      <li
        v-for="(item,index) in sign"
        :key="index"
        :class="['category-item',{'selected':getIndex.index==index}]"
        @click="active(index)"
      >
        <a href="javascript:void(0);" class="category-item-a category" :date-id="index">
          <div class="ci-fcategory-ico"></div>
          <div class="ci-fcategory-name" v-text="item"></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sign: ["上装", "下装", "鞋靴", "美妆", "套装"]
    };
  },
  computed: {
    getIndex() {
      return this.$store.getters.getIndex;
    }
  },
  methods: {
    active(index) {
      this.$store.dispatch("setIndex", {
        index: index
      });
    }
  }
};
</script>