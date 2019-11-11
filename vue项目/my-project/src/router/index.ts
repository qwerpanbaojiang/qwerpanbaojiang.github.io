import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Classify from "../views/Classify.vue";
import News from "../views/News.vue";
import Shopcart from "../views/Shopcart.vue";
import Mine from "../views/Mine.vue";
import SearchBox from "../components/SearchBox.vue";
import Detailpage from "../views/Detailpage.vue";
import Listpage from "../views/Listpage.vue";
import Record from "../views/Record.vue";
import BuyOrder from "../views/BuyOrder.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/classify",
    name: "classify",
    component: Classify,
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: Shopcart
  },
  {
    path: "/mine",
    name: "mine",
    component: Mine
  },
  {
    path: "/searchbox",
    name: "searchbox",
    component: SearchBox
  },
  {
    path: "/datail/:id",
    name: "datail",
    component: Detailpage
  },
  {
    path: "/list/:id",
    name: "list",
    component: Listpage
  },
  {
    path: "/footmark",
    name: "footmark",
    component: Record
  },
  {
    path: "/buyorder",
    name: "buyorder",
    component: BuyOrder
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
