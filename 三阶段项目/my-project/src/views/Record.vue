<template>
  <div>
    <header id="header" class="fixed">
      <div class="header-wrap">
        <div class="header-l">
          <a href="javascript:history.go(-1)">
            <i class="back"></i>
          </a>
        </div>
        <div class="header-title">
          <h1>浏览记录</h1>
        </div>
        <div class="header-r">
          <a
            id="clearbtn"
            href="javascript:void(0);"
            @click="clearStorage"
            class="text"
            style="color:#fff;width: 1.6rem;height: 0.95rem;line-height:0.95rem"
          >清除</a>
        </div>
      </div>
    </header>
    <div class="nctouch-main-layout">
      <div id="viewlist" class="list">
        <ul class="goods-secrch-list" v-if="header.goodList">
          <li class="goods-item" v-for="(item,index) in goodList" :key="index">
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
            </dl>
          </li>
        </ul>
        <div v-else class="nctouch-norecord views">
          <div class="norecord-ico">
            <i></i>
          </div>
          <dl>
            <dt>暂无您的浏览记录</dt>
            <dd>可以去看看哪些想要买的</dd>
          </dl>
          <router-link to="/classify">
            <p class="btn">随便逛逛</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodList: []
    };
  },
  computed: {
    header() {
      return this.$store.getters.getStorage;
    }
  },
  methods: {
    goodPug(pugArr) {
      // window.console.log(pugArr);
      let _this = this;
      this.$axios
        .get("http://localhost:3000/goodpug", {
          params: {
            pugArr
          }
        })
        .then(({ data }) => {
          // window.console.log(data);
          this.goodList = data;
        });
    },
    clearStorage() {
      this.$store.dispatch("setStorage", {
        goodList: ""
      });
      this.goodList = [];
    }
  },
  watch: {
    header(newVal, oldVal) {
      if (newVal.goodList != oldVal.goodList) {
        if (newVal.goodList) {
          let arr = newVal.goodList.split("&").reverse();
          this.goodPug(arr);
        }
      }
    }
  },
  created() {
    if (this.header.goodList) {
      let arr = this.header.goodList.split("&").reverse();
      this.goodPug(arr);
    }
  }
};
</script>