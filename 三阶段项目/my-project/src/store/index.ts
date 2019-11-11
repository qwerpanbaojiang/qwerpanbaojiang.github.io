import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    header: {
      header_r: false,
    },
    typeIndex: {
      index: 0
    },
    listStort: {
      isok: true
    },
    listScreen: {
      isok: false
    },
    changeStyle: {
      style: false
    },
    storage: {
      goodList: ''
    },
    shopCart: {
      goods_id: '',
      size: '',
      color: '',
    }
  },
  mutations: {
    setHeader(state, newValue) {
      state.header = newValue
    },
    setIndex(state, newValue) {
      state.typeIndex = newValue
    },
    setListStort(state, newValue) {
      state.listStort = newValue
    },
    setListScreen(state, newValue) {
      state.listScreen = newValue
    },
    setStyle(state, newValue) {
      state.changeStyle = newValue
    },
    setStorage(state, newValue) {
      state.storage = newValue
      if (state.storage.goodList) {
        localStorage.goodList = state.storage.goodList;
      } else {
        localStorage.removeItem('goodList');
      }

    },
    setGoodsID(state, newValue) {
      state.shopCart = newValue
    },
  },
  actions: {
    setGoodsID(context, newValue) {
      context.commit('setGoodsID', newValue)
    },
    setHeader(context, newValue) {
      context.commit('setHeader', newValue)
    },
    setIndex(context, newValue) {
      context.commit('setIndex', newValue)
    },
    setListStort(context, newValue) {
      context.commit('setListStort', newValue)
    },
    setListScreen(context, newValue) {
      context.commit('setListScreen', newValue)
    },
    setStyle(context, newValue) {
      context.commit('setStyle', newValue)
    },
    setStorage(context, newValue) {
      context.commit('setStorage', newValue)
    }
  },
  getters: {
    getID(state) {
      return state.shopCart
    },
    getHeader(state) {
      return state.header
    },
    getIndex(state) {
      return state.typeIndex
    },
    getIsok(state) {
      return state.listStort
    },
    getScreen(state) {
      return state.listScreen
    },
    getStyle(state) {
      return state.changeStyle
    },
    getStorage(state) {
      if (localStorage.goodList) {
        state.storage.goodList = localStorage.goodList
      }
      return state.storage
    },
  },
  modules: {}
});
