<template>
  <div id="product_list" class="grid" style="margin-top: 57px; display: block;">
    <p class="goods_recommend">商品推荐</p>
    <ul class="goods-secrch-list">
      <div class="nctouch-home-block item-goods">
        <ul class="goods-list" v-if="goodsType.length>0">
          <li v-for="(item,index) in goodsType[getIndex.index].list" :key="index">
            <router-link :to="'/datail/'+item.goods_id">
              <div class="goods-pic">
                <img :src="item.goods_image_url" alt />
              </div>
              <dl class="goods-info">
                <dt class="goods-name" v-text="item.goods_name"></dt>
                <dd class="goods-price">
                  ￥
                  <em v-text="item.goods_price"></em>
                </dd>
              </dl>
            </router-link>
          </li>
        </ul>
      </div>
    </ul>
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
      this.$axios.get("http://localhost:3000/listImg").then(({ data }) => {
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