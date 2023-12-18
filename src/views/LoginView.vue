<template>
  <main-masterpage>
    <div class="block__login">
      <h1>{{ $t("message.loginMesage") }}</h1>
      <v-btn @click="onLogin" variant="plain"> Login </v-btn>
    </div>
    <v-app>
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-card-title>Error</v-card-title>
          <v-card-text>{{ alertMessage }}</v-card-text>
          <v-card-actions>
            <v-btn @click="closeDialog">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  components: {
    MainMasterpage,
  },
  data() {
    return {
      dialog: false,
      alertMessage: "",
    };
  },

  methods: {
    ...mapActions("auth", ["loginWithGoogle"]),
    showAlert(message) {
      this.alertMessage = message;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    async onLogin() {
      try {
        await this.loginWithGoogle();
        this.$router.push({
          name: "products",
        });
      } catch (error) {
        this.showAlert(error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.block__login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>