import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsView from "@/views/ProductsView";
import LoginView from "@/views/LoginView.vue";
import CartView from "@/views/CartView";
import ProductsForm from "@/views/ProductsForm.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiredAuth: false }
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    meta: { requiredAuth: false }
  },
  {
    path: "/products/edit/:id?",
    name: "edit",
    props: true,
    component: ProductsForm,
    meta: { requiredAuth: false }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { requiredAuth: false }
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
    meta: { requiredAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  if (to.meta?.requiredAuth) {
    let isAuthenticated = store.state.auth.user
    if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')
    if (!isAuthenticated)
      return {
        name: "login",
      }
  }
})


export default router;
