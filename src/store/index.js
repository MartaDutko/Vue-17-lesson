import { createStore } from "vuex";
import auth from "@/store/modules/auth";
import users from "@/store/modules/users";
import products from "@/store/modules/products";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    users,
    products,
  },
});
