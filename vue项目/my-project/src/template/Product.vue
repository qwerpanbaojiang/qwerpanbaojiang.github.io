<template>
  <div v-if="goods.length>0">
    <div id="product_detail_html" style="position: relative; z-index: 1;">
      <div class="goods-detail-top">
        <div class="goods-detail-pic" id="mySwipe" style="visibility: visible;">
          <ul style="width: 352px;">
            <li
              data-index="0"
              style="width: 352px; left: 0px; transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
            >
              <img :src="goods[0].goods_image_url" />
            </li>
          </ul>
        </div>
        <div class="goods-detail-turn">
          <ul>
            <li class="cur"></li>
          </ul>
        </div>
        <!--<div class="round pd-share"><i></i></div>-->
        <div class="favorate round pd-collect">
          <i></i>
        </div>
      </div>
      <div class="goods-detail-cnt">
        <div class="goods-detail-name">
          <dl>
            <dt v-text="goods[0].goods_name"></dt>
            <dt></dt>
            <dd></dd>
          </dl>
        </div>
        <div class="goods-detail-price">
          <dl>
            <dt>
              ￥
              <em v-text="goods[0].goods_price"></em>
            </dt>
          </dl>

          <span class="sold">
            销量：
            <em v-text="goods[0].goods_salenum"></em> 件
          </span>
        </div>

        <div class="goods-detail-item">
          <div class="itme-name">送至</div>
          <div class="item-con">
            <a href="javascript:void(0);" id="get_area_selected">
              <dl class="goods-detail-freight">
                <dt>
                  <span id="get_area_selected_name">全国</span>
                  <strong id="get_area_selected_whether">有货</strong>
                </dt>
                <dd id="get_area_selected_content">免运费</dd>
              </dl>
            </a>
          </div>
          <div class="item-more location"></div>
        </div>
        <div class="goods-detail-item" id="goods_spec_selected">
          <div class="itme-name">已选</div>
          <div class="item-con">
            <dl class="goods-detail-sel">
              <dt>
                <span>
                  颜色
                  <em>黑色</em>
                </span>

                <span>
                  尺码
                  <em>S</em>
                </span>
              </dt>
            </dl>
          </div>
          <div class="item-more"></div>
        </div>

        <div class="goods-detail-comment" id="goodsEvaluation1">
          <div class="title">
            <a id="goodsEvaluation1" href="javascript:void(0);">
              商品评价
              <span class="rate">
                好评率
                <em>100%</em>
              </span>
              <span class="rate-num">（0人评价）</span>
              <div class="item-more"></div>
            </a>
          </div>
          <div class="comment-info"></div>
        </div>
        <div class="goods-detail-store">
          <a href="store.html?store_id=39">
            <div class="store-name">
              <i class="icon-store"></i>
              <span v-text="goods[0].store_name"></span>
            </div>

            <div class="store-rate">
              <span class>
                描述相符
                <em>4.4</em>
                <i></i>
              </span>
              <span class>
                服务态度
                <em>4.5</em>
                <i></i>
              </span>
              <span class>
                发货速度
                <em>4.8</em>
                <i></i>
              </span>
            </div>

            <div class="item-more"></div>
          </a>
        </div>
        <div class="goods-detail-recom">
          <h4>店铺推荐</h4>
          <ul>
            <li>
              <a href="product_detail.html?goods_id=198237">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05445320283238931_240.jpg"
                  />
                </div>
                <dl>
                  <dt>夏季男士五分袖时尚运动套装青年圆领修身套头T恤潮短袖短裤 黑色 M</dt>
                  <dd>
                    ￥
                    <em>96.00</em>
                  </dd>
                </dl>
              </a>
            </li>

            <li>
              <a href="product_detail.html?goods_id=198323">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05445377728500139_240.jpg"
                  />
                </div>
                <dl>
                  <dt>夏季新款男士T恤运动套装 韩版青年圆领七分袖短裤学生休闲服 黑色 M</dt>
                  <dd>
                    ￥
                    <em>138.00</em>
                  </dd>
                </dl>
              </a>
            </li>

            <li>
              <a href="product_detail.html?goods_id=227087">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982353372811636_240.jpg"
                  />
                </div>
                <dl>
                  <dt>冬季情侣连帽棉衣男士宽松帅气面包服韩版加厚棉袄潮男装外套棉服 军绿色 S</dt>
                  <dd>
                    ￥
                    <em>179.00</em>
                  </dd>
                </dl>
              </a>
            </li>

            <li>
              <a href="product_detail.html?goods_id=203935">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05489390006654756_240.jpg"
                  />
                </div>
                <dl>
                  <dt>男士休闲短裤A331-520-p45男士多色五分休闲裤 黑色 M</dt>
                  <dd>
                    ￥
                    <em>88.00</em>
                  </dd>
                </dl>
              </a>
            </li>

            <li>
              <a href="product_detail.html?goods_id=199085">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05455072513922438_240.jpg"
                  />
                </div>
                <dl>
                  <dt>夏季新款个性开口袖条纹拼接T恤男士韩版字母刺绣短袖Tee衫潮 黑色 M</dt>
                  <dd>
                    ￥
                    <em>68.00</em>
                  </dd>
                </dl>
              </a>
            </li>

            <li>
              <a href="product_detail.html?goods_id=198272">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05445354619577546_240.jpg"
                  />
                </div>
                <dl>
                  <dt>夏季男士七分袖T恤年青年宽松圆领男装纯色打底衫 黑色 M</dt>
                  <dd>
                    ￥
                    <em>89.00</em>
                  </dd>
                </dl>
              </a>
            </li>

            <li>
              <a href="product_detail.html?goods_id=203827">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05487885462269823_240.jpg"
                  />
                </div>
                <dl>
                  <dt>OV条纹不规则衬衫 红色 M</dt>
                  <dd>
                    ￥
                    <em>189.00</em>
                  </dd>
                </dl>
              </a>
            </li>

            <li>
              <a href="product_detail.html?goods_id=203544">
                <div class="pic">
                  <img
                    src="https://www.nanshig.com/data/upload/shop/store/goods/39/39_05485238760056766_240.jpg"
                  />
                </div>
                <dl>
                  <dt>夏季奶瓶印花韩版宽松中袖体恤衫五分袖学生短袖t恤男衣服潮 杏色 M</dt>
                  <dd>
                    ￥
                    <em>72.00</em>
                  </dd>
                </dl>
              </a>
            </li>
          </ul>
        </div>
        <div class="goods-detail-bottom">
          <a href="javascript:void(0);" id="goodsBody1">点击查看商品详情</a>
        </div>
        <div class="goods-detail-foot">
          <div class="otreh-handle">
            <a href="javascript:void(0);" class="kefu">
              <i></i>
              <p>客服</p>
            </a>
            <router-link to="/shopcart" class="cart">
              <i></i>
              <p>购物车</p>
              <span id="cart_count">
                <sup>2</sup>
              </span>
              <sup></sup>
            </router-link>
          </div>

          <div class="buy-handle">
            <a href="javascript:void(0);" class="animation-up add-cart" @click="showUp">加入购物车</a>
            <a href="javascript:void(0);" class="animation-up buy-now" @click="showUp">立即购买</a>
          </div>
        </div>
      </div>
    </div>
    <div
      id="product_detail_spec_html"
      :class="[isok?'nctouch-bottom-mask up':'nctouch-bottom-mask down']"
    >
      <div class="nctouch-bottom-mask-bg"></div>
      <div class="nctouch-bottom-mask-block">
        <div class="nctouch-bottom-mask-tip" @click="hideDown">
          <i></i>点击此处返回
        </div>
        <div class="nctouch-bottom-mask-top goods-options-info">
          <div class="goods-pic">
            <img :src="goods[0].goods_image_url" />
          </div>
          <dl>
            <dt v-text="goods[0].goods_name"></dt>
            <dd class="goods-price">
              ￥
              <em v-text="goods[0].goods_price"></em>

              <span class="goods-storage">库存：1991件</span>
            </dd>
          </dl>
          <a href="javascript:void(0);" class="nctouch-bottom-mask-close" @click="hideDown">
            <i></i>
          </a>
        </div>
        <div class="nctouch-bottom-mask-rolling" id="product_roll">
          <div
            class="goods-options-stock"
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <dl class="spec">
              <dt spec_id>颜色：</dt>
              <dd>
                <a
                  href="javascript:void(0);"
                  specs_value_id="9803"
                  :class="[colorStyle==6?'current':'']"
                  @click="selectColor(6,'黑色')"
                >黑色</a>

                <a
                  href="javascript:void(0);"
                  specs_value_id="9809"
                  @click="selectColor(7,'白色')"
                  :class="[colorStyle==7?'current':'']"
                >白色</a>
              </dd>
            </dl>

            <dl class="spec">
              <dt spec_id>尺码：</dt>
              <dd>
                <a
                  href="javascript:void(0);"
                  specs_value_id="9805"
                  v-for="(item,index) in size"
                  :key="index"
                  v-text="item"
                  @click="selectSize(index,item)"
                  :class="[sizeStyle==index?'current':'']"
                ></a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="goods-option-value">
          购买数量
          <div class="value-box">
            <span class="minus">
              <a href="javascript:void(0);" @click="cutNum">&nbsp;</a>
            </span>
            <span>
              <input
                type="number"
                pattern="[0-9]*"
                class="buy-num"
                id="buynum"
                v-model.number="num"
                oninput="if(value<0)value=1;if(value>10)value=10"
              />
            </span>
            <span class="add">
              <a href="javascript:void(0);" @click="addNum">&nbsp;</a>
            </span>
          </div>
        </div>
        <div class="goods-option-foot">
          <div class="otreh-handle">
            <a href="javascript:void(0);" class="kefu">
              <i></i>
              <p>客服</p>
            </a>
            <router-link to="/shopcart" class="cart">
              <i></i>
              <p>购物车</p>
              <span id="cart_count1"></span>
            </router-link>
          </div>

          <div class="buy-handle">
            <a href="javascript:void(0);" class="add-cart" id="add-cart" @click="addToCart">加入购物车</a>
            <router-link to="/buyorder" class="buy-now" id="buy-now">立即购买</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [],
      size: ["M", "XL", "2XL", "3XL", "4XL", "5XL"],
      isok: false,
      sizeStyle: 0,
      colorStyle: 6,
      num: 1,
      goodsSize: "M",
      color: "黑色"
    };
  },
  methods: {
    askGoods() {
      // window.console.log(this.$route.params.id);
      this.$axios
        .get("http://localhost:3000/detail", {
          params: {
            goods_id: this.$route.params.id
          }
        })
        .then(({ data }) => {
          this.goods = data;
          // window.console.log(this.goods);
        });
    },
    showUp() {
      let _this = this;
      if (_this.isok) {
        window.console.log(1);
      } else {
        _this.isok = true;
      }
    },
    hideDown() {
      this.isok = false;
    },
    selectSize(index, item) {
      this.sizeStyle = index;
      this.goodsSize = item;
    },
    selectColor(index, color) {
      this.colorStyle = index;
      this.color = color;
    },
    cutNum() {
      this.num--;
      if (this.num < 1) {
        this.num = 1;
      }
    },
    addNum() {
      this.num++;
      if (this.num > 10) {
        this.num = 10;
      }
    },
    footMark(id) {
      let goodList = localStorage.goodList;
      // console.log(goodlist);
      if (goodList) {
        //证明有足迹
        // console.log(goodlist);
        let pugArr = goodList.split("&");
        // console.log(arr);
        let index = pugArr.indexOf(id); //-1没有，直接把id拼接在后面；非-1,有，去掉旧的id，再把新的id放到末尾
        // console.log(arr);
        // console.log(index);
        let pugStr = "";
        if (index >= 0) {
          //我的错，小心
          //有
          pugArr.splice(index, 1);
          pugArr.push(id);
          pugStr = pugArr.join("&");
        } else {
          //没有
          pugStr = goodList + "&" + id;
        }
        // let str = goodlist + '&' + id;
        // localStorage.goodList = pugStr;
        this.$store.dispatch("setStorage", {
          goodList: pugStr
        });
      } else {
        //没有足迹
        this.$store.dispatch("setStorage", {
          goodList: id
        });
        // localStorage.goodList = id;
      }
    },
    addToCart() {
      this.$axios
        .get("http://localhost:3000/shopcart", {
          params: {
            usid: 1,
            goods_id: this.$route.params.id,
            num: this.num,
            size: this.goodsSize,
            color: this.color,
            upData: true
          }
        })
        .then(({ data }) => {
          // this.goods = data;
          this.$store.dispatch("setGoodsID", {
            goods_id: this.$route.params.id,
            size: this.goodsSize,
            color: this.color
          });
          // window.console.log(data);
        });
    }
  },
  watch: {
    $route(to, from) {
      if (to.params.id != from.params.id) {
        if (to.params.id && to.name == "datail") {
          this.askGoods();
          this.footMark(to.params.id);
        }
      }
    }
  },
  created() {
    this.askGoods();
    this.footMark(this.$route.params.id);
  }
};
</script>