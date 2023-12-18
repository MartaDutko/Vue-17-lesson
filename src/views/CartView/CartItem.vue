<template>
  <div class="block__item">
    <img :src="dataItem.imgsrc" class="itemImg" />
    <span class="itemTitle">{{ languageTitle }}</span>
    <span class="itemSubTitle">{{ dataItem.price }} ₴</span>
    <v-btn @click="deleteItem(dataItem.id)" class="small-button">
      <font-awesome-icon :icon="['fas', 'trash-can']" />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    dataItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    languageTitle() {
      return this.$i18n.locale === "ua"
        ? this.dataItem.title.ua
        : this.dataItem.title.en;
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  &__item {
    width: 20%;
    height: 45%;
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
.small-button {
  width: 40px;
  min-width: 40px;
}
</style>