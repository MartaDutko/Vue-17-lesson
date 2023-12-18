<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #9fa0a0;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
<script>
export default {
  created() {
    this.$i18n.locale =
      localStorage.getItem("lastLanguage") || process.env.VUE_APP_I18N_LOCALE;

    const self = this;
    window.addEventListener("storage", function () {
      if (self.$i18n.locale !== localStorage.getItem("lastLanguage")) {
        self.$i18n.locale = localStorage.getItem("lastLanguage");
        self.$router.go();
      }
    });
  },
};
</script>