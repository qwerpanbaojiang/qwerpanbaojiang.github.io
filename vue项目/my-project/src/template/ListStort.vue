<template>
  <div>
    <div class="goods-search-list-nav">
      <ul id="nav_ul">
        <li>
          <a
            href="javascript:void(0);"
            @click.stop="active(0,getIsok.isok)"
            :class="['',{'current':offset==0}]"
            id="sort_default"
            :key="0"
          >
            综合排序
            <i></i>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            @click="active(1,)"
            :class="['',{'current':offset==1}]"
            :key="1"
          >销量优先</a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            @click="active(2,getScreen.isok)"
            :key="2"
            id="search_adv"
            :class="['',{'current':offset==2}]"
          >
            筛选
            <i></i>
          </a>
        </li>
      </ul>
      <div class="browse-mode">
        <a href="javascript:void(0);" id="show_style" @click="changeStyle(getStyle.style)">
          <span :class="[getStyle.style?'browse-grid':'browse-list']"></span>
        </a>
      </div>
    </div>
    <div id="sort_inner" :class="['goods-sort-inner',{'hide':getIsok.isok}]">
      <span>
        <a href="javascript:void(0);" :class="['',{'cur':cur==0}]" @click="addCur(0)">
          综合排序
          <i></i>
        </a>
      </span>
      <span>
        <a href="javascript:void(0);" :class="['',{'cur':cur==1}]" @click="addCur(1)">
          价格从高到低
          <i></i>
        </a>
      </span>
      <span>
        <a href="javascript:void(0);" :class="['',{'cur':cur==2}]" @click="addCur(2)">
          价格从低到高
          <i></i>
        </a>
      </span>
      <span>
        <a href="javascript:void(0);" :class="['',{'cur':cur==3}]" @click="addCur(3)">
          人气排序
          <i></i>
        </a>
      </span>
    </div>
    <div :class="[getScreen.isok?'nctouch-full-mask left':'nctouch-full-mask right']">
      <div class="nctouch-full-mask-bg"></div>
      <div class="nctouch-full-mask-block">
        <div class="header">
          <div class="header-wrap">
            <div class="header-l">
              <a href="javascript:void(0);" @click="active(2,getScreen.isok)">
                <i class="back"></i>
              </a>
            </div>
            <div class="header-title">
              <h1>商品筛选</h1>
            </div>
            <div class="header-r">
              <a href="javascript:void(0);" id="reset" class="text">重置</a>
            </div>
          </div>
        </div>
        <div class="nctouch-main-layout-a secreen-layout" id="list-items-scroll" style="top: 2rem;">
          <div
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <dl>
              <dt>价格区间</dt>
              <dd>
                <span class="inp-balck">
                  <input
                    type="text"
                    id="price_from"
                    nctype="price"
                    pattern="[0-9]*"
                    class="inp"
                    placeholder="最低价"
                  />
                </span>
                <span class="line"></span>
                <span class="inp-balck">
                  <input
                    nctype="price"
                    type="text"
                    id="price_to"
                    pattern="[0-9]*"
                    class="inp"
                    placeholder="最高价"
                  />
                </span>
              </dd>
            </dl>
            <dl>
              <dt>商品所在地</dt>
              <dd>
                <span class="inp-balck add">
                  <select id="area_id">
                    <option value>不限</option>

                    <option value="1">北京</option>

                    <option value="2">天津</option>

                    <option value="3">河北</option>

                    <option value="4">山西</option>

                    <option value="5">内蒙古</option>

                    <option value="6">辽宁</option>

                    <option value="7">吉林</option>

                    <option value="8">黑龙江</option>

                    <option value="9">上海</option>

                    <option value="10">江苏</option>

                    <option value="11">浙江</option>

                    <option value="12">安徽</option>

                    <option value="13">福建</option>

                    <option value="14">江西</option>

                    <option value="15">山东</option>

                    <option value="16">河南</option>

                    <option value="17">湖北</option>

                    <option value="18">湖南</option>

                    <option value="19">广东</option>

                    <option value="20">广西</option>

                    <option value="21">海南</option>

                    <option value="22">重庆</option>

                    <option value="23">四川</option>

                    <option value="24">贵州</option>

                    <option value="25">云南</option>

                    <option value="26">西藏</option>

                    <option value="27">陕西</option>

                    <option value="28">甘肃</option>

                    <option value="29">青海</option>

                    <option value="30">宁夏</option>

                    <option value="31">新疆</option>

                    <option value="32">台湾</option>

                    <option value="33">香港</option>

                    <option value="34">澳门</option>

                    <option value="35">海外</option>
                  </select>
                  <i></i>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>商品类型</dt>
              <dd>
                <a
                  href="javascript:void(0);"
                  nctype="items"
                  id="gift"
                  @click="addStyle(0)"
                  :class="['',{current: checkedGroup.indexOf(0) > -1}]"
                >赠品</a>
                <a
                  href="javascript:void(0);"
                  nctype="items"
                  @click="addStyle(1)"
                  :class="['',{current: checkedGroup.indexOf(1) > -1}]"
                  id="groupbuy"
                >团购</a>
                <a
                  href="javascript:void(0);"
                  nctype="items"
                  @click="addStyle(2)"
                  :class="['',{current: checkedGroup.indexOf(2) > -1}]"
                  id="xianshi"
                >限时折扣</a>
                <a
                  href="javascript:void(0);"
                  nctype="items"
                  @click="addStyle(3)"
                  :class="['',{current: checkedGroup.indexOf(3) > -1}]"
                  id="virtual"
                >虚拟</a>
              </dd>
            </dl>
            <dl>
              <dt>店铺类型</dt>
              <dd>
                <a
                  href="javascript:void(0);"
                  @click="addStyle(4)"
                  :class="['',{current: checkedGroup.indexOf(4) > -1}]"
                  nctype="items"
                  id="own_shop"
                  class
                >平台自营</a>
              </dd>
            </dl>

            <div class="bottom">
              <a href="javascript:void(0);" class="btn-l" id="search_submit">筛选商品</a>
            </div>
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
      offset: 0,
      cur: 0,
      checkedGroup: [],
      classListChan: []
    };
  },
  computed: {
    getIsok() {
      return this.$store.getters.getIsok;
    },
    getScreen() {
      return this.$store.getters.getScreen;
    },
    getStyle() {
      return this.$store.getters.getStyle;
    }
  },
  methods: {
    active(index, isok) {
      this.offset = index;
      if (index == 0) {
        this.$store.dispatch("setListStort", {
          isok: !isok
        });
      } else if (index == 2) {
        this.$store.dispatch("setListScreen", {
          isok: !isok
        });
      }
    },
    addCur(index) {
      this.cur = index;
    },
    changeStyle(style) {
      this.$store.dispatch("setStyle", {
        style: !style
      });
    },
    addStyle(index) {
      if (this.checkedGroup.indexOf(index) == -1) {
        this.checkedGroup.push(index);
      } else {
        var spliceIndex = this.checkedGroup.indexOf(index);
        this.checkedGroup.splice(spliceIndex, 1);
      }
    }
  }
};
</script>