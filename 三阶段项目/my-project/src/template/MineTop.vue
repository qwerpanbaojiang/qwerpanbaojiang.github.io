<template>
  <div class="member-top">
    <div class="member-info">
      <div class="user-avatar">
        <img src="https://www.nanshig.com/data/upload/shop/common/default_user_portrait.gif" />
      </div>
      <div class="user-name">
        <span>
          phone_18877188395
          <sup>V0</sup>
        </span>
      </div>
    </div>
    <div class="member-collect">
      <span>
        <a href="favorites.html">
          <em>0</em>
          <p>商品收藏</p>
        </a>
      </span>
      <span>
        <a href="favorites_store.html">
          <em>0</em>
          <p>店铺收藏</p>
        </a>
      </span>
      <span>
        <router-link to="/footmark">
          <i class="goods-browse"></i>
          <p>我的足迹</p>
        </router-link>
      </span>
    </div>
  </div>
</template>