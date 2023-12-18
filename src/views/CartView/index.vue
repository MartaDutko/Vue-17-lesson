<template>
  <main-masterpage>
    <h2 v-if="emptyCourt">{{ $t("message.emptyBasket") }}</h2>
    <div v-else class="block__cartList">
      <cart-item
        v-for="item in getCourt"
        :key="item.id"
        :data-item="item"
        @delete="onDelete"
      />
    </div>
    <div class="block__totalPrice">
      {{ $t("message.totalPrice") }} - {{ totalPrice }}
    </div>
    <div v-show="!emptyCourt" class="btnBuy">
      <v-btn @click="clear">Купити </v-btn>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import { mapActions, mapGetters } from "vuex";
import CartItem from "@/views/CartView/CartItem.vue";

export default {
  name: "CartView",
  components: {
    MainMasterpage,
    CartItem,
  },
  computed: {
    ...mapGetters("products", ["getProductsByIds"]),
    getCourt() {
      const ids = JSON.parse(localStorage.getItem("userCourt")) || [];
      return this.getProductsByIds(ids);
    },
    emptyCourt() {
      return this.getCourt.length < 1;
    },
    totalPrice() {
      let total = this.getCourt.reduce(
        (total, item) => total + parseInt(item.price),
        0
      );
      return total;
    },
  },
  methods: {
    ...mapActions("products", ["loadList"]),
    clear() {
      localStorage.removeItem("userCourt");
      window.location.reload();
    },
    onDelete(id) {
      let userCourt = JSON.parse(localStorage.getItem("userCourt")) || [];
      const updatedUserCourt = userCourt.filter((item) => item !== id);
      // Оновлення значення у localStorage
      localStorage.setItem("userCourt", JSON.stringify(updatedUserCourt));
      window.location.reload();
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style lang="scss" scoped>
.block__cartList {
  display: flex;
  flex-wrap: wrap;
  padding: 2% 5%;
}
.block__totalPrice {
  display: flex;
  justify-content: center;
}
.btnBuy {
  display: flex;
  justify-content: center;
}
</style>