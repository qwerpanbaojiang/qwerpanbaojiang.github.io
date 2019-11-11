<template>
  <div>
    <header id="header">
      <div class="header-wrap">
        <div class="header-l">
          <a href="javascript:history.go(-1)">
            <i class="back"></i>
          </a>
        </div>
        <Searchinput />
        <Header_r />
      </div>
      <PageNav />
    </header>
    <ListStort />
    <van-list :offset="50" v-model="loading" :finished="finished" @load="onLoad">
      <div class="nctouch-main-layout mt40 mb20">
        <div id="product_list" :class="[getStyle.style?'grid':'list']">
          <ul class="goods-secrch-list" v-if="restaurants.length>0">
            <li
              class="goods-item"
              v-for="(item,index) in restaurants"
              :key="index"
              :goods_id="item.goods_id"
            >
              <span class="goods-pic">
                <router-link :to="'/datail/'+item.goods_id">
                  <img :src="item.goods_image_url" />
                </router-link>
              </span>
              <dl class="goods-info">
                <dt class="goods-name">
                  <router-link :to="'/datail/'+item.goods_id">
                    <h4 v-text="item.goods_name"></h4>
                    <h6></h6>
                  </router-link>
                </dt>
                <dd class="goods-sale">
                  <router-link :to="'/datail/'+item.goods_id">
                    <span class="goods-price">
                      ￥
                      <em v-text="item.goods_price"></em>
                    </span>
                  </router-link>
                </dd>
                <dd class="goods-assist">
                  <router-link :to="'/datail/'+item.goods_id">
                    <span class="goods-sold">
                      销量
                      <em v-text="item.goods_salenum"></em>
                    </span>
                  </router-link>
                  <div class="goods-store">
                    <a href="javascript:void(0);" data-id>
                      潮男公社
                      <i></i>
                    </a>

                    <div class="sotre-creidt-layout" style="display: none;"></div>
                  </div>
                </dd>
              </dl>
            </li>

            <li class="loading" :style="{display:finished?'none':'block'}">
              <div class="spinner">
                <i></i>
              </div>商品数据读取中...
            </li>
          </ul>
        </div>
      </div>
    </van-list>
    <Footmark />
    <Footer />
  </div>
</template>

<script>
import Searchinput from "../template/Searchinput.vue";
import PageNav from "../template/PageNav.vue";
import Header_r from "../template/Header_r.vue";
import ListStort from "../template/ListStort.vue";
import Footmark from "../template/Footmark.vue";
import Footer from "../template/Footer.vue";
import Vue from "vue";
import { List } from "vant";
Vue.use(List);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      restaurants: []
    };
  },
  components: {
    Footer,
    PageNav,
    Searchinput,
    Header_r,
    ListStort,
    Footmark
  },
  computed: {
    getStyle() {
      return this.$store.getters.getStyle;
    }
  },
  methods: {
    onLoad() {
      this.$axios
        .get("http://localhost:3000/listImg", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(({ data }) => {
          window.console.log("被触发" + data[0]);
          this.restaurants = this.restaurants.concat(data[0].list);
          this.loading = false;
          // window.console.log(this.restaurants);
          if (this.restaurants.length >= 100 || this.restaurants.length < 20) {
            this.finished = true;
          }
        });
    }
  },

  watch: {
    $route(to, from) {
      if (to.params.id && to.name == "list" && from.name == "classify") {
        this.restaurants = [];
        this.finished = false;
        this.onLoad();
      }
    }
  }
};
</script>

<style lang="css" scoped>
@import "../assets/css/listpage.css";
@import "../assets/css/common.css";
</style>