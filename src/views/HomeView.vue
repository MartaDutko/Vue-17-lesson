<template>
  <main-masterpage>
    {{ $t("message.greetingMesage") }}
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";

export default {
  name: "HomeView",
  components: {
    MainMasterpage,
  },
};
</script>
