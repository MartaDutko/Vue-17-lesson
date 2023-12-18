<template>
  <div class="block__item">
    <img :src="dataItem.imgsrc" class="itemImg" />
    <span class="itemTitle">{{ languageTitle }}</span>
    <span class="itemSubTitle">{{ dataItem.price }} ₴</span>
    <div>
      <v-btn @click="onAddToCart(dataItem.id)"
        >{{ $t("btnTitle.buy") }}
        <font-awesome-icon :icon="['fas', 'cart-shopping']"
      /></v-btn>
      <div class="block__admin">
        <v-btn
          v-if="userPermissions.delete"
          @click="deleteItem(dataItem.id)"
          class="small-button"
        >
          <font-awesome-icon :icon="['fas', 'trash-can']"
        /></v-btn>
        <v-btn
          v-if="userPermissions.update"
          @click="onEdit(dataItem)"
          class="small-button"
          ><font-awesome-icon :icon="['far', 'pen-to-square']" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductItem",
  props: {
    dataItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("users", ["userPermissions"]),
    languageTitle() {
      return this.$i18n.locale === "ua"
        ? this.dataItem.title.ua
        : this.dataItem.title.en;
    },
  },
  methods: {
    ...mapActions("products", ["deleteItem"]),
    onAddToCart(id) {
      this.$emit("add", id);
    },
    // onDelete(id) {
    //   this.$emit("delete", id);
    // },
    onEdit(productObj) {
      this.$emit("edit", productObj);
    },
    // onAdd() {
    //   this.$emit("addProduct");
    // },
  },
};
</script>

<style lang="scss" scoped>
.block {
  // .block__item

  &__item {
    width: 20%;
    height: 60%;
    padding: 2%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    border: 1px solid rgb(145, 145, 145);
  }
  &__item:hover {
    border: 1px solid rgb(12, 11, 11);
  }
}
.itemImg {
  max-width: 100%;
}
.itemTitle {
  font-size: 15px;
}
.itemSubTitle {
  font-size: 20px;
  font-weight: 800;
}
.block__admin {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  .small-button {
    width: 40px;
    min-width: 40px;
  }
}
</style>