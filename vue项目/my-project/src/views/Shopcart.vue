<template>
  <div>
    <header id="header">
      <div class="header-wrap">
        <div class="header-l">
          <a href="javascript:history.go(-1)">
            <i class="back"></i>
          </a>
        </div>
        <div class="header-title">
          <h1>购物车</h1>
        </div>
        <Header_r />
      </div>
      <PageNav />
    </header>
    <div class="nctouch-main-layout">
      <div id="cart-list-wp" v-if="goodsID.length<1">
        <div class="nctouch-norecord cart">
          <div class="norecord-ico">
            <i></i>
          </div>
          <dl>
            <dt>您的购物车还是空的</dt>
            <dd>去挑一些中意的商品吧</dd>
          </dl>
          <router-link to="/classify">
            <p class="btn">随便逛逛</p>
          </router-link>
        </div>
      </div>
      <div v-else id="cart-list-wp">
        <div class="nctouch-cart-container">
          <dl class="nctouch-cart-store">
            <dt>
              <span class="store-check">
                <input class="store_checkbox" @click="allCheck" type="checkbox" checked />
              </span>
              <i class="icon-store"></i>
              好男孩潮品铺
            </dt>
          </dl>
          <ul class="nctouch-cart-item">
            <li
              v-for="(item,index) in goodsItem"
              :key="index"
              :cart_id="item.goods_id"
              class="cart-litemw-cnt"
            >
              <div class="goods-check">
                <input type="checkbox" checked name="cart_id" value="35652" @click="checkRow" />
              </div>
              <div class="goods-pic">
                <router-link :to="'/datail/'+item.goods_id">
                  <img :src="item.goods_image_url" />
                </router-link>
              </div>
              <dl class="goods-info">
                <dt class="goods-name">
                  <router-link :to="'/datail/'+item.goods_id">
                    <h4 v-text="item.goods_name"></h4>
                  </router-link>
                </dt>
                <!--<dd class="goods-type"></dd>-->
              </dl>
              <div class="goods-del" :cart_id="item.goods_id">
                <a href="javascript:void(0);" @click="deletGoods(index)"></a>
              </div>
              <div class="goods-subtotal">
                <span class="goods-price">
                  ￥
                  <em v-text="item.goods_price"></em>
                </span>
                <span class="goods-sale"></span>
                <div class="value-box">
                  <span class="minus">
                    <a href="javascript:void(0);" @click="cutNum(index)">&nbsp;</a>
                  </span>
                  <span>
                    <input
                      type="text"
                      pattern="[0-9]*"
                      readonly
                      class="buy-num buynum"
                      oninput="if(value<0)value=1;"
                      v-model="goodsNum[index]"
                    />
                  </span>
                  <span class="add">
                    <a href="javascript:void(0);" @click="addNum(index)">&nbsp;</a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="nctouch-cart-bottom">
          <div class="all-check">
            <input class="all_checkbox" type="checkbox" checked @click="checkAll" />
          </div>
          <div class="total">
            <dl class="total-money">
              <dt>合计总金额：</dt>
              <dd>
                ￥
                <em v-text="total"></em>
              </dd>
            </dl>
          </div>
          <div class="check-out ok">
            <a href="javascript:void(0)">确认信息</a>
          </div>
        </div>
      </div>
    </div>
    <Footer v-if="goodsID.length<1" />
  </div>
</template>

