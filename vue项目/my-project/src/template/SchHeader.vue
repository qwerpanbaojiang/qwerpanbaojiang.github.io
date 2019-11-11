<template>
  <header id="header">
    <div class="header-wrap">
      <div class="header-l">
        <a href="javascript:history.go(-1)">
          <i class="back"></i>
        </a>
      </div>
      <div class="header-inp">
        <i class="icon"></i>
        <input
          type="text"
          class="search-input"
          value
          oninput="writeClear($(this));"
          id="keyword"
          placeholder
          maxlength="50"
          autocomplete="on"
          autofocus
        />
        <span class="input-del"></span>
      </div>

      <div class="header-r">
        <a
          id="header-nav"
          href="javascript:void(0);"
          class="search-btn"
          style="padding: 0.1rem 0.4rem 0.1rem 0"
        >搜索</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {

};
</script>