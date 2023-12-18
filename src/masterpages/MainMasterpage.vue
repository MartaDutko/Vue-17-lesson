<template>
  <div class="header">
    <div class="header__menu">
      <nav>
        <router-link to="/">{{ $t("menu.main") }}</router-link> |
        <router-link :to="{ name: 'products' }">{{
          $t("menu.products")
        }}</router-link>
        |
        <router-link :to="{ name: 'cart' }">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </router-link>
      </nav>
    </div>
    <div class="header__info">
      <div class="local__block">
        <!-- local -->
        <span>{{ carentLanguage }}</span>
        <v-btn @click="changeLanguage('en')" variant="plain"> EN </v-btn>
        <span>|</span>
        <v-btn @click="changeLanguage('ua')" variant="plain"> UA </v-btn>
      </div>
      <div class="enter__block">
        <!-- login -->
        <div v-if="getUser" class="user__info">
          <v-btn @click="onLogout" prepend-icon variant="plain">
            <span>{{ $t("actionTitles.logout") }}</span>
            <img class="userLogo" :src="getUser.photoURL" />
          </v-btn>
        </div>

        <!-- logout -->
        <v-btn v-else @click="loginWithGoogle" prepend-icon variant="plain">
          <span>{{ $t("actionTitles.login") }}</span>
          <font-awesome-icon :icon="['fas', 'user']" />
        </v-btn>
      </div>
    </div>
  </div>
  <div v-if="isLoading">
    <span>Loading...</span>
    <font-awesome-icon :icon="['fas', 'rotate-right']" />
  </div>
  <div v-else-if="hasError" class="isError">
    <span>Error </span>
    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
  </div>
  <slot v-else></slot>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MainMasterpage",
  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("products", ["isLoading", "hasError"]),
    carentLanguage() {
      return this.$i18n.locale == "ua" ? "Українська" : "English";
    },
  },
  methods: {
    ...mapActions("auth", ["loginWithGoogle", "logout"]),
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lastLanguage", lang);
    },
    onLogout() {
      this.logout();
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  // .header__menu

  &__menu {
    width: 30%;
  }

  // .header__info

  &__info {
    width: 40%;

    display: flex;
    align-self: center;
    justify-content: center;
  }
}
.local {
  // .local__block

  &__block {
    min-width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.enter {
  // .enter__block

  &__block {
    width: 25%;
    .user__info {
      .userLogo {
        width: 25%;
        border-radius: 50%;
      }
    }
  }
}
</style>