<script>
import Footer from "../template/Footer.vue";
import PageNav from "../template/PageNav.vue";
import Header_r from "../template/Header_r.vue";
export default {
  data() {
    return {
      goodsNum: [],
      goodsID: [],
      goodsItem: [],
      total: ""
    };
  },
  components: {
    Footer,
    PageNav,
    Header_r
  },
  methods: {
    //  获取购物车商品ID
    getGoodsID() {
      this.$axios
        .get("http://localhost:3000/shopcart", {
          params: {
            usid: 1,
            findID: true
          }
        })
        .then(({ data }) => {
          // this.goods = data;
          for (let item of data) {
            if (this.goodsID.indexOf(item == -1)) {
              this.goodsID.push(item.goods_id);
              this.goodsNum.push(item.num * 1);
            }
          }
          this.getGoods(this.goodsID);
        });
    },
    //  获取购物车商品数据渲染
    getGoods(pugArr) {
      // window.console.log(pugArr);
      this.$axios
        .get("http://localhost:3000/goodpug", {
          params: {
            pugArr
          }
        })
        .then(({ data }) => {
          this.goodsItem = this.goodsItem.concat(data);
          this.sumTotal();
          // window.console.log(this.goodsItem);
        });
    },
    // 添加数量
    addNum(i) {
      let _this = this;
      let arr = [];
      _this.goodsNum.forEach(function(item, index) {
        if (index == i) {
          item++;
        }
        arr.push(item);
      });
      _this.goodsNum = arr;
      this.sumTotal();
    },
    // 添加数量
    cutNum(i) {
      let _this = this;
      let arr = [];
      _this.goodsNum.forEach(function(item, index) {
        if (index == i) {
          item--;
          if (item < 1) {
            item = 1;
          }
        }
        arr.push(item);
      });
      _this.goodsNum = arr;
      this.sumTotal();
    },
    // 店铺全选框
    allCheck() {
      let isok = document.querySelector(".store_checkbox").checked;
      let goods_check = document.querySelectorAll(".goods-check input");
      goods_check.forEach(function(item, index) {
        item.checked = isok;
      });
      if (isok) {
        this.sumTotal();
      } else {
        this.total = 0.0;
      }
    },
    checkArr() {
      //  单选框状态
      let goods_check = document.querySelectorAll(".goods-check input");
      let arr = []; //存放勾选复选框的下标
      goods_check.forEach(function(item, index) {
        if (item.checked) {
          //被勾选了
          arr.push(index);
        }
      });
      return arr;
    },
    // 全选框
    checkAll() {
      let isok = document.querySelector(".all_checkbox").checked;
      let goods_check = document.querySelectorAll(".goods-check input");
      document.querySelector(".store_checkbox").checked = isok;
      goods_check.forEach(function(item, index) {
        item.checked = isok;
      });
      if (isok) {
        this.sumTotal();
      } else {
        this.total = 0.0;
      }
    },
    //  单选框反控制全选框
    checkRow() {
      let len = document.querySelectorAll(".goods-check input").length; //复选框的个数
      let checkNum = this.checkArr().length;
      if (len == checkNum) {
        //已经全选
        document.querySelector(".all_checkbox").checked = true;
        document.querySelector(".store_checkbox").checked = true;
      } else {
        document.querySelector(".all_checkbox").checked = false;
        document.querySelector(".store_checkbox").checked = false;
      }
      this.sumTotal();
    },
    //  计算总价
    sumTotal() {
      let _this = this;
      let total = 0;
      let indexArr = _this.checkArr();
      if (indexArr.length > 0) {
        indexArr.forEach(function(item, index) {
          total +=
            1 *
            (_this.goodsNum[item] * _this.goodsItem[item].goods_price).toFixed(
              2
            );
        });
        this.total = total;
      } else {
        window.console.log(indexArr);
        for (var i = 0; i < _this.goodsID.length; i++) {
          total +=
            1 * (_this.goodsNum[i] * _this.goodsItem[i].goods_price).toFixed(2);
        }
        this.total = total;
      }
    },
    //  删除商品
    deletGoods(i) {
      let _this = this;
      let indexArr = _this.checkArr();
      let ok = confirm("您确定要删我吗？");
      if (ok) {
        let total = 0;
        _this.goodsItem.splice(i, 1);
        _this.goodsNum.splice(i, 1);
        indexArr.splice(i, 1);
        indexArr.forEach(function(item, index) {
          total +=
            1 *
            (
              _this.goodsNum[index] * _this.goodsItem[index].goods_price
            ).toFixed(2);
        });
        this.total = total;
      }
    }
  },
  computed: {
    getID() {
      return this.$store.getters.getID;
    }
  },
  watch: {
    getID(newValue, oldValue) {
      if (newValue != oldValue) {
        let arr = [];
        arr.push(newValue.goods_id);
        this.getGoods(arr);
      }
    }
  },
  created() {
    this.getGoodsID();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/shopCart.css";
</style>