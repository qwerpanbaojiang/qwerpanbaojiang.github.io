<template>
  <div class="nctouch-home-layout" id="main-container2">
    <div class="nctouch-home-block item-goods" v-for="(item,index) in goods" :key="index">
      <div class="tit-bar" v-text="item.goods.title"></div>

      <ul class="goods-list">
        <li v-for="(list,index) in item.goods.item" :key="index">
          <router-link :to="'/datail/'+list.goods_id">
            <div class="goods-pic">
              <img :src="list.goods_image" alt />
            </div>
            <dl class="goods-info">
              <dt class="goods-name" v-text="list.goods_name"></dt>
              <dd class="goods-price">
                ￥
                <em v-text="list.goods_price"></em>
              </dd>
            </dl>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: []
    };
  },
  methods: {
    reqGoods() {
      this.$axios
        .get("http://localhost:3000/goods", {
          params: {
            id: "2"
          }
        })
        .then(({ data }) => {
          this.goods = data;
          // window.console.log(this.goods);
        });
    }
  },
  created() {
    this.reqGoods();
  }
};
</script>