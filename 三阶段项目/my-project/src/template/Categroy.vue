<template>
  <div class="categroy-rgt" id="categroy-rgt">
    <dl class="categroy-child-list" v-if="goodsType.length>0">
      <dt>
        <router-link :to="'/list/'+goodsType[getIndex.index].class_list.gc_id">
          <i class="col"></i>
          <span v-text="goodsType[getIndex.index].class_list.gc_name"></span>
          <i class="arrow-r"></i>
        </router-link>
      </dt>

      <dd v-for="(item,index) in goodsType[getIndex.index].class_list.child" :key="index">
        <router-link :to="'/list/'+getIndex.index">
          <img style="height: 70%;" :src="item.gc_image" />
          <p v-text="item.gc_name"></p>
        </router-link>
      </dd>
    </dl>
    <dl class="categroy-child-list"></dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsType: []
    };
  },
  computed: {
    getIndex() {
      return this.$store.getters.getIndex;
    }
  },
  methods: {
    reqGoodsType() {
      this.$axios.get("http://localhost:3000/typeImg").then(({ data }) => {
        this.goodsType = data;
        // window.console.log(this.goodsType);
      });
    }
  },
  created() {
    this.reqGoodsType();
  }
};
</script>