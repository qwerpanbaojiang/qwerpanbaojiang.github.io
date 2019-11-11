<template>
  <div id="store-wrapper">
    <div class="nctouch-search-layout">
      <dl class="hot-keyword">
        <dt>热门搜索</dt>
        <dd id="hot_list_container">
          <ul>
            <li>
              <a
                href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E6%BD%AE%E7%94%B7"
              >潮男</a>
            </li>

            <li>
              <a
                href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E5%A4%96%E5%A5%97"
              >外套</a>
            </li>

            <li>
              <a
                href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E4%B8%83%E5%88%86%E8%A3%A4"
              >七分裤</a>
            </li>

            <li>
              <a href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=t%E6%81%A4">t恤</a>
            </li>

            <li>
              <a
                href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E8%A1%AC%E8%A1%AB"
              >衬衫</a>
            </li>

            <li>
              <a
                href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E9%A6%99%E6%B0%B4"
              >香水</a>
            </li>

            <li>
              <a
                href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E5%B8%86%E5%B8%83%E9%9E%8B"
              >帆布鞋</a>
            </li>

            <li>
              <a
                href="https://www.nanshig.com/wap/tmpl/product_list.html?keyword=%E8%BF%90%E5%8A%A8%E4%BC%91%E9%97%B2"
              >运动休闲</a>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>历史纪录</dt>
        <dd id="search_his_list_container">
          <a
            href="javascript:void(0);"
            class="clear-history"
            onclick="$(this).prev().remove();delCookie('hisSearch');"
          >清空历史</a>
        </dd>
      </dl>
    </div>
  </div>
</template>