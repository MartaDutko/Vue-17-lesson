<template>
  <div class="block__form">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail>
        <v-text-field
          v-model="product.model"
          :label="$t('labelBtn.model')"
        ></v-text-field>

        <v-text-field
          v-model="product.price"
          :label="$t('labelBtn.price')"
          type="number"
        ></v-text-field>

        <v-text-field
          v-model="product.seller"
          :label="$t('labelBtn.seller')"
          type="text"
        ></v-text-field>

        <v-text-field
          v-model="product.title.ua"
          :label="$t('labelBtn.title.ua')"
          type="text"
        ></v-text-field>

        <v-text-field
          v-model="product.title.en"
          :label="$t('labelBtn.title.en')"
          type="text"
        ></v-text-field>

        <v-text-field
          v-model="product.imgsrc"
          :label="$t('labelBtn.imgsrc')"
          type="text"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2" @click="onApdate">{{
          btnTittle
        }}</v-btn>
        <v-btn type="submit" block class="mt-2" @click="onCancel"
          >Скасувати</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductsForm",

  props: {
    id: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      product: {
        title: { ua: "", en: "" },
      },
    };
  },
  computed: {
    ...mapGetters("products", ["getItemById"]),

    btnTittle() {
      return this.id ? "Змінити" : "Додати";
    },
  },
  methods: {
    ...mapActions("products", ["updateItem", "addItem"]),
    onApdate(event) {
      event.preventDefault();

      if (this.id) {
        const data = {
          model: this.product.model,
          price: this.product.price,
          seller: this.product.seller,
          imgsrc: this.product.imgsrc,
        };
        if (this.product.title) {
          console.log("this.product.title");
          console.log(this.product.title);
          data.title = this.product.title;
        }

        this.updateItem({
          itemId: this.id,
          data,
        });
      } else {
        this.addItem({ ...this.product });
      }
      this.resetForm();
      this.$router.push({
        name: "products",
      });
    },
    resetForm() {
      // Скидання форми до початкового стану
      this.product = {
        title: { ua: "", en: "" },
      };
    },
    onCancel(event) {
      event.preventDefault();
      this.resetForm();
      this.$router.push({
        name: "products",
      });
    },
  },
  created() {
    const item = { ...this.getItemById(this.id) };
    this.product = item
      ? { ...item, title: item.title || { ua: "", en: "" } }
      : { title: { ua: "", en: "" } };
  },
};
</script>

<style lang="scss" scoped>
.block__form {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>