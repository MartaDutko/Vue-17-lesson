<template>
  <div class="block__filter">
    <label>Продавець:</label>
    <select v-model="selectedSeller" class="select__block">
      <option v-for="item in getProductsListSeler" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FilterPage",
  data() {
    return {
      selectedSeller: null,
    };
  },
  computed: {
    ...mapGetters("products", ["getProductsListSeler"]),
  },
  methods: {
    ...mapActions("products", ["loadFilteredData"]),
  },
  watch: {
    selectedSeller(newVal, oldVal) {
      console.log("oldVal");
      console.log(oldVal);

      this.loadFilteredData({
        fieldTitle: "seller",
        compareOperator: "==",
        valueToCompare: newVal,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.block__filter {
  width: 20%;
  .select__block {
    width: 80%;
    border: 1px solid rgb(108, 108, 108);
    border-radius: 5px;
  }
}
</style>