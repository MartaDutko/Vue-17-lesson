<template>
  <main-masterpage>
    <div class="wraper">
      <filter-page />
      <div class="block__listProducts">
        <product-item
          v-for="product in getProductsList"
          :key="product.id"
          :data-item="product"
          @add="addToCourt"
          @edit="onEdit"
        />
        <div>
          <v-btn
            v-if="userPermissions.write"
            @click="onAdd()"
            class="small-button"
            ><font-awesome-icon :icon="['fas', 'plus']" />
          </v-btn>
        </div>
      </div>
    </div>
  </main-masterpage>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import ProductItem from "@/views/ProductsView/ProductItem.vue";
import FilterPage from "@/components/FilterPage.vue";

export default {
  name: "ProductsView",
  components: {
    MainMasterpage,
    ProductItem,
    FilterPage,
  },
  computed: {
    ...mapGetters("products", ["getProductsList"]),
    ...mapGetters("users", ["userPermissions"]),
  },
  methods: {
    ...mapActions("products", ["loadList"]),
    addToCourt(productId) {
      if (!localStorage.getItem("userCourt")) {
        const userCourt = [];
        userCourt.push(productId);
        localStorage.setItem("userCourt", JSON.stringify(userCourt));
      } else {
        const court = JSON.parse(localStorage.getItem("userCourt"));
        court.push(productId);
        localStorage.setItem("userCourt", JSON.stringify(court));
      }
    },
    onEdit(obj) {
      this.$router.push({
        name: "edit",
        params: { id: obj.id },
      });
    },
    onAdd() {
      this.$router.push({
        name: "edit",
      });
    },
  },
  created() {
    console.log("this.loadList()");
    this.loadList();
  },
};
</script>

<style lang="scss" scoped>
.wraper {
  display: flex;
}
.block__listProducts {
  width: 70%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 2% 5%;
}
</style